rows=7
for(i=1;i<=rows;i++){
    res=""
    for(k=1;k<=rows-i+1;k++){
        res+="  "
    }
    for(j=1;j<=(i*2)-1;j++){
        if(i+j==i+(i*2)-1 || j==1 || i==rows)
        res+="* "
        else
        res+="  "
    }
    console.log(res)
}




rows=7
for(i=1;i<=rows;i++){
    res=""
    for(j=1;j<=rows;j++){
        if(i==rows || i==1 || j==1 || j==rows || i==j || i+j==rows+1)
        res+="* "
        else
        res+="  "
    }
    console.log(res)
}