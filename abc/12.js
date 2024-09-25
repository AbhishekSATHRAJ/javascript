n=+prompt()
for(i=1;i<=n;i++){
    res="";num=i
    for(j=1;j<=i;j++){
        res+=num+" "
        num=num-1
    }
    console.log(res)
}

rows=+prompt()
for(i=1;i<=rows;i++){
    res=""
    for(j=1;j<=i;j++){
        if(j==1){
            res+=(i*2)+" "
            nextnum=i+rows-j
        }
        else{
            res+=(nextnum*2)+" "
            nextnum=nextnum+rows-j
        }
    }
    console.log(res)
}

    