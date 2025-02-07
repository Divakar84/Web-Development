console.log("We are Learning Loops in JavaScript...");

/*let a = 1;
for (let i = 0; i < 100; i++)  {
  console.log(a+i);
}*/

let obj = {
  name: "Divakar",
  role: "Programmer",
  Company: "Open AI",
};

for (const element in obj) {
  console.log(element);
}

/*for (const key in obj){
    const element = obj[key];
    console.log(key, element)
}*/

for (const c of "Divakar") {
  console.log(c);
}

/*let i = 0;
while (i < 6) {
  console.log(i)
  i++;
}*/

let i = 0
do{
    console.log(i);
    i++
}
while(i<=10);
