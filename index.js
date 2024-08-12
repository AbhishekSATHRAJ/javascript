// ----> For loop <-----

for (i = 1; i <= 10; i++) {
  console.log(h(i ** 2));
}



let sum = 0;
for (i = 1; i <= 20; i++) {
  if (i % 3 == 0) sum = sum + i;
}
console.log(`the sum of all numbers from 1 to 20 is ${i} = ${sum}`);



for (i = 1; i <= 15; i++) {
  console.log(i ** 3);
}



// -----> Do while loop <----


let i = 10;
do {
  console.log(i);
  i--;
} while (i >= 1);



let i = 1;
let sum = 1;
do {
  sum = sum * i;
  i++;
} while (i <= 12);
console.log(sum);



let i = 20;
do {
  console.log(i);
  i = i - 2;
} while (i >= 1);



// -----> while loop <-----



var i = 1;
while (i <= 20) {
  if (i % 5 != 0) console.log(i);
  i++;
}



var i = 1;
var sum = 0;
while (i <= 30) {
  if (i % 4 == 0) sum = sum + i;
  i++;
}
console.log(sum);



var i = 50;
while (i >= 0) {
  if (i % 3 == 0) console.log(i);
  i--;
}
