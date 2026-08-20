// let promise= new promise((resolve,reject)=>{
//     let x=true;
//     if(x){
//         resolve("data fetched")
//     }else{
//         reject("failed");
//     }
// });
// promise.then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err);
// })
// function getdata(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("data fetched")
//         },2000);
//     });
// }
// async function show() {
//     console.log("waiting");
//     let x=  await getdata();
//     console.log(x);
//     console.log("hello");
    
    
    
// }
// show();
// console.log("start");

// setTimeout(()=>{
//     console.log("hello");
    
// },5000);
// console.log("endtask")
 let timer=setInterval(()=>{
    console.log("hello");
    
},2000)

console.log("time started")
setTimeout(()=>{
    clearInterval(timer);
},10000);


