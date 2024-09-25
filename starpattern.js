// // // row=5;
// // // start=0;
// // // name="abhishek"
// // // for(i=1;i<=row;i++){
// // //     res=""
// // //     for(j=1;j<=i;j++){
// // //        if(!(name[start]==undefined)){
// // //            res+=name[start]+" "
// // //        }
// // //        else{
          
// // //            res+="* "
// // //        }
// // //        start++
// // //     }
// // //     console.log(res)
// // // }


// // row=5
// // num=1
// // num1=row
// // for(i=1;i<=row;i++){
// //     res=""
// //     for(j=1;j<=row;j++){
// //         if(i==j){
// //         res+=num+" "
// //         num++
// //         }
// //         else if(i+j==row+1){
// //             res+=num1+" "
// //           num1--
// //         }
// //         else{
// //             res+="  "
// //         }
// //     }
// //     console.log(res)
// // }



// // let row=+prompt("")
// // for(i=1;i<=row;i++){
// //     res=""
// //     for(j=1;j<=row;j++){
// //         if(i==j){
// //         res+=i+" "
// //     }
// //     else if(i+j==row+1){
// //         res+=j+" "
// //     }
// //     else{
// //         res+="  "
// //     }
// //     }
// //     console.log(res)
// // }





// // str=prompt()
// // rows=1;ind=0;
// // while(str[ind]){
// //     res=""
// //     for(i=1;i<=rows;i++){
// //         if(!(str[ind]==undefined)){
// //             res+=str[ind]+" "
// //             ind++
// //         }
// //         else{
// //             res+="* "
// //         }
// //     }
// //     console.log(res)
// //     rows++
   
    
// // }






// // str=prompt("enter a name in odd length")
// // for(i=1;i<=str.length;i++){
// //     res=""
// //     for(j=1;j<=str.length;j++){
// //         if(i==j || i+j==(str.length+1)){
// //         res+=str[j-1]+" "
// //         }
// //     else{
// //         res+="  "
    
// //     }
// // }
// //     console.log(res)
// // }







// // row=+prompt()
// // for(i=1;i<=row;i++){
// //     res=""
// //     for(j=1;j<=i;j++){
// //         if(i==j || i==row || j==1)
// //         res+=j+" "
// //         else
// //         res+="  "
// //     }
// //     console.log(res)
// // }





// // row=+prompt()
// // for(i=1;i<=row;i++){
// //     res=""
// //     for(j=1;j<=row-i+1;j++){
// //         if(i==1)
// //          res+=j+" "
// //         else if(j==1 )
// //         res+=i+" "
// //         else if(i+j==row+1)
// //         res+=row+" "
// //         else
// //         res+="  "
// //     }
// //     console.log(res)
// // }



// rows=10
// for(i=1;i<=2*rows-1;i++){
//     cols=(i<=rows)?rows-i+1:i-rows+1
//     space=(i<=rows)?i-1:2*rows-i-1
//     res=""
//     for(k=1;k<=space;k++){
//         res+=" "
//     }
//     for(j=1;j<=cols;j++){
//         res+="* "
//     }
//     console.log(res)
// }




// rows=+prompt("enter a number")
// for(i=1;i<=2*rows-1;i++){
//     cols=(i<=rows)?i:2*rows-i
//     space=(i<=rows)?rows-i:i-rows
//     res=""
//     for(k=1;k<=space;k++){
//         res+=" "
//     }
//     for(j=1;j<=cols;j++){
//         res+=j+" "
//     }
//     console.log(res)
// }




// rows=5;
// for(i=1;i<=2*rows-1;i++){
//     cols=(i<=rows)?i:2*rows-i
//     space=(i<=rows)?rows-i:i-rows
//     res=""
//     for(k=1;k<=space;k++){
//         res+=" "
//     }
//     for(j=1;j<=cols;j++){
//         if(j==1 || j==cols)
//         res+="* "
//         else
//         res+="  "
//     }
//     console.log(res)
// }




// n=5
// for(i=1;i<=n;i++){
//     res="";num=i
//     for(j=1;j<=i;j++){
//         res+=num+" "
//         num=num-1
//     }
//     console.log(res)
// }











// n=7
// for(i=1;i<=2*n-1;i++){
//     res="";alp=65
//   cols=(i<=n)?n-i+1:i-n+1
//       for(j=1;j<=cols;j++){
//         res+=String.fromCharCode(alp)+" "
//         alp++
    
//     }
//     console.log(res)
// }

// ----->butterfly <------

// rows=+prompt("enter number")
// for(i=1;i<=2*rows-1;i++){
//     res="";space=""
//     cols=(i<=rows)?i:2*rows-i
//     spac=(i<=rows)?2*rows-(i*2):(2*i)-2*rows
//     for(k=1;k<=spac;k++){
//         space+="  "
//     }
//     for(j=1;j<=cols;j++){
//         res+="* "

//     }
//     // if(i==)
//     console.log(res.slice(0,res.length-1)+space+res.split(" ").reverse().join(" "))
// }




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