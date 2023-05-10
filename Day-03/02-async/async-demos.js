
(() => {
    // sync
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        const result = x + y
        console.log(`   [@service] returning result`)
        return result;
    }

    function addSyncClient(){
        console.log(`[@client] invoking the service`)
        const result = addSync(100,200)
        console.log(`[@client] result : ${result}`)
    }

    window['addSyncClient'] = addSyncClient;

    // async (using callback)
    function addAsync(x, y, callback) {
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(() => { //operation initiated
            const result = x + y
            console.log(`   [@service] returning result`)
            callback(result);    
        }, 4000);
    }

    function addAsyncClient() {
        console.log(`[@client] invoking the service`)
        addAsync(100, 200, function(result){
            console.log(`[@client] result : ${result}`)
        })
    }

    window['addAsyncClient'] = addAsyncClient;

    //async using Promise
    
    function addAsyncPromise(x, y) {
        console.log(`   [@service] processing ${x} and ${y}`)

        const p = new Promise(function(resolveFn, rejectFn){
            setTimeout(() => { //operation initiated
                const result = x + y
                console.log(`   [@service] returning result`)
                //communicate the result to the promise
                resolveFn(result)
            }, 4000);
        })
        return p
    }

    /* 
    function addAsyncPromiseClient() {
        console.log(`[@client] invoking the service`)
        const p = addAsyncPromise(100, 200) 
        return p.then(function (result) {
            console.log(`[@client] result : ${result}`)
            return result * 2
        })
    } 
    */

    async function addAsyncPromiseClient() {
        console.log(`[@client] invoking the service`)
        const result = await addAsyncPromise(100, 200)
        console.log('promise resolved just now')
        console.log(`[@client] result : ${result}`)
        const doubleResult = result * 2
        return doubleResult
    }

    window['addAsyncPromiseClient'] = addAsyncPromiseClient;
})()


//follow up async operation 
/* 
console.log(`[@client] invoking the service`)
var p = addAsyncPromise(100, 200)
const p2 = p.then(function (result) {
    console.log(`[@client] result : ${result}`)

    //follow-up async operation
    console.log('initiating follow up operation [async]')
    const p2 = new Promise(function (resolveFn, rejectFn) {
        setTimeout(function () {
            const doubleResult = result * 2
            resolveFn(doubleResult)
        }, 4000)
    });
    return p2;
});
p2.then(function (doubleResult) {
    console.log(`doubleResult = ${doubleResult}`);
}) 
*/

//follow-up operation [sync] - 1
/* 
console.log(`[@client] invoking the service`)
var p = addAsyncPromise(100, 200)
const p2 = p.then(function (result) {
    console.log(`[@client] result : ${result}`)

    //follow-up async operation [sync]
    console.log('initiating follow up operation')
    const doubleResult = result * 2
    const p2 = new Promise(function(resolveFn, rejectFn){
        resolveFn(doubleResult)
    })
    return p2;
});
p2.then(function (doubleResult) {
    console.log(`doubleResult = ${doubleResult}`);
})
*/

/* //follow-up operation [sync] - 2
console.log(`[@client] invoking the service`)
var p = addAsyncPromise(100, 200)
const p2 = p.then(function (result) {
    console.log(`[@client] result : ${result}`)

    //follow-up async operation [sync]
    console.log('initiating follow up operation')
    const doubleResult = result * 2
    const p2 = Promise.resolve(doubleResult)
    return p2;
});
p2.then(function (doubleResult) {
    console.log(`doubleResult = ${doubleResult}`);
})
 */

//follow-up operation [sync] - 2
/* console.log(`[@client] invoking the service`)
var p = addAsyncPromise(100, 200)
const p2 = p.then(function (result) {
    console.log(`[@client] result : ${result}`)

    //follow-up async operation [sync]
    console.log('initiating follow up operation')
    const doubleResult = result * 2
    return doubleResult;
});
p2.then(function (doubleResult) {
    console.log(`doubleResult = ${doubleResult}`);
}) */

/* 
console.log(`[@client] invoking the service`)
const p3 = addAsyncPromise(100, 200)
    .then(function (result) {
        console.log(`[@client] result : ${result}`)
    
        //follow-up async operation [sync]
        console.log('initiating follow up operation')
        const doubleResult = result * 2
        return doubleResult;
    })
    .then(function (doubleResult) {
        console.log(`doubleResult = ${doubleResult}`);
        return 'dummy result'
    })
*/