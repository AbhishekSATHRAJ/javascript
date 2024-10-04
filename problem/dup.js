/ arr=[5,6,8,4,9,4,1,8,8,8,7,5,2,4]
emp=[];uni="";dup=""
for(i of arr){
    if(!emp.includes(i)){
        emp.push(i)
    }
}console.log(emp);
for(i of emp){
    h=1;
    for(j of arr){
        if(i==j){
           h++
        }
    }
    if(h==2){
        uni+=i+" "
    }
    else{
        dup+=i+" "
    }
}
let res1=(uni.length<=2)?"uniques number is "+uni: "uniques number are " +uni
let res=(dup.length<=2)?"duplicates number is "+dup: "duplicates number are " +dup
console.log(res1)

arr=[5,6,8,4,9,4,1,8,8,8,7,5,2,4]
emp=[];uni="";dup=""
for(i of arr){
    if(!emp.includes(i)){
        emp.push(i)
    }
}console.log(emp);
for(i of emp){
    h=0;
    for(j of arr){
        if(i==j){
           h++
        }
    }
    if(h==1){
        uni+=i+" "
        console.log(`${i} -> ${h}`)
    }
    else{
        dup+=i+" "
        console.log(`${i} -> ${h}`)
    }
}
let res1=(uni.length<=1)?"uniques number is "+uni: "uniques number are " +uni
let res=(dup.length<=1)?"duplicates number is "+dup: "duplicates number are " +dup
console.log(res1)
console.log(res)