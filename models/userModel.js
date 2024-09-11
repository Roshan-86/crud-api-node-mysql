const db = require('../config/db');

// Function to get all users
const getAllUsers = (callback) => {
  const sql = 'SELECT * FROM tbl_users';
  db.query(sql, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

module.exports = {
  getAllUsers,
};
