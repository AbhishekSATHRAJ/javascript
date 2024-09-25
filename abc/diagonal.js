let row=+prompt("")
for(i=1;i<=row;i++){
    res=""
    for(j=1;j<=row;j++){
        if(i==j){
        res+=i+" "
    }
    else if(i+j==row+1){
        res+=j+" "
    }
    else{
        res+="  "
    }
    }
    console.log(res)
}








str=prompt()
rows=1;ind=0;
while(str[ind]){
    res=""
    for(i=1;i<=rows;i++){
        if(!(str[ind]==undefined)){
            res+=str[ind]+" "
            ind++
        }
        else{
            res+="* "
        }
    }
    console.log(res)
    rows++
   
    
}