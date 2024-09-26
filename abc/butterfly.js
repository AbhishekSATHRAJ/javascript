rows=+prompt("enter number")
for(i=1;i<=2*rows-1;i++){
    res="";space=""
    cols=(i<=rows)?i:2*rows-i
    spac=(i<=rows)?2*rows-(i*2):(2*i)-2*rows
    for(k=1;k<=spac;k++){
        space+="  "
    }
    for(j=1;j<=cols;j++){
        res+="* "

    }
    // if(i==)
    console.log(res.slice(0,res.length-1)+space+res.split(" ").reverse().join(" "))
}





rows=+prompt("enter number")
for(i=1;i<=2*rows-1;i++){
    res="";space="";pos=1;res1=""
    cols=(i<=rows)?i:2*rows-i
    spac=(i<=rows)?2*rows-(i*2)-1:(2*i)-2*rows-1
    for(k=1;k<=spac;k++){
        space+="  "
    }
    for(j=1;j<=cols;j++){
        if(j%2==0)
        res+="0 "
        else if(j==rows)
        continue
        else
        res+="1 "

    }
    for(k=1;k<=cols;k++){
        if(!(pos%2==0))
        res1+="1 "
        else
        res1+="0 "
        pos++
    }
 
    console.log(res+space+res1)
}