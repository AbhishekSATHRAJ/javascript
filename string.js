let arr=["hell1o","h0ai","123","564","sam9e","6696","game"];
let arr2=[];j=0
let arr3=[];z=0
for(i=0;i<arr.length;i++){
    if(arr[i]==Number(arr[i])){
        arr2[j]=arr[i];
        j++
    }
    if(arr[i]!=Number(arr[i])){
        arr3[z]=arr[i];
        z++
    }
    
}
console.log(arr2)
console.log(arr3)





let arr=["hello","world","this","is","a","test"]
let arr1=[];j=0;
for(i=0;i<arr.length;i++){
    if(arr[i].startsWith("h")){
       arr1[j]=arr[i];
       j++;
    }
   
} console.log(arr1)






let arr=["hello","world","this","is","a","test"]
let arr2=[];j=0
for(i=0;i<arr.length;i++){
    arr2[j]=arr[i].at(0)
     j++
}
console.log(arr2)




// function checkChar(char){
//     ch  = char.toLowerCase(); 
//     const arr = ['a','e','i','o','u'] 
//     if(arr.includes(ch))
//     return console.log("Given character is a Vowel");
//     return console.log("Given character is a Consonent");
// }

// checkChar('A');
// checkChar('h');









let arr=["hello","world","this","is","a","test"];
let substr=["o"];arr2=[];j=0
for(i=0;i<arr.length;i++){
    if(arr[i].indexOf(substr) === -1){
      arr2[j]=arr[i]
      j++
    }
}console.log(arr2)