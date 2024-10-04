number=prompt("enter the value");
non_primesum=0;
primesum=0;
function prime(number){
for(num of number){
       if(num>1){
        count=0
        for(i=2;i<num;i++){
            if(num%i==0){
                non_primesum+=Number(num);
                count++;
                break;
            }
        }
        if(count==0){
            primesum+=Number(num);
        }
    }
    else{
        console.log("enter the valid number")
    }
}
    console.log(non_primesum)
    console.log(primesum)
}

num=prompt('enter the value')
function prime(num){
    if(num>1){
    count=0;
    for(i=2;i<num;i++){
        if(num%i==0){
            console.log(`${num} is a not prime number`);
            count--;
            break;
        }
        if(count==0){
            console.log(`${num} is a prime number`)
            break;
        }
    }
}
 else{
    console.log(`${num} is a invalid number`)
        }
}
prime(num)

let input=prompt("enter the value")
nonprimesum=0; primesum=0;
for(num of input){
  if(num>1){
    c=0;
    for(i=2;i<num;i++){
      if(num%i==0){
        nonprimesum=nonprimesum+Number(num);
        c++;
        break
      }
    }
      if(c==0){
        primesum=primesum+Number(num)
      }

  }
}
result=(nonprimesum>primesum)?"primesum is bigger":"nonprimesum is bigger";
console.log(result)