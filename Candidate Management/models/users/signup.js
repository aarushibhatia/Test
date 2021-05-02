var Candidate = require("../candidate.js");
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const { check, validationResult } = require('express-validator');

mongoose.connect('mongodb://localhost:27017/Candidates', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
	console.log("Connection Successful!");
});

/**
 * Defines Signup operations.
 * @class
 */
var signup = function () { };

/**
 * save user data 
 * @Function
 * @param callback
 * @param feedbackQuery
 */



signup.prototype.addUser = function (req, res, callback) {

	Candidate.findOne({ email: req.body.email })
		.then(candidate => {
			if (!candidate) {
				hashPassword(req.body.password, result => {
					const candidate = new Candidate({
						email: req.body.email,
						name: req.body.name,
						contact: req.body.contact,
						gender: req.body.gender,
						age: req.body.age,
						password: result
					});

					// check(req.body.email).isEmail(),
					// 	// password must be at least 5 chars long
					// 	check(req.body.password).isLength({ min: 5 }),
					// 	(req, res) => {
					// 		// Finds the validation errors in this request and wraps them in an object with handy functions
					// 		const errors = validationResult(req.body);
					// 		if (!errors.isEmpty()) {
					// 			return res.status(400).json({ errors: errors.array() });
					// 		}

					let response = candidate.save().then(result => {
						res.status(200).send('User Added');
					}).catch(err => {
						const error = new Error(err);
						error.httpStatusCode = 500;
						console.log(error.message);
						callback(error);
					});

					// Candidate.find({}, function (err, allDetails) {
					// 	if (err) {
					// 		console.log(err);
					// 	} else {
					// 		console.log("Table details----", allDetails);
					// 	}
					// })

					return response;
					// }
				})

			} else
				return res.status(422).send('Alredy Exists');
		})
		.catch(err => {
			const error = new Error(err);
			error.httpStatusCode = 500;
			console.log(error.message);
			return error;
		});
}

function hashPassword(pass, callback) {
	const saltRounds = 10

	bcrypt.genSalt(saltRounds, function (saltError, salt) {
		if (saltError) {
			callback(saltError);
		} else {
			bcrypt.hash(pass, salt, function (hashError, hash) {
				if (hashError) {
					callback(hashError);
				} else {
					callback(hash);
				}
			})
		}
	})
}

module.exports = new signup();
