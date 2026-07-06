function tablePrintKarunga(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
tablePrintKarunga(5);
let n=50;
function print50(n){
    for(let i=1;i<=n;i++){
        console.log(i);
        
    }
}
print50(n);
let sum=0;
function sumOfNNumbers(n){

    for(let i=1;i<=n;i++){
       sum=sum+i;
        
    }
    console.log("the sum of n number is: " ,sum);
    
}
sumOfNNumbers(n);
let N=15;
function printOdd(N){
    for(let i=1;i<=15;i++){
        if(i%2!=0){
            console.log(i);
            
        }
    }
}
printOdd(N);