
 console.log(4==='4')
function fib(n){
    if(n==0 || n==1) return n;
    return fib(n-1) + fib(n-2);
}
let a=fib(5);
console.log(a);
let num=10;
function checkEven(num){
    if(num % 2 === 0){
        console.log(num + " is even");
    }
    else{
        console.log(num + " is odd");
    }
}

checkEven(num);

function checkAdmin(value){
    if(value == true){
        console.log('is admin');
        
    }else{
        console.log('not admin');
        
    }

}
checkAdmin(1);

function canVote(age){
    if(age>17){
        console.log('can vote as per religion');
        
    }else{
        console.log('cannot vote');
        
    }
}
canVote(19);
// let val=getGrade(90);
// console.log(getGrade());
 
// function getGrade(marks) {
//     if (marks >= 90) {
//         return "A";
//     } else if (marks >= 80) {
//         return "B";
//     } else if (marks >= 70) {
//         return "C";
//     } else if (marks >= 60) {
//         return "D";
//     } else {
//         return "F";
//     }
// }


function getGrade(marks) {
    switch (true) {
        case (marks >= 90 && marks <= 100):
            return "A";
        case (marks >= 80):
            return "B";
        case (marks >= 70):
            return "C";
        case (marks >= 60):
            return "D";
        case (marks >= 50):
            return "E";
        default:
            return "F";
    }
}

let marks = 75;
console.log("Grade:", getGrade(marks)); 
