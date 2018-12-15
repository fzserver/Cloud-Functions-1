import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp()

export const getUSServerUpdate = functions.firestore.document('servers/US').onUpdate(change => {
    const after = change.after.data()
    const payload = {
        data: {
            currency: after.currency,
            period: String(after.period),
            periodterms: after.periodterms,
            price: String(after.price),
            symbol: after.symbol
        }
    }
    admin.messaging().sendToTopic("server_US", payload)
    .catch(error => {
        console.error('FCM failed: ', error)
    })
})

export const getUSServer = functions.https.onRequest((request, response) => {
    admin.firestore().doc('servers/US').get()
    .then(snapshot => {
        const data = snapshot.data()
        response.send(data)
    })
    .catch(error => {
        // Handle the error
        console.log(error)
        response.status(500).send(error)
    })
});
