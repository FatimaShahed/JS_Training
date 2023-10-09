const a={
    prop1 : 1,
    prop2 : 2
};
a.prop1 = 3;
console.log(a) // a.prop1 can be changed

//a = 3; //a cant be changed

let b = 12;
{
    let b = 30;
    console.log(b); //30
}
console.log(b)  //12


var c = 50;
{
    var c = 60;

}
console.log(c); //60
var d=20
function f ()
{
     var d = 120;
     console.log(d);
}
//console.log(d); //err
 f();
 console.log(d);

//hoisting

getName(); //hello, //getName : f getname()  (in memory)
console.log(getName); //Function : getName()
console.log(x); //undefined, runs only in case of var, //x: undefined in memory
var x=5;
function getName()
{
    console.log("hello");
}

//this key work in js

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      
      return this.firstName + " " + this.lastName;
    }
  };

console.log(person.fullName());

let y=this;
console.log(y);

"use strict";
let x1 = this;
console.log(x1);

function myFunction() {
    return this;
  }
  myFunction()

//explicit function binding using call

const A ={
    name : "abc",
    age : 12,
    data: function() {
        console.log(this.name,this.age);
        return this.name + " " + this.age;
      }

}
const B={
    name : "xyz",
    age : 15
}

A.data.call(B) 

//explicit function binding using apply


const A1 ={
    name : "abc",
    age : 12,
    data: function(a1,a2) {
        console.log(this.name,this.age,a1,a2);
        return this.name + " " + this.age;
      }

}
const B1 ={
    name : "xyz",
    age : 15
}

A1.data.apply(B1,["arr1","arr2"]) 



 
   
   

  
   



