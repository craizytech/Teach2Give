const myPromise = new Promise((resolve, reject) => {
    // make some asynchronous stuff
    let success = false;

    if (success) {
        resolve("Operation is Successful");
    } else {
        reject("Operation is rejected");
    }
})

myPromise
.then((result) => console.log(result))
.catch(error => console.log(error))