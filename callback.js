// // // console.log("map")

// // let arr = [1, 2, 3, 4, 5];
// // res = " ";
// // arr.map((a) => {
// //   res += a * 2;
// // });
// // console.log(res);



// // let arr = ["hello", "world"];
// // res = [];
// // j = 0;
// // arr.map((a) => {
// //   for (i = 0; i < arr.length; i++) {
// //     res[j] = arr[i].toUpperCase();
// //     j++;
// //   }
// // });
// // console.log(res);



// // // console.log("Filter");




// // let arr = [1, 2, 3, 4, 5];
// // res = " ";
// // arr.filter((a) => {
// //   if (a % 2 == 0) {
// //     res += a + " ";
// //   }
// // });
// // console.log(res);



// // let characters = ["hello", "world", "abc"];
// // for (string of characters) {
// //   for (i = 0; i < string.length; i++) {
// //     if (string.length >= 5) {
// //       console.log(string);
// //       break;
// //     }
// //   }
// // }



// // let characters = ["hello", "world", "abc"];
// // characters.filter((a) => {
// //   if (a.length % characters.length !== 0) {
// //     console.log(a);
// //   }
// // });



// // let characters = ["hello", "world", "abc"];
// // characters.filter((a) => {
// //   if (a.length % 5 == 0) {
// //     console.log(a);
// //   }
// // });



// // // console.log("For each");



// // let arr = [1, 2, 3, 4, 5];
// // arr.forEach((a) => {
// //   console.log(a);
// // });


// // let arr = ["hello", "world"];
// // res = "";
// // arr.forEach((a) => {
// //   res += a.concat("!") + " ";
// // });
// // console.log(res);





// // // console.log("every");




// // let arr = [1, 2, 3, 4, 5];
// // arr.every((a) => {
// //   console.log(a >= -1);
// // });




// // let arr = ["hello", "world", "abc"];
// // arr.every((a) => {
// //   if (a.length >= 5) {
// //     console.log(a ? "true" : "false");
// //   }
// // });




// // // console.log("some");




// // let array = [1, 2, 3, 4, 5];
// // let x = array.some((a) => {
// //   if (a % 2 == 0) {
// //     return a ? "true" : "false";
// //   }
// // });
// // console.log(x);




// // let array = ["hello", "world", "max"];
// // let z = array.some((a) => {
// //   if (a.includes("x")) {
// //     return a ? "true" : "false";
// //   }
// // });
// // console.log(z);





// // // console.log("find");




// // let array = [1, 2, 3, 4, 5];
// // let x = array.find((a) => {
// //   if (a % 2 == 0) {
// //     return a;
// //   }
// // });
// // console.log(x);




// // let array = ["hello", "world", "max"];
// // let z = array.find((a) => {
// //   if (a.includes("x")) {
// //     return a;
// //   }
// // });
// // console.log(z);




// // // console.log("findindex");




// // let array = [1, 2, 3, 4, 5];
// // let x = array.findIndex((a) => {
// //   if (a % 2 == 0) {
// //     return a;
// //   }
// // });
// // console.log(x);

// // let array = ["hello", "world", "max"];
// // let z = array.findIndex((a) => {
// //   if (a.includes("x")) {
// //     return a;
// //   }
// // });
// // console.log(z);





// // ------> Objects <----

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// const obj=Object.assign(obj1,obj2)
// console.log(obj)





// const obj = { a: 1, b: 2, c: 3, d: 4 };
// let x=Object.values(obj)
// console.log(x)
// let b=x.map((a)=>{return a})
// console.log(b)
// let c=b.reduce((a,b)=>{return a+b})
// console.log("Sum up the values of obj's properties using reduce is " + c)




// const obj = { a: 1, b: 2, c: 3, d: 4 }
// newobj={};
// Object.keys(obj).forEach(a=>{
//     if(obj[a]>2){
//         newobj[a]=obj[a]
//     }
// });
// console.log(newobj)




// ------>  date <----

const d = new Date("2024-08-28");
console.log(d)
const x=d.setDate(d.getDate() + 3);
const newc=new d.toDateString();
console.log(newc)




// const date=new Date();
// const year=date.toDateString(date.getDate()+3);
// console.log(year)
// // const dayofweek=date.setTime(UTC+5:30);
// // console.log(dayofweek)
// // const months=date.setMonth(11);
// // console.log(months)
// // const dates=date.getDate();
// // console.log(dates)
// const week=new Date(date.getTime()+7*24*60*60*1000)
// console.log(week)


// const date1=new Date("2024-08-28")
// const date2=new Date("2024-09-01")
// const res=Math.abs(date1-date2);
// const res1=24*60*60*1000
// console.log(res,res1)
// console.log(Math.floor(res/res1))



// const news=new Date();
//  news.setDate(news.getDate() +3);
// console.log(news)