const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// })


// Moderates messages by lowering all uppercase messages and removing swearwords.
exports.moderator = functions.database
	.ref('/writeOnly/{messageId}').onWrite(event => {
		const message = event.data.val();

		if (message) {
			// Retrieved the message values.
			console.log('Retrieved message content: ', message);


			admin.database().ref('/items').push({
				test: 'test'
			});
/*
			// Update the Firebase DB with checked message.
			console.log('Message has been moderated. Saving to DB: ', moderatedMessage);
			return event.data.adminRef.update({
				text: moderatedMessage,
				sanitized: true,
				moderated: message.text !== moderatedMessage
			});*/
		}
	});

