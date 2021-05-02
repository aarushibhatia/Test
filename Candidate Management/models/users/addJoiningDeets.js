var CandidateJoiningDeets = require("../candidateJoiningDeets.js");
var Candidate = require("../candidate.js");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Candidates', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("Connection Successful!");
});

/**
 * Defines addJoiningDetails operations.
 * @class
 */
var addJoiningDetails = function () { };

/**
 * save user data 
 * @Function
 * @param callback
 * @param feedbackQuery
 */

addJoiningDetails.prototype.addUser = function (req, res, callback) {

    Candidate.findOne({ "email": req.body.email }).then(object => {
        if (object) {
            const candidateJoiningDeets = new CandidateJoiningDeets({
                email: req.body.email,
                DOJ: req.body.DOJ,
                joiningSalary: req.body.joiningSalary,
                candidateDeets: object._id
            });

            let response = candidateJoiningDeets.save().then(result => {
                CandidateJoiningDeets.findOne({ email: req.body.email })
                    .populate('Candidate').exec((err, posts) => {
                        console.log("Populated User " + posts);
                    });
                res.status(200).send('Joining Details Saved');
            });
            return response;
        } else {
            return res.status(422).send('User does not exist.');
        }
    })
}

module.exports = new addJoiningDetails();
