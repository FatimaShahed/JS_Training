//Promise Using Then

const axios = require('axios');

// Replace 'YOUR_API_KEY' with your actual API key
const API_KEY = 'YOUR_API_KEY';

// Define the URL of the API you want to request
const apiUrl = 'https://dummyjson.com/products/1'; // Replace with your API endpoint

// Create a function to make the API request
function fetchDataWithApiKeyUsingThen() {
  return axios.get(apiUrl)
  .then(response => {
    axios.get('https://dummyjson.com/carts/1').then(msg =>{
        console.log('then is inside a promise' , msg.data)
    }).catch(err => {
        console.log('then is inside a promise' , err)
    })
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


fetchDataWithApiKeyUsingThen()


async function fetchDataWithApiKeyUsingAwait() {
    try
    {
        const response1 =await axios.get('https://dummyjson.com/products/1')
        const response2 =await axios.get('https://dummyjson.com/carts/1')
        console.log('Success ', response1.data, response2.data)
    }
    catch(error)
    {
        console.log('Failed ',error)

    }
    
  }

  
  fetchDataWithApiKeyUsingAwait()

