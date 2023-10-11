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


//data types

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var d = new Date("2021-03-25");
let month = months[d.getMonth()];
console.log(month)

var a5 = BigInt ("1234567890");
    

 var s= Symbol('a') 
 console.log(s)
   
 let person3 = {
    name: "Jack",

    // adding symbol as a key
 };
console.log(person3)

//implicit binding

function myFunction() {
    console.log(this)     
  }
 
const obj = {
  someKey: 1, 
  myFunction: myFunction,
}

obj.myFunction();

//new keyword binding

let Cartoon = function(name, character) {
    this.name = name;
    this.character = character;
    this.log = function() {
        console.log(this.name +  ' is a ' + this.character);
    }
};

var c = new Cartoon("tom","cat")
c.log()

//Default binding

function func() {
  console.log(this)
}

//Explicit binding 

//call

function f1(att1,att2)
{
    console.log(this.name,att1,att2)
}
var user = {
    name : "first user",
    age : 12
};

f1.call(user,"attribute1","attribute2")

//apply

 
function greeting(attr1,attr2){
    console.log(`${attr1}, ${this.name}, ${attr2}`);
 }
var user = {
    name : "second user",
    age : 12
}; 
attributes = ["attribute1","atrribute2"]
greeting.apply(user,attributes)

//bind

function f1(att1,att2)
{
    console.log(this.name,att1,att2)
}
var user = {
    name : "first user",
    age : 12
};

anotherFunc=f1.bind(user)
anotherFunc("attr1","attr2","123")


//Arrays

arr1=[1,2,3,4]
arr2=new Array(1,2,3)
console.log(arr2.toString())
arr1[0]=new Date() //arrays are dynamic objects
arr1[0]=arr1[0].getMonth()+1
console.log(arr1)

const point1 = [50] //1 element in arr
const point2 = new Array(50) //50 elements in arr
console.log(point2.length)
console.log(Array.isArray(point1))
console.log(point1 instanceof Array)
console.log(arr1.join("*"))
console.log(arr1.push(5))
console.log(arr1.shift())
//delet leaves undefined holes
arr3=arr2.concat(arr1)
console.log(arr3.concat("val"))
//arr.flat flattens the array
arr3.splice(2,1,"new val")
arr3.splice(2,2)
console.log(arr3)
const myArr = [
    {name:"X00",price:100 },
    {name:"X01",price:100 },
    {name:"X09",price:100 },
    {name:"X03",price:100 },
    {name:"X04",price:110 },
    {name:"X05",price:110 },
    {name:"X06",price:110 },
    {name:"X07",price:110 }
  ];
  console.log(myArr.sort(function(a,b){return a.name[2]-b.name[2]}))
  console.log(myArr)

const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
for (let x in arr3)
{
    console.log(arr3[x])
}

for (let x of arr3)
{
    console.log(x)
}
function myFunction(value, index, array) {
  console.log(value)
}
var i=0
do {
   console.log(i)
   i+=1
}
while (i<5);

arr5=arr3.map(func1)
function func1 (value)
{
    return value*2
}
console.log(arr5)

arr6=arr3.flatMap((x)=>x*2)
console.log(arr6)

arr7=arr6.filter((x)=>x>5)
console.log(arr7)

const num = [45, 4, 9, 16, 25];
let sum = num.reduceRight(myFunction, 100);

function myFunction(total, value) {
  return total + value;
} 
console.log(sum,num)

const numb = [45, 4, 9, 16, 25];
let allOver18 = numb.every(myFunction); //returns true or false //every for all and some for any

function myFunction(value, index, array) {
  return value > 18;
}
console.log(numb)

//indexOf is used to find the index of the first occurence 
//lastindexOf is used to find the index of the last occurence 

const num2 = [4, 9, 16, 25, 29];
let first = num2.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
} 
console.log(first)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys(); //return keys //entries return key val pairs

for (let x of keys) {
  console.log(x)
}

var str="123"
console.log(Boolean(-1))


//currying using bind

function fun1(x,y)
{
    return x*y
}
fun2=fun1.bind(this)
fun2(2,5)

fun3=fun1.bind(this)
fun3(1,2)


//proxy

var gameObj = {
    name : "obj1",
    type : "hypercasual"
};
var proxy = new Proxy(gameObj, {
    get :(o,prop) => {return  "not defined"},
    set :(o,prop,value) => o[prop]=value,
    has :(o,prop) => {
        if (prop in o) 
           return true
        else 
           return false

    }

}
)
proxy.level=12
proxy.name
console.log("level" in proxy) //true

//exposing one func to another is closure

function calculateVolume(length) {
	return function (breadth) {
		return function (height) {
			return length * breadth * height;
		}
	}
}
console.log(calculateVolume(4)(5)(6));

Boolean(function(){})
//symbol cant be converted to num

var x="123 nan"
var x=parseInt(x)
console.log(typeof (123 != '456'))

console.log(true | 0)