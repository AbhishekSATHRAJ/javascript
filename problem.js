// // // // // // // var a=50;
// // // // // // //     b=40;
// // // // // // //     c=30;
// // // // // // // if(a>b && a>c){
// // // // // // //     console.log("a is largest number");
// // // // // // // }
// // // // // // // else if(b>c){
// // // // // // //     console.log("b is largest number")
// // // // // // // }
// // // // // // // else{
// // // // // // //     console.log("c is largest number")
// // // // // // // }

// // // // // // // var a=50;
// // // // // // //     b=40;
// // // // // // //     c=30;
// // // // // // // result=(a>b && a>c)?"a is bigger number":(b>c)?"b is bigger number":"c is bigger number";
// // // // // // // console.log(result)



// // // // // // // for(i=1;!(i>=10+1);i++){
// // // // // // //     console.log(i)
// // // // // // // }

// // // // // // // for(e=1;(e!=10+1);e++){
// // // // // // //     console.log(e)
// // // // // // // }

// // // // // // // for(i=10;(i>=0);i--){
// // // // // // //     console.log(i)
// // // // // // // }

// // // // // // // for(i=10;!(i<=0);i--){
// // // // // // //     console.log(i)
// // // // // // // }



// // // // // // // ------> 13/08/2024 <-----

// // // // // // let rev="";
// // // // // // let sum=1;
// // // // // // function fac(n){
// // // // // // for(i=1;i<=n;i++){
// // // // // //     rev+=(i);
// // // // // //     sum=sum*i
// // // // // // }console.log(rev.split("").join("*")+" = "+sum)}
// // // // // // fac(6)


// // // // // let rev="";
// // // // // let sum=0;
// // // // // function prime(n){
// // // // // for(x=1;x<=n;x++){
// // // // //   if(n%x===0){
// // // // //     rev=rev+[x]
// // // // //     // console.log(rev)
// // // // //   }
// // // // //   else{
// // // // //     console.log(x)
// // // // //   }
 
// // // // // }
// // // // //  if(rev.length==2){
// // // // //      console.log(`${n} it is a prime number`)
// // // // //  }
// // // // //  else{
// // // // //      console.log(`${n} it is not a prime number`)
// // // // //  }}
// // // // //  prime (5)



// // // // // -------> 14/08/2024 <------



// number=prompt("enter the value");
// non_primesum=0;
// primesum=0;
// function prime(number){
// for(num of number){
//        if(num>1){
//         count=0
//         for(i=2;i<num;i++){
//             if(num%i==0){
//                 non_primesum+=Number(num);
//                 count++;
//                 break;
//             }
//         }
//         if(count==0){
//             primesum+=Number(num);
//         }
//     }
//     else{
//         console.log("enter the valid number")
//     }
// }
//     console.log(non_primesum)
//     console.log(primesum)
// }
    





// num=prompt('enter the value')
// function prime(num){
//     if(num>1){
//     count=0;
//     for(i=2;i<num;i++){
//         if(num%i==0){
//             console.log(`${num} is a not prime number`);
//             count--;
//             break;
//         }
//         if(count==0){
//             console.log(`${num} is a prime number`)
//             break;
//         }     
//     }
// }
//  else{
//     console.log(`${num} is a invalid number`)
//         }
// }
// prime(num)






// let input=prompt("enter the value")
// nonprimesum=0; primesum=0;
// for(num of input){
//   if(num>1){
//     c=0;
//     for(i=2;i<num;i++){
//       if(num%i==0){
//         nonprimesum=nonprimesum+Number(num);
//         c++;
//         break
//       }
//     }
//       if(c==0){
//         primesum=primesum+Number(num)
//       }
    
//   }
// }
// result=(nonprimesum>primesum)?"primesum is bigger":"nonprimesum is bigger";
// console.log(result)


// // ----->17/08/2024 <------



// // num=+prompt("enter a series number");
// // a=0;b=1;
// // i=1;rev=" ";
// // while(i<=num){
// //     if(i==num){
// //     rev+=a;}
// //     c=a+b;
// //     a=b;
// //     b=c;
// //     i++;
// // }
// // console.log(rev)




// // function reverseNumber(num) {
// //     return (
// //       parseFloat(
// //         num
// //           .toString()
// //           .split('')
// //           .reverse()
// //           .join('')
// //       ) 
// //       * Math.sign(num)
// //     )                 
// //   }
  
// //   console.log(reverseNumber("240"))




// // let num=+prompt("enter a number")
// // a=0;b=1;
// // i=0;rev="";
// // while(a<=num){
// //       rev+=a+" ";
// //       c=a+b;
// //       a=b;
// //       b=c;
// //       i++;
// //   }
// //   console.log(rev)



// -----> 20/08/2024 <-----

let num=+prompt("enter the number");
a=0;
b=1;
nonfib=0;
rev="";
x=0;
while(nonfib!=num){
    let i=a+1;
    while(i<b){
    rev+=i+" ";
    nonfib++;
    i++
      if(nonfib==num){
        break;
    }  }
   c=a+b;
    a=b;
    b=c;
}
console.log(rev)



let num=+prompt("enter the number");
a=0;
b=1;
nonfib=0;
rev="";
x=0;
while(nonfib!=num){
    let i=a+1;
    while(i<b){
    rev+=i+" ";
    x=i;
    nonfib++;
    i++
      if(nonfib==num){
        break;
    }  }
   c=a+b;
    a=b;
    b=c;
}
console.log(x)



let num=+prompt("enter a number");
a=0;b=1;nonfib=0;rev="";
while(nonfib!=num){
    for(i=a+1;i<b;i++){
        nonfib++;
        if(nonfib==num){
            break;
        }
         if(i<=num){
       rev+=i+" "
    }
    }
   
    c=a+b;
    a=b;
    b=c;
}console.log(rev)