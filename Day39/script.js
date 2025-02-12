console.log("Rohit is a Hacker")
console.log("Rohan is a Hecker")


setTimeout(() => {
    console.log("I am inside setTimeout1")
}, 0);
setTimeout(() => {
    console.log("I am inside setTimeout2 ")
}, 0);

console.log("The End")

const fn = () => {
    console.log("Nothing")
}
const callback = (arg, fn)=>{
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("JavaScript", fn);
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback )
