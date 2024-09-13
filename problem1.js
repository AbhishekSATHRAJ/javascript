rows=prompt("enter a rows");
for(i=rows;i>=1;i--){
    res=""
    for(k=1;k<=rows-i;k++){
        res=res+" "
    }
    for(j=1;j<=i;j++){
        res=res+"* "
    }
    console.log(res)
}




rows=prompt("enter a rows");
num=1;
for(i=1;i<=rows;i++){
    res=""
    for(j=1;j<=i;j++){
        res=res+num+" "
        num++
    }
    console.log(res)
}



row=5
for(i=1;i<=row;i++){
    res=""
    for(k=1;k<=row-i;k++){
        res+=" "
    }
    for(j=1;j<=i;j++){
        res+="* "
    }
    console.log(res)
}
for(i=row-1;i>=1;i--){
    res=""
    for(k=1;k<=row-i;k++){
        res+=" "
    }
    for(j=1;j<=i;j++){
        res+="* "
    }
    console.log(res)
}







// ----> Problem statement: “Given two strings text and pattern find the first occurrence of str1 in str2 if found print it’s index if not found print -1.” <------


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




let str1="hello"
let str2="llo"
function findPattern(str1, str2) {
  let index = str2.indexOf(str1);
  console.log(index)
  if (index !== -1) {
    console.log(index);
  } else {
    console.log(-1);
  }
}
findPattern(str1, str2);