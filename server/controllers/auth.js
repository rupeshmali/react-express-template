const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require("../models/user");
const { makeUser } = require('../utils');


exports.signUp = async (req, res) => {
    const { name, email, password } = req.body;
  /**
   * validations
   */
  try {
    if (!email) {
      throw new Error("Email is required.");
    }
    if (!password) {
      throw new Error("Password is required.");
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    await User.create({
      name,
      email,
      password: hashedPassword
    });

    return res.status(201).json({
      success: true,
      message: `Successfully registered`
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
}

exports.signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        throw new Error("Email and password are required.");
      }
      
      const user = await User.findOne({
        email
      }).lean();
      if (!user) {
        throw new Error("Invalid credentials.");
      }
      if(!bcrypt.compareSync(password, user.password)){
        throw new Error("Invalid credentials.");
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
      return res.json({
        success: true,
        message: `Welcome ${user.name}`,
        user: makeUser(user),
        token
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
        success: false,
      });
    }
}

