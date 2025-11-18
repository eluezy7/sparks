import React from "react";
let username: string = "hiro";
let age: number = 46;
let isActive: boolean = true;

let scores: number[] = [95,85,76];
let userInfo: [string,number] = ["hiro",46];

enum Role {
    Admin,
    User,
    Guest
}
let myRole: Role = Role.User;

function greet(name:string):string{
    return `hello,${name}`;
}

function log(message:string,lavel:string = "info"):void{
    console.log(`[${lavel}]${message}`);
}

let id:number | string = 101;
id = "abc";

type User = {
    id:number;
    name:string;
    email?:string;
};

let user:User = {
    id:1,
    name:"hiro"
};

interface Product{
    id:number;
    name:string;
    price:number;
}

const item: Product = {
    id: 100,
    name: "laptop",
    price: 1200000
};

class Person{
    constructor(public name: string,private age:number){}

    greet(){
        return `Hi,I'm ${this.name}`;
    }
}

const me = new Person("hiro",46);

function identity<T>(value:T):T{
    return value;
}

let output = identity<string>("Hello");

function printId(id:number | string){
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    }else{
        console.log(id);
    }
}

function getIdText(id: number | string): string {
  return typeof id === "string" ? id.toUpperCase() : id.toString();
}

export default function PracPage() {
  return (
    <div>
      <h1>Hello from /prac</h1>
      <p>{getIdText(123)}</p>
    </div>
  );
}