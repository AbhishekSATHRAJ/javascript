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

































row=10 //prompt("enter ")
for(i=1;i<=row;i++){
    res=""
    for(k=1;k<=i-1;k++){
        res+=" "
    }
    for(j=1;j<=row-i+1;j++){
        if(j==1 ||i==1 || i+j==row+1){
        res+="* "
        }
        else{
            res+="  "
        }
    }
    console.log(res)
}



row=4
num=1
for(i=1;i<=row;i++){
    res=""
    for(j=1;j<=i;j++){
        if(i/2==1 ||i==row){
        res=num+" "+res
        num++
        }
        else{
            res=res+num+" "
        num++ 
        }
    }
    console.log(res)
}
