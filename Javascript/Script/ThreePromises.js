function task1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 1 done"), 1000);
    });
}

function task2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 2 done"), 2000);
    });
}

function task3() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 3 done"), 3000);
    });
}

async function run() {
    let a = await task1();
    let b = await task2();
    let c = await task3();

    console.log(a);
    console.log(b);
    console.log(c);
}

run();