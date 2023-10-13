function* fun() { 
	yield 10; 
	yield 20; 
	yield 30; 
} 

// Calling the Generate Function 
let gen = fun(); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value);


function* naturalNumberGenerator()
{
    let firstNum=1
    while(true)
    {
        yield firstNum++
    }
}

let obj = naturalNumberGenerator()
i=0
while(i<10)
{
    console.log(obj.next())
    i++
}

let array = ['a', 'b', 'c']; 
function* generator(arr) { 
	let i = 0; 
	while (i < arr.length) { 
		yield arr[i++] 
	} 
} 

const it = generator(array); 
for (var x of array)
{
    console.log(it.next())
}