// // // // // // // // // var a=50;
// // // // // // // // //     b=40;
// // // // // // // // //     c=30;
// // // // // // // // // if(a>b && a>c){
// // // // // // // // //     console.log("a is largest number");
// // // // // // // // // }
// // // // // // // // // else if(b>c){
// // // // // // // // //     console.log("b is largest number")
// // // // // // // // // }
// // // // // // // // // else{
// // // // // // // // //     console.log("c is largest number")
// // // // // // // // // }

// // // // // // // // // var a=50;
// // // // // // // // //     b=40;
// // // // // // // // //     c=30;
// // // // // // // // // result=(a>b && a>c)?"a is bigger number":(b>c)?"b is bigger number":"c is bigger number";
// // // // // // // // // console.log(result)

// // // // // // // // // for(i=1;!(i>=10+1);i++){
// // // // // // // // //     console.log(i)
// // // // // // // // // }

// // // // // // // // // for(e=1;(e!=10+1);e++){
// // // // // // // // //     console.log(e)
// // // // // // // // // }

// // // // // // // // // for(i=10;(i>=0);i--){
// // // // // // // // //     console.log(i)
// // // // // // // // // }

// // // // // // // // // for(i=10;!(i<=0);i--){
// // // // // // // // //     console.log(i)
// // // // // // // // // }

// // // // // // // // // ------> 13/08/2024 <-----

// // // // // // // // let rev="";
// // // // // // // // let sum=1;
// // // // // // // // function fac(n){
// // // // // // // // for(i=1;i<=n;i++){
// // // // // // // //     rev+=(i);
// // // // // // // //     sum=sum*i
// // // // // // // // }console.log(rev.split("").join("*")+" = "+sum)}
// // // // // // // // fac(6)

// // // // // // // let rev="";
// // // // // // // let sum=0;
// // // // // // // function prime(n){
// // // // // // // for(x=1;x<=n;x++){
// // // // // // //   if(n%x===0){
// // // // // // //     rev=rev+[x]
// // // // // // //     // console.log(rev)
// // // // // // //   }
// // // // // // //   else{
// // // // // // //     console.log(x)
// // // // // // //   }

// // // // // // // }
// // // // // // //  if(rev.length==2){
// // // // // // //      console.log(`${n} it is a prime number`)
// // // // // // //  }
// // // // // // //  else{
// // // // // // //      console.log(`${n} it is not a prime number`)
// // // // // // //  }}
// // // // // // //  prime (5)

// // // // // // // -------> 14/08/2024 <------

// // // number=prompt("enter the value");
// // // non_primesum=0;
// // // primesum=0;
// // // function prime(number){
// // // for(num of number){
// // //        if(num>1){
// // //         count=0
// // //         for(i=2;i<num;i++){
// // //             if(num%i==0){
// // //                 non_primesum+=Number(num);
// // //                 count++;
// // //                 break;
// // //             }
// // //         }
// // //         if(count==0){
// // //             primesum+=Number(num);
// // //         }
// // //     }
// // //     else{
// // //         console.log("enter the valid number")
// // //     }
// // // }
// // //     console.log(non_primesum)
// // //     console.log(primesum)
// // // }

// // // num=prompt('enter the value')
// // // function prime(num){
// // //     if(num>1){
// // //     count=0;
// // //     for(i=2;i<num;i++){
// // //         if(num%i==0){
// // //             console.log(`${num} is a not prime number`);
// // //             count--;
// // //             break;
// // //         }
// // //         if(count==0){
// // //             console.log(`${num} is a prime number`)
// // //             break;
// // //         }
// // //     }
// // // }
// // //  else{
// // //     console.log(`${num} is a invalid number`)
// // //         }
// // // }
// // // prime(num)

// // // let input=prompt("enter the value")
// // // nonprimesum=0; primesum=0;
// // // for(num of input){
// // //   if(num>1){
// // //     c=0;
// // //     for(i=2;i<num;i++){
// // //       if(num%i==0){
// // //         nonprimesum=nonprimesum+Number(num);
// // //         c++;
// // //         break
// // //       }
// // //     }
// // //       if(c==0){
// // //         primesum=primesum+Number(num)
// // //       }

// // //   }
// // // }
// // // result=(nonprimesum>primesum)?"primesum is bigger":"nonprimesum is bigger";
// // // console.log(result)

// // // // ----->17/08/2024 <------

// // // // num=+prompt("enter a series number");
// // // // a=0;b=1;
// // // // i=1;rev=" ";
// // // // while(i<=num){
// // // //     if(i==num){
// // // //     rev+=a;}
// // // //     c=a+b;
// // // //     a=b;
// // // //     b=c;
// // // //     i++;
// // // // }
// // // // console.log(rev)

// // // // function reverseNumber(num) {
// // // //     return (
// // // //       parseFloat(
// // // //         num
// // // //           .toString()
// // // //           .split('')
// // // //           .reverse()
// // // //           .join('')
// // // //       )
// // // //       * Math.sign(num)
// // // //     )
// // // //   }

// // // //   console.log(reverseNumber("240"))

// // // // let num=+prompt("enter a number")
// // // // a=0;b=1;
// // // // i=0;rev="";
// // // // while(a<=num){
// // // //       rev+=a+" ";
// // // //       c=a+b;
// // // //       a=b;
// // // //       b=c;
// // // //       i++;
// // // //   }
// // // //   console.log(rev)

// // // -----> 20/08/2024 <-----
// // /
// // let num=+prompt("enter the number");
// // a=0;
// // b=1;
// // nonfib=0;
// // rev="";
// // x=0;
// // while(nonfib!=num){
// //     let i=a+1;
// //     while(i<b){
// //     rev+=i+" ";
// //     nonfib++;
// //     i++
// //       if(nonfib==num){
// //         break;
// //     }  }
// //    c=a+b;
// //     a=b;
// //     b=c;
// // }
// // console.log(rev)

// // let num=+prompt("enter the number");
// // a=0;
// // b=1;
// // nonfib=0;
// // rev="";
// // x=0;
// // while(nonfib!=num){
// //     let i=a+1;
// //     while(i<b){
// //     rev+=i+" ";
// //     x=i;
// //     nonfib++;
// //     i++
// //       if(nonfib==num){
// //         break;
// //     }  }
// //    c=a+b;
// //     a=b;
// //     b=c;
// // }
// // console.log(x)

// // let num=+prompt("enter a number");
// // a=0;b=1;nonfib=0;rev="";+
// // 87g
// // while(nonfib!=num){
// //     for(i=a+1;i<b;i++){
// //         nonfib++;
// //         if(nonfib==num){
// //             break;
// //         }
// //          if(i<=num){
// //        rev+=i+" "
// //     }
// //     }

// //     c=a+b;
// //     a=b;
// //     b=c;
// // }console.log(rev)

// // ---->26/08/2024     (unq and dupl number)  s<-----

// arr=[5,6,8,4,9,4,1,8,8,8,7,5,2,4]
// emp=[];uni="";dup=""
// for(i of arr){
//     if(!emp.includes(i)){
//         emp.push(i)
//     }
// }console.log(emp);
// for(i of emp){
//     h=1;
//     for(j of arr){
//         if(i==j){
//            h++
//         }
//     }
//     if(h==2){
//         uni+=i+" "
//     }
//     else{
//         dup+=i+" "
//     }
// }
// let res1=(uni.length<=2)?"uniques number is "+uni: "uniques number are " +uni
// let res=(dup.length<=2)?"duplicates number is "+dup: "duplicates number are " +dup
// console.log(res1)

// arr=[5,6,8,4,9,4,1,8,8,8,7,5,2,4]
// emp=[];uni="";dup=""
// for(i of arr){
//     if(!emp.includes(i)){
//         emp.push(i)
//     }
// }console.log(emp);
// for(i of emp){
//     h=0;
//     for(j of arr){
//         if(i==j){
//            h++
//         }
//     }
//     if(h==1){
//         uni+=i+" "
//         console.log(`${i} -> ${h}`)
//     }
//     else{
//         dup+=i+" "
//         console.log(`${i} -> ${h}`)
//     }
// }
// let res1=(uni.length<=1)?"uniques number is "+uni: "uniques number are " +uni
// let res=(dup.length<=1)?"duplicates number is "+dup: "duplicates number are " +dup
// console.log(res1)
// console.log(res)






// // ---->  DATE: 27/08/2024 <---









arr=[23,33,200,785];
uni="";dup=""
for(i of arr){
x=String(i).split("").map(Number)
emp=[]
for(g of x){
    if(!emp.includes(g)){
        emp.push(g)
    }

}
console.log(emp)
for(i of emp){
    c=0;
    for(j of x){
        if(i==j){
            c++
        }
    }
    if(c==1){
        uni+=i
    }
    else{
        dup+=i
    }
}

}
console.log("1) WAP to print duplicate from given number and concat the value")
console.log(dup)








arr=[538,111,200,652]
res=[];
for(i of arr){
    istr=String(i)
    c=0;
    for(j=0;j<istr.length-1;j++){
        if(istr[j+1]<istr[j]){
            c++
        }
    }
    res.push(istr.length-1==c)
}
console.log(res)

















arr=[8,2,4,1,2,1,5];
uni="";dup=""
const duplicates = arr.filter((item, index) => arr.indexOf(item) == index);
for(i of duplicates){
    c=0;
    for(j of arr){
        if (i==j){
            c++
        }
    }
    if(c==1){
        uni+=i+" "
    }
    else{
        dup+=i+" "
    }
}
console.log(uni);












// // ------>tcs not <--------

// Nums=[1,2,-1,1,3,1]
// emp=[];nrep=""
// for(i of Nums){
//     if(!emp.includes(i)){
//         emp.push(i)
//     }
// }
// for(i of emp){
//     c=0;
//     for(j of Nums){
//         if(i==j){
//             c++
//         }
//     }
//     if(c==1){
//        nrep+=i+", "
//     }

// }
// console.log(nrep)

// num="871659"
// n=num.split("").map(Number).sort();
// c=n.slice(0,3)
// d=n.slice(3,6).sort((a,b)=>b-a)
// console.log(c.concat(d))

// num="87165945"
// temp=[]
// n=num.split("").map(Number);
// for(i of n){
//     temp.push(i)
// }
// temp.sort((a,b)=>a-b)
// console.log(temp)
// lengths=temp.length
// mid=Math.ceil(lengths/2)
// fh=temp.slice(0,mid)
// sh=temp.slice(mid).sort((a,b)=>b-a)
// res=fh.concat(sh)
// console.log(res.flat())

// -------> WAP to print number of pairs formed by the array of numbers <-------

// let arr="30 50 30 50 20 50 50 20 50 50 50"
// let num=arr.split(" ").map(Number);
// temp=[];res="";
// sum=0;
// for(i of num){7
//    if(!temp.includes(i)){
//    temp.push(i)
// }
// }
// console.log(temp)
// for(i of temp){
//     c=0;
//     for(j of num){

//         if(i==j){
//             c++

//         }

//     }
//     res+=Math.floor(c/2)
// }

// for(i of res){
//    sum+=Number(i)
// }
// console.log(" Sum of pair count of "+arr + "is " +sum)

// ----->  2) Print the Outer layer elements side by side<----
// row = +prompt("enter a number");
// col = +prompt("enter a number");
// main = [];
// res = "";
// for (i = 1; i <= row; i++) {
//   x = [];
//   for (j = 1; j <= col; j++) {
//     console.log(i, j);
//     ele = +prompt();
//     x.push(ele);
//   }
//   main.push(x);
// }
// for (i = 0; i < main.length; i++) {
//   //temp=[]
//   for (j = 0; j < main[i].length; j++) {
//     if (i == 0 || j == 0 || i == row - 1 || j == col - 1) {
//       res += main[i][j] + " ";
//     } else {
//       res += "  ";
//     }
//   }
// }
// console.log(res);

// ----->  Print the diagonal elements side by side:<----

// row = +prompt("enter a number");
// col = +prompt("enter a number");
// main = [];
// res = "";
// for (i = 1; i <= row; i++) {
//   x = [];
//   for (j = 1; j <= col; j++) {
//     console.log(i, j);
//     ele = +prompt();
//     x.push(ele);
//   }
//   main.push(x);
// }
// for (i = 0; i < main.length; i++) {
//   //temp=[]
//   for (j = 0; j < main[i].length; j++) {
//     if (i == j || i + j == row - 1) {
//       res += main[i][j] + " ";
//     } else {
//       res += "  ";
//     }
//   }
// }
// console.log(res);

// -----> practice <------








// arr=[2,21,5,7,3,5,7,3,1,6,14,44];
// arr2=[7,3,1];
// function same(a,b){
//     c=0
//     for(k=0;k<a.length;k++){
//         if(a[k]==b[k]){
//             c++
//         }
//     }
//     if(a.length==c){
//         return true
//     }
//     return false
// }
// num=arr2[0]
// for(i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         temp=arr.slice(i,i+arr2.length)
//         console.log(temp)
//         if(same(temp,arr2)){
//             console.log("true")
//         }
//     }
// }







// num=prompt("enter a number");
// t="";uni=""
// for(i of num){
//     c=0
//     for(j=0;j<t.length;j++){
//         if(i==t[j]){
//             c++
//         }
//     }
//     if(c==0){
//         t=t+i
//     }
// }
// for(i of t){

//     v=0
//     for(j of num){
//         if(i==j){
//             v++
//         }
//     }
//     if(v==1){
//         uni+=i+" "
//     }
// }
// console.log(uni)






// // let num=120;
// // leftprime=0;
// // for(i=num-1;i>=2;i--){
// //     c=0
// //     for(j=2;j<i;j++){
// //         if(i%j==0){
// //             c++
// //             break;
// //         }
// //     }
// //     if(c==0){
// //         leftprime=i;
// //         break
// //     }
// // }
// // console.log(leftprime)







// // arr="sateesh11r";
// // emp=[];uni=""
// // for(i of arr){
// // if(!emp.includes(i))
// //  emp.push(i)
// // // console.log(emp)
// // // console.log(i)

// // }
// // for(i of emp){
// //     c=0;
// //     for(j of arr){
// //         if(i==j){
// //             c++
// //         }
// //     }
// //     if(c==1){
// //         uni+=i+" "
// //     }
// // }
// // console.log(uni)








// // arr=[8,2,4,1,2,1,5];
// // uni="";dup=""
// // const duplicates = arr.filter((item, index) => arr.indexOf(item) == index);
// // console.log(duplicates)
// // for(i of duplicates){
// //     c=0;
// //     for(j of arr){
// //         if (i==j){
// //             c++
// //         }
// //     }
// //     if(c==1){
// //         uni+=i+" "
// //     }
// //     else{
// //         dup+=i+" "
// //     }
// // }
// // console.log(uni);
