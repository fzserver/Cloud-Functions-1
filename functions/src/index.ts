import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp()

// export const getUSServerUpdate = 
// functions.firestore.document('servers/US').onUpdate(change => {
//     const after = change.after.data()
//     const payload = {
//         data: {
//             currency: after.currency,
//             period: String(after.period),
//             periodterms: after.periodterms,
//             price: String(after.price),
//             symbol: after.symbol
//         }
//     }
//     admin.messaging().sendToTopic("server_US", payload)
//     .catch(error => {
//         console.error('FCM failed: ', error)
//     })
// })

/* Using of Async, Await in the function, but you can skip this function if it does not improves your readability of the code
   & I am not using this function as it does not adds any value here. */
// export const getUSServerUpdate = 
// functions.firestore.document('servers/US').onUpdate(async change => {
//     try {    
//     const after = await change.after.data()
//     const payload = {
//         data: {
//             currency: after.currency,
//             period: String(after.period),
//             periodterms: after.periodterms,
//             price: String(after.price),
//             symbol: after.symbol
//         }
//     }
//     admin.messaging().sendToTopic("server_US", payload)
//     }
//     catch(error) {
//         // Handle the error
//         console.error('FCM failed: ', error)
//     }
// })

// export const getUSServerActiveServer = functions.https.onRequest((request, response) => {
//     admin.firestore().doc('servers-list/activeservers').get()
//     .then(activeserverSnapshot => {
//         const activeservers = activeserverSnapshot.data().servers
//         const activeserversarray = []
//         for (const server in activeservers) {
//             const p = admin.firestore().doc(`servers/${server}`).get()
//             activeserversarray.push(p)
//         }
//         return Promise.all(activeserversarray)
//     })
//     .then(serverSnapshots => {
//         const results = []
//         serverSnapshots.forEach(serverSnap => {
//             const data = serverSnap.data()
//             data.server = serverSnap.id
//             results.push(data)
//         })
//         response.send(results)
//     })
//     .catch(error => {
//         console.log(error)
//         response.status(500).send(error)
//     })
// })

/* Using of Async, Await in the function */
export const getUSServerActiveServer = functions.https.onRequest(async (request, response) => {
    try {    
        const activeserverSnapshot = await admin.firestore().doc('servers-list/activeservers').get()
        const activeservers = activeserverSnapshot.data().servers
        const activeserversarray = []
        for (const server in activeservers) {
            const p = admin.firestore().doc(`servers/${server}`).get()
            activeserversarray.push(p)
        }
        const serverSnapshots = await Promise.all(activeserversarray)
        const results = []
        serverSnapshots.forEach(serverSnap => {
            const data = serverSnap.data()
            data.server = serverSnap.id
            results.push(data)
        })
        response.send(results)
    }
    catch(error) {
        console.log(error)
        response.status(500).send(error)
    }
})

// export const getUSServer = functions.https.onRequest((request, response) => {
//     admin.firestore().doc('servers/US').get()
//     .then(snapshot => {
//         const data = snapshot.data()
//         response.send(data)
//     })
//     .catch(error => {
//         // Handle the error
//         console.log(error)
//         response.status(500).send(error)
//     })
// });

/* Using of Async, Await in the function */
export const getUSServer = functions.https.onRequest(async (request, response) => {
    try {
        const snapshot = await admin.firestore().doc('servers/US').get()
        const data = snapshot.data()
        response.send(data)
    }
    catch (error) {
        // Handle the error
        console.log(error)
        response.status(500).send(error)
    }
})
