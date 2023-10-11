//Closure

function a()
{
    var x=7;
    function b()
    {
        console.log(x)
    }
    x=100
    return b
}
z=a()
z() //100

//Closure with timeout

function x()
{
    for (var i=1;i<=5;i++)
    {
        function close(i)
    {
        setTimeout(function(){
            console.log(i)
        },i*1000)
        
    }
    close(i)
    }
    

}

x()


//Async example
function f1 () {
    setTimeout(
        function(){
            console.log(3000)
            },    3000
)
console.log("sync1")
setTimeout(
    function(){
        console.log(1000)
        },    1000
);
setTimeout(
    function(){
        console.log(2000)
        },    2000
);


}

f1()


//Array methods

//1. map //returns arary

arr1=[1,2,3,4,5,6,7,10,12,15]

arr2=arr1.map(func1)
function func1 (value)
{
    return value*2
}
console.log(arr2)

//2. filter //returns array

var arr2=arr1.filter((x)=>x>5)
console.log(arr2)

//3. reduce //returns number

var sum=arr1.reduce((total,value)=>total+value)
console.log(sum)

//4. findIndex //returns index

var index=arr1.findIndex((x)=>x==5)
console.log(index)

//5. push //returns length

var push=arr1.push(5)
console.log(push)

//6. unshift //returns length

var unshift=arr1.unshift(7)
console.log(unshift)


//7. includes //returns true or false

var include=arr1.includes(5)
console.log(include)

//8. slice //returns array

var sliced=arr1.slice(2,5)
console.log(arr1,sliced)

//9. fill

var newArr=new Array(5)
newArr.fill(10) 

//10. join 

var joined=arr1.join(",")
console.log(joined,arr1) //changes the array too

//11. every //returns true or false

const numb = [45, 4, 9, 16, 25];
let allOver18 = numb.every(myFunction); //returns true or false //every for all and some for any

function myFunction(value, index, array) {
  return value > 18;
}

//12. some //returns true or false
allOver18 = numb.some(myFunction); 
function myFunction(value, index, array) {
  return value > 18;
}

//13. foreach //iterates through array

var n = [45, 4, 9, 16, 25];

n.forEach(
    x=>{
        console.log(x)
    }
)


 






