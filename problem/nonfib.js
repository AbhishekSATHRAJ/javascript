let num=+prompt("enter the number");
a=0;
b=1;
nonfib=0;
rev="";
x=0;
while(nonfib!=num){
    let i=a+1;
    while(i<b){
    rev+=i+" ";
    nonfib++;
    i++
      if(nonfib==num){
        break;
    }  }
   c=a+b;
    a=b;
    b=c;
}
console.log(rev)

let num=+prompt("enter the number");
a=0;
b=1;
nonfib=0;
rev="";
x=0;
while(nonfib!=num){
    let i=a+1;
    while(i<b){
    rev+=i+" ";
    x=i;
    nonfib++;
    i++
      if(nonfib==num){
        break;
    }  }
   c=a+b;
    a=b;
    b=c;
}
console.log(x)

let num=+prompt("enter a number");
a=0;b=1;nonfib=0;rev="";+
87g
while(nonfib!=num){
    for(i=a+1;i<b;i++){
        nonfib++;
        if(nonfib==num){
            break;
        }
         if(i<=num){
       rev+=i+" "
    }
    }

    c=a+b;
    a=b;
    b=c;
}console.log(rev)
