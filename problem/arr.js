let arr="30 50 30 50 20 50 50 20 50 50 50"
let num=arr.split(" ").map(Number);
temp=[];res="";
sum=0;
for(i of num){7
   if(!temp.includes(i)){
   temp.push(i)
}
}
console.log(temp)
for(i of temp){
    c=0;
    for(j of num){

        if(i==j){
            c++

        }

    }
    res+=Math.floor(c/2)
}

for(i of res){
   sum+=Number(i)
}
console.log(" Sum of pair count of "+arr + "is " +sum)