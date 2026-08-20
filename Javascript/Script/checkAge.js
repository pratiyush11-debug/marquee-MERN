function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Allowed");
        } else {
            reject("Not Allowed");
        }
    });
}

async function check() {
    try {
        let result = await checkAge(20);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

check();