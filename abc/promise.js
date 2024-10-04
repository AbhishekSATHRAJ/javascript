function pro(a){
    let b=Math.floor(Math.random()*10)
    console.log(b)
    return new Promise((res,rej)=>{
        if(b){
            res("promise resloved")
        }
        else{
            rej("promise rejected")
        }
    })
}
function pro1(a){
    let b=Math.floor(Math.random()*10)
    console.log(b)
    return new Promise((res,rej)=>{
        if(b){
            res("promise resloved")
        }
        else{
            rej("promise rejected")
        }
    })
}
pro().then((e)=>{console.log(e)}).catch((e)=>{console.log(e)})
pro1().then((e)=>{console.log(e)}).catch((e)=>{console.log(e)})

pro().then((e)=>{console.log(e);return pro1()}).then((e)=>{console.log(e)}).catch((e)=>{console.log(e)})