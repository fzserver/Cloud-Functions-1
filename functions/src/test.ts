// function myFunction() {
//     return 'firebase'            // TypeScript knows that this function returns a String
// }

// async function myFunction() {
//     // Actually returns a promise!
//     return 'firebase'           // TypeScript knows that this function returns a Promise<String>
// }

// async function myFunction(): Promise<String> {
//     return 'firebase'                               // Promise.resolve('firebase')
// }

// async function myFunction(): Promise<String> {
//     // const rankPromise = getRank()              // 'rankPromise' is declared but its value is never read.
//     const rank = await getRank()               // rankPromise instead of getRank()
//     return 'firebase is #' + rank
// }

// If a Promise is rejected then use try/catch block every time
async function myFunction(): Promise<String> {
    try {
        const rank = await getRank()               // rankPromise instead of getRank()
        return 'firebase is #' + rank
    }
    catch(error) {
        return "Error: " + error
    }
}

// function getRank() {
//     return Promise.resolve(1)
// }

function getRank() {
    // return Promise.resolve(1)
    return Promise.reject("I don't know :-(")
}
