function calculate(a, b, callback) {
    let result = a + b;
    callback(result);
}

function myCallback(result) {
    console.log("Result:", result);
}

calculate(10, 20, myCallback);

console.log("Start");

setTimeout(() => {
    console.log(" 3 sec baad....");
}, 3000);

console.log("End");