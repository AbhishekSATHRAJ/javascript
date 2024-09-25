// --->Hello world<--

let str=prompt().split("").sort()
emp=[]
for(i of str){ 
    if(!emp.includes(i)){
        emp.push(i)
    }
}
console.log(emp)
for(i of emp){
    c=0
    for(j of str){
        if(i==j){
            c++
        }
    }
        console.log(i+ " - " +c)
}

// ---> “Given two strings text and pattern find the first occurrence of str1 in str2 if found print it’s index if not found print -1.”<---



let str2="takeuforward"
let str1="forward"
function findPattern(str1, str2) {
  let index = str2.indexOf(str1);
  if (index !== -1) {
    console.log(index);
  } else {
    console.log(-1);
  }
}
findPattern(str1, str2);




let str1="hello"
let str2="az"
function findPattern(str1, str2) {
  let index = str2.indexOf(str1);
  if (index !== -1) {
    console.log(index);
  } else {
    console.log(-1);
  }
}
findPattern(str1, str2);


// --->Given a string, return the character that occurs the maximum number of times in the string. If the maximum occurrence of two or more characters is the same, return any one of them. <----



str=prompt()
    emp=[]
for(i of str){
    if(!emp.includes(i)){
        emp.push(i)
    }

}
    let max=0
    maxlt=""
for(i of emp){
    c=0
    for(j of str){
       if(i==j){
           c++
       }
    }
    if(c>max){
        max=c
        maxlt=i
   
    }
}
console.log(maxlt)
