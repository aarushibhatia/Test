const fs = require('fs');

function sendFileData(callback) {
    fs.readFile('./userDetails.json', 'UTF8' , (err, data) => { // Error first callback of fs.readFile function
        if (!err) {
            callback(data);
        }
    })
}

sendFileData((data) => { // This arrow function is the callback function of sendFiledata. This means that this will be executed after sendFileData is executed.
    Object.entries(JSON.parse(data)).forEach(element => {
        console.log(`${element[0]} of the candidate is ${element[1]}.`);
    });
});

