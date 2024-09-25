
rows=+prompt("enter number")
for(i=0;i<=rows;i++){
    res="";alpha=65;
    for(j=1;j<=rows-i;j++){
        res+=String.fromCharCode(alpha);
        alpha++
    }
    if(i==0)
    console.log(res+res.slice(0,res.length-1).split("").reverse().join(""))
    else
    console.log(res+" ".repeat(2*i-1)+res.split("").reverse().join(""))
}





rows=+prompt("enter number")
alpha=65
for(i=1;i<=rows;i++){
   res=""
   for(j=1;j<=i;j++){
       res=String.fromCharCode(alpha)+" "+res
       alpha++
   }
   for(k=1;k<=rows-i;k++){
       res="  "+res
   }
   console.log(res)
}