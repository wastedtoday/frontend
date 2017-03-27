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
	.ref('/writeOnly/items/{userId}/{messageId}').onWrite(event => {
		const message = event.data.val();

		if (message) {
			admin.database().ref('/items').push({
				hours: message.hours,
				thing: message.thing,
				description: message.description,
				uid: event.params.userId,
				timestamp: new Date()
			});

			return event.data.adminRef.remove();
		}
	});
