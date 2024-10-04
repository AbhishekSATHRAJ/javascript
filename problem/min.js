num=+prompt("enter a series number");
a=0;b=1;
i=1;rev=" ";
while(i<=num){
    if(i==num){
    rev+=a;}
    c=a+b;
    a=b;
    b=c;
    i++;
}
console.log(rev)

function reverseNumber(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      )
      * Math.sign(num)
    )
  }

  console.log(reverseNumber("240"))

let num=+prompt("enter a number")
a=0;b=1;
i=0;rev="";
while(a<=num){
      rev+=a+" ";
      c=a+b;
      a=b;
      b=c;
      i++;
  }
  console.log(rev)