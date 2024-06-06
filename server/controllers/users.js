const User = require("../models/user");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json({
      users,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    return res.json({
      success: true,
      user: req.currentUser
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
