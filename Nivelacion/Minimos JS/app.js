import {newAdd, newMultiply}  from "./newApp.js";
// Functions
function hello(name){
    return `Saludos ${name}`
}

function add(x=0,y=0){
    return `El resultado de la suma es: ${String(x + y)}`
}

console.log(hello("Carlos"));
console.log(add(4,5));
console.log(add(0,0));

//Objects
const user = {
    name: "Emanuel",
    lastName: "Camarena",
    age: 25,
    address:{
        country:"Mexico",
        city:"Guadalajara",
        street:"Guadalajara St. 123"
    },
    friends: ["Luis","Tetsuo"],
    active:true,
    sendMail: function(){
        return "Sending Email"
    },
    sendMail2(){
        return "Sending Email"
    }
}

console.log(user.name);
console.log(user.address.country);
console.log(user.sendMail);
console.log(user.sendMail());

//Manipulación de DOM
const title = document.createElement("h1");
title.innerText = "Hola Mundo desde JS";
const button = document.createElement("button");
button.addEventListener("click",() => {
    title.innerText = "Texto actualizado desde JS";
    alert("Usted hizo un click");
})
button.innerText = "Click";
document.body.append(title);
document.body.append(button);

//Destructuración de Objetos
const userNew = {
    name: "Emanuel",
    age: 25
}

function printInfo({name, age}){
    return `<h1> Hola ${name} tienes ${age} años </h1>`
}

function printInfo2(user){
    const {name, age} = user;
    return `<h1> Hola ${name} tienes ${age} años </h1>`
}

document.body.innerHTML = printInfo(user);

//Array Methods: Filter / Map / Foreach / Find / Concat
const names = ["Ryan","Carlos","Ernesto","Maria","Erika","Luis","Pedro"];

//For loop per element 
names.forEach((name) => {
    console.log(name);
});

//Map - returns an array
const newNames = names.map((name)=>{
    return `Name: ${name}`
});
console.log(newNames);

//Find - returns the element if found (if multiple incidences, then it returns the first one found)
const nameFound = names.find((name)=>{
    if(name.includes("s")){
        return name
    }
});
console.log(nameFound);

//Filter - returns a filtered array
const nameFilter = names.filter((name)=>{
    if(name.includes("s")){
        return name
    }
});
console.log(nameFilter);

//Concat
const namesNew = ["Charlie","John","Francisco"];
console.log(names.concat(namesNew));

//Spread - better use of concat 
console.log([...names,...namesNew]);

//Modules
console.log(newAdd(2,2));
console.log(newMultiply(2,3));

// Optional Chaining
const person = {
    name: "Ryan",
    address: {
        city: "London"
    }
}
// Si queremos acceder a person.location.city va a dar error
// Pero se puede hacer opcional que si existe arroja su contenido o arroje unddefined si no existe
console.log(person.location?.city);

// Async & Await
const ul = document.createElement("ul");
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        data.forEach((post)=>{
            const li = document.createElement("li");
            li.innerText = post.title;
            ul.append(li);
        });
        document.body.append(ul);
    });

//Faster Async & Await
async function loadData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    console.log(data);
    console.log(data);
    data.forEach((post)=>{
        const li = document.createElement("li");
        li.innerText = post.title;
        ul.append(li);
    });
    document.body.append(ul);
};
loadData();
console.log("Linea 2");