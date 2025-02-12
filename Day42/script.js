/*let obj= {
    a: 1,
    b: "Divakar"
}
console.log(obj)

let animal = {
    eats: true
};

let rabbit ={
    jumps: true
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal */


class animal{
       constructor(name){
        this.name = name
         console.log("Object is created...")
       }

       eats(){
        console.log("Kha rha hoon")
       }
       jumps(){
        console.log("Kood raha hoon")
       }
}

class Lion extends animal{
    constructor(name){
        super()
        this.name = name
         console.log("Object is created and he is a lion...")
       }
}

let a = new animal("bunny");
console.log(a)

let l = new Lion("shera")
console.log(l)