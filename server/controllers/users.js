const User = require("../models/user");

exports.getUsers = async (req, res) => {
  const users = await User.find();
  return res.json({
    users,
  });
};

exports.getUser = (req, res) => {
  // fetch user with id
  const id = req.params.id;
  // Implement logic to fetch all users and send them in the response
  res.json({
    user: USERS.find((user) => user.id === +id),
  }); // replace with actual user data
};

exports.createUser = async (req, res) => {
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

    const user = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      user,
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        ...req.body,
      },
      {
        new: true,
      }
    );
    if (!user) {
      throw new Error("Something went wrong...");
    }
    return res.json({
      user,
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new Error("Something went wrong...");
    }
    return res.json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new Error("Email and password are required.");
    }
    const user = await User.findOne({
      email,
      password,
    });
    if (!user) {
      throw new Error("Invalid credentials.");
    }
    return res.json({
      success: true,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};
