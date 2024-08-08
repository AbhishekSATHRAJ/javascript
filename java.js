
// ----> greatest number <------

// let x = 11;
// let y = 11;
// if (10>=11) {
//   console.log(x+=y);
// }
// else if (x > y) {
//   console.log(`
// greathan value`);
// }
// else if (x < y) {
//   console.log(`lessthan value`);
// }
//  else  {
//   console.log(`nothing`);
// }

// -----> terinary <-------


// let x=0;
//     y=5;
//     z=10;
// console.log(x<y?"Largest Number":"Smallest Number")


// -----> greatest <------

//   let a = 30;
//   let b = 25;
//   let c = 20;
//   if(a<b && b>a) {
//     console.log("b is greatest")
//   }
//   else if (a>b && b<a) {
//     console.log("a is greatest")
//   }
//   else if (c){
//     console.log("c is greatest")
//   }



// let opt1=prompt("enter the value")
// let opt2=prompt("enter the value")
// let res=opt1+opt2
// alert(res)



// let x=3;
// y=-7;
// z=12;
// console.log(x>y && x>z)
// console.log(x+","+y+","+z)


// ----> user admin <-----

let user="man";
if (user=="admin"){
console.log("logged in a admin")}
else if(user=="employer"){
console.log("logged in as employer")}
else if(user=="super_admin"){
    console.log("logged in as super_admin")
}
else if(user=="customer"){
    console.log("logged in as customer")
}
else{
    console.log("Invalid user")
}


// ------> else if distance  <-------

let distance=55;
if(distance>0 && distance<5){
    console.log("the fare for a taxi ride based on distance travle price is $5")
}
else if(distance>4 && distance<10){
    console.log("the fare for a taxi ride based on distance travle price is $10")
}
else if(distance>9 && distance<20){
    console.log("the fare for a taxi ride based on distance travle price is $20")
}
else{
    console.log("the fare for a taxi ride based on distance travle price is $30+ $5 is extra tax")
}


//------> else if units  <------ 


let units=19;
if(units>1 && units<5){
    console.log("0% discount on a product based on the quantity purchased")
}
else if(units>4 && units<10){
    console.log("5% discount on a product based on the quantity purchased")
}
else if(units>9 && units<20){
    console.log("10% discount on a product based on the quantity purchased")
}
else{
    console.log("15% discount on a product based on the quantity purchased")
}


// ------> switch coffe <-----


let coffe = "latte";
switch (coffe) {
  case ("espresso"):
    console.log("user selection Espresso coffe");
    break;
    case ("cappuccino"):
    console.log("user selection Cappuccino coffe");
    break;
    case ("latte"):
    console.log("user selection latte coffe");
    break;
    case ("mocha"):
    console.log("user selection mocha coffe");
    break;
    default:
    console.log("no coffe")
}

// ------>  switch regin <------

let regin = "asia";
switch (regin) {
  case "north_america":
    console.log("travelling shipping cost based on the north_america is $10");
    break;
  case "south_america":
    console.log("travelling shipping cost based on the south_america is $20");
    break;
  case "europe":
    console.log("travelling shipping cost based on the europe is $30");
    break;
  case "asia":
    console.log("travelling shipping cost based on the asia is $40");
    break;
  case "australia":
    console.log("travelling shipping cost based on the australia is $50");
    break;
  default:
    console.log("no travelling");
}

// -----> 10 of old number <-----

for(i=1;i<=10;i++){
    if((i%2==0)-(1))
        console.log(i) 
}


// ----->  digits of 123 and 4567 <------

arr=[1,2,3]
console.log(arr.length);
arr=[4,5,6,7]
console.log(arr.length);



// -----> even numbers <------

for(i=40;i<=50;i++){
    if(i%2==0)
    console.log(`40x${i-40}=${40*(i-40)}`)
}


// ----> fizz buzz with even and old numbers <------

for(i=1;i<=20;i++){
    if(i%2==0 && i%3==0)
    console.log(i+"fizzbuzz")
    else if(i%5==0)
    console.log(i)
    else if(i%3==0)
    console.log(i+"buzz")
    else if(i%2==0)
   console.log(i+"fizz")
    else
    console.log(i+"Abhi")
}


// ----> all even numbers of 100 and 50 <------

let sum=0
    sum1=0
for(i=1;i<=100;i++){
    if((i%2==0))
       sum=sum+i
}
console.log(`the sum of all even numbers between 1 and 100 is ${sum}`);
for(i=1;i<=50;i++){
    if((i%2==0))
       sum1=sum1+i
}
console.log(`the sum of all even numbers between 1 and 50 is ${sum1}`);



// ----> factoriol numbers <------


let n=5;
    s=3
n=n*(n-1)*(n-2)*(n-3)*(n-4);
console.log(n);
s=s*(s-1)*(s-2);
console.log(s)
