const functions = require('firebase-functions');
const hnapi = require('hnpwa-api');

exports.api = hnapi.trigger({
    staleWhileRevalidate: 120,
    routerPath: "/api"
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
