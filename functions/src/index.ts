import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp()

export const getUSServer = functions.https.onRequest((request, response) => {
    const promise = admin.firestore().doc('servers/US').get()
    promise.then(snapshot => {
        const data = snapshot.data()
        response.send(data)
    })
});
