let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(randomNumber);
        } else {
            reject(randomNumber);
        }
    }, 1000);
});

myPromise
    .then(function (n) {
        console.log('success', n);
    }, function (n) {
        console.log('fail', n);
    })
    .then(function () {
        console.log('complete');
    });

