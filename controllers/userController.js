const User = require('../models/userModel');

// Fetch all users from the database
const getUsers = (req, res) => {
  User.getAllUsers((err, users) => {
    if (err) return res.status(500).json({ error: 'Server error' });
    res.json(users);
  });
};

module.exports = {
  getUsers,
};
