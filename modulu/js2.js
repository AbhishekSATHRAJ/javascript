// require("./js1")
console.log("hello")

let obj1={
    a:"html",
    play: function(){
        console.log("hello", this.a)
    }
}
let obj2={
    a:"java"
    
}
let hello=obj1.play.bind(obj2)

module.exports={hello}