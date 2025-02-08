/*
Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:

     Crazy
     Amazing
     Fire

Shop Name:

     Engine
     Foods
     Garments

Another Word:

     Bros
     Limited
     Hub

 */    


let rand = Math.random()
let first, second, third;

// Lets generate the first word

if(rand<0.33){
     first = "Crazy"
}
else if(rand<0.66 && rand>=0.33){
     first ="Amazing"
}
else{
     first = "Fire"
}


// Lets generate the second word

let rand1 = Math.random();

if(rand1<0.33){
     second = "Engine"
}
else if(rand1<0.66 && rand1>=0.33){
     second ="Food"
}
else{
     second = "Garments"
}


// Lets generate the third word

let rand2 = Math.random();
if(rand<0.33){
     third = "Bros"
}
else if(rand2<0.66 && rand2>=0.33){
     third ="Limited"
}
else{
     third = "Hub"
}


console.log(first, second, third)
