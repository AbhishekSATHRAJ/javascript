// -------> 21/08/2024 <--------


// let a=500;
// let b=100;
// let c=2000;
// let result=((a>b && a>c)?"a is bigger":(b>c)?"b is bigger":"c is bigger")
// if(result=="a is bigger"){
//     console.log("a is largest")
// }
// else if(result=="b is bigger"){
//     console.log("b is largest")
// }
// else{
//     console.log("c is largest")
// }
// // console.log(result)







// let input = 5;
// let res = " ";
// let fac = 1;
// for (i = 1; i <= input; i++) {
//   fac = fac * i;
//   if (i == input) {
//     res = res + i + "=";
//   } else {
//     res = res + i + "*";
//   }
// }
// console.log(res + fac);






// let prime = 2;
// if (prime>1) {
//   f = 0;
//   for (i=2; i<prime; i++) {
//     if (prime%i==0) {
//       console.log("not a prime");
//       f++;
//       break;
//     }
//   }
//   if (f==0) {
//     console.log("it is a prime");
//   }
// }


// let rev="";
// let sum=0;
// function prime(n){
// for(x=1;x<=n;x++){
//   if(n%x===0){
//     rev=rev+[x]
//   }
// }
//  if(rev.length==2){
//      console.log(`${n} it is a prime number`)
//  }
//  else{
//      console.log(`${n} it is not a prime number`)
//  }}
//  prime (6)


// let order=55;
// primesum=0;
// nonprimesum=0;
// if(order>1){
//     sum=true
//     for(i=2;i<order;i++){
//         if(order%i==0){
//             nonprimesum+=Number(order)
//             sum=false;
//             break;
//         }
       
//     }
//     if(sum==true){
//         primesum+=Number(order)
//     }
//     if(primesum<order){
//         console.log(`${order} not prime`)
//     }
//     else{
//         console.log(`${order}  prime`)
//     }
    
//     }



let number="568558"
   max=number[0];
   min=number[0];
   sum=0;
for(i=1;i<number.length;i++){
    if(number[i]>max){
        max=number[i]
    }
    if(number[i]<min){
        min=number[i]
    }
    sum+=max*min
}
console.log(sum)

let a=0;
    b=1;
    nonfib=0;
    res=""
 while(nonfib!=sum){
    for(i=a+1;i<b;i++){
        nonfib++;
       if(nonfib==sum){
        break;
       }
       if(i<20){
        res+=i+","
       }
    }
    c=a+b;
    a=b;
    b=c
 }   
 console.log(res)

for(int of res){
for(i=2;i<int;i++){
    if(int%i==0){
        console.log("not prime"+int)
        break;
    }
    else{
        console.log("prime"+int)
        break
    }
}
}



