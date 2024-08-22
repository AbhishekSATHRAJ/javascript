// console.log("map")

let arr = [1, 2, 3, 4, 5];
res = " ";
arr.map((a) => {
  res += a * 2;
});
console.log(res);



let arr = ["hello", "world"];
res = [];
j = 0;
arr.map((a) => {
  for (i = 0; i < arr.length; i++) {
    res[j] = arr[i].toUpperCase();
    j++;
  }
});
console.log(res);



// console.log("Filter");




let arr = [1, 2, 3, 4, 5];
res = " ";
arr.filter((a) => {
  if (a % 2 == 0) {
    res += a + " ";
  }
});
console.log(res);



let characters = ["hello", "world", "abc"];
for (string of characters) {
  for (i = 0; i < string.length; i++) {
    if (string.length >= 5) {
      console.log(string);
      break;
    }
  }
}



let characters = ["hello", "world", "abc"];
characters.filter((a) => {
  if (a.length % characters.length !== 0) {
    console.log(a);
  }
});



let characters = ["hello", "world", "abc"];
characters.filter((a) => {
  if (a.length % 5 == 0) {
    console.log(a);
  }
});



// console.log("For each");



let arr = [1, 2, 3, 4, 5];
arr.forEach((a) => {
  console.log(a);
});


let arr = ["hello", "world"];
res = "";
arr.forEach((a) => {
  res += a.concat("!") + " ";
});
console.log(res);





// console.log("every");




let arr = [1, 2, 3, 4, 5];
arr.every((a) => {
  console.log(a >= -1);
});




let arr = ["hello", "world", "abc"];
arr.every((a) => {
  if (a.length >= 5) {
    console.log(a ? "true" : "false");
  }
});




// console.log("some");




let array = [1, 2, 3, 4, 5];
let x = array.some((a) => {
  if (a % 2 == 0) {
    return a ? "true" : "false";
  }
});
console.log(x);




let array = ["hello", "world", "max"];
let z = array.some((a) => {
  if (a.includes("x")) {
    return a ? "true" : "false";
  }
});
console.log(z);





// console.log("find");




let array = [1, 2, 3, 4, 5];
let x = array.find((a) => {
  if (a % 2 == 0) {
    return a;
  }
});
console.log(x);




let array = ["hello", "world", "max"];
let z = array.find((a) => {
  if (a.includes("x")) {
    return a;
  }
});
console.log(z);




// console.log("findindex");




let array = [1, 2, 3, 4, 5];
let x = array.findIndex((a) => {
  if (a % 2 == 0) {
    return a;
  }
});
console.log(x);

let array = ["hello", "world", "max"];
let z = array.findIndex((a) => {
  if (a.includes("x")) {
    return a;
  }
});
console.log(z);
