
import React from "react";
const person = 'eluezy';
const greeting = greet(person);
console.log(greeting);

export default function MainPage() {
  return (
    <div>
        <h1>これは Main ページです！</h1>
        <br/><br/>
        Hello, {greeting}!!!
    </div>
  );
}

function greet(name:string){
    return `${name}`;
}