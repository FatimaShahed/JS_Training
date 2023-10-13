var p = new Promise((resolve,reject)=>
{
    let a=1+2;
    if(a==3)
    {
        resolve("passed")
    }
    else
    {
        reject("failed")
    }
})

p.then((message)=>
{
    console.log("then " + message)
}).catch((message)=>
{
    console.log("catch " + message)

})

//Multiple Promises

let p1 = new Promise((resolve,reject)=>
{

    resolve("promise1 passed")

})
let p2 = new Promise((resolve,reject)=>
{

    resolve("promise2 passed")

})
let p3 = new Promise((resolve,reject)=>
{

    resolve("promise3 passed")

})

Promise.all(
    [
        p1,p2,p3
    ]
).then((msgs)=>
{
    console.log(msgs)
}
)


//callback hell resolved using promises

// const createOrder = (cart, function(orderId)
// {
//      proceedToPayment(orderId,function()
//      {
//         checkout()
//      })
// })

// //using Promises

// var createOrderPromise = new Promise(createOrder(cart))
// createOrderPromise.then(function(orderId){
//       proceedToPayment(orderId)
// })

 

//Async/await , then
//then is used to handle the fulfilled/failed promises
//await is used to wait for the promise

//then example

// var p = new Promise((resolve,reject)=>
// {
//     let a=1+2;
//     if(a==3)
//     {
//         resolve("passed")
//     }
//     else
//     {
//         reject("failed")
//     }
// })

// p.then((message)=>
// {
//     console.log("then " + message)
// }).catch((message)=>
// {
//     console.log("catch " + message)

// })

// //await example

// const axioRequest=require('axios')
// async function awaitFunction()
// {
//     try 
//     {
//         let response=await axioRequest.get('https://httpstats.us/500')
//         console.log('$Response : {response}')
//     }
//     catch(error)
//     {
//         console.log('$Error : {error}')
//     }

// }
 
const axios = require('axios');

// Replace 'YOUR_API_KEY' with your actual API key
const API_KEY = 'YOUR_API_KEY';

// Define the URL of the API you want to request
const apiUrl = 'https://api.example.com/data'; // Replace with your API endpoint

// Create a function to make the API request
function fetchDataWithApiKey() {
  return axios.get(apiUrl, {
    headers: {
      'Authorization': `Bearer ${API_KEY}` // Set the API key in the Authorization header
    }
  })
  .then(response => {
    // Handle the response data here
    console.log(response.data);
    return response.data;
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error('Error:', error);
    throw error;
  });
}

// Call the function to make the API request
fetchDataWithApiKey()
  .then(data => {
    // Handle the data in the promise
    console.log('Data:', data);
  })
  .catch(error => {
    // Handle any errors that may occur during the API request
    console.error('Error:', error);
  });


 



