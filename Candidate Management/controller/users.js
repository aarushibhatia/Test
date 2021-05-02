var express = require('express'),
    router = express.Router(),
    signup = require('../models/users/signup.js'),
    addJoiningDeets = require('../models/users/addJoiningDeets.js');

router.post('/signup', function(req, res) {
  signup.addUser(req, res, function(err, data) {
    if (err) {
      res.json({ 'error': true, 'message': 'Error adding user .. !' });
    } else {
      res.json({ 'success': true, 'message': 'User added succesfully' });
    }
  });
});

router.post('/addJoiningDeets', function(req, res) {
  addJoiningDeets.addUser(req, res, function(err, data) {
    if (err) {
      res.json({ 'error': true, 'message': 'Error updating user details .. !' });
    } else {
      res.json({ 'success': true, 'message': 'User Details updated succesfully' });
    }
  });
});

module.exports = router;