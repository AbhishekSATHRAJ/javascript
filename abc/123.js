// --->Everyone write programs to print above two patterns based on number of rows (rows = 5)<----

row=+prompt()
for(i=1;i<=row;i++){
    res=""
    for(j=1;j<=i;j++){
        if(i==j || i==row || j==1)
        res+=j+" "
        else
        res+="  "
    }
    console.log(res)
}





row=+prompt()
for(i=1;i<=row;i++){
    res=""
    for(j=1;j<=row-i+1;j++){
        if(i==1)
         res+=j+" "
        else if(j==1 )
        res+=i+" "
        else if(i+j==row+1)
        res+=row+" "
        else
        res+="  "
    }
    console.log(res)
}