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
	.ref('/writeOnly/{entity}/{userId}/{messageId}').onWrite(event => {
		const message = event.data.val();

		if (message) {
			if (message.hours && message.thing && message.description) {
				admin.database().ref('/' + event.params.entity).push({
					hours: message.hours,
					thing: message.thing,
					description: message.description,
					uid: event.params.userId,
					timestamp: new Date()
				});

				return event.data.adminRef.remove();
			} else {
				admin.database().ref('/readOnly/responses/' + event.params.userId).push({
					error: 'Invalid request, please try again.'
				});

				return event.data.adminRef.remove();
			}
		}
	});
