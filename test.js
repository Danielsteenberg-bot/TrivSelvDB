const axios = require('axios');

axios.get('http://localhost:5000') // Replace with your server URL
  .then(response => {
    if (response.status === 200) {
      console.log('Server is up and running!');
    } else {
      console.log('Server is not responding with a successful status code.');
    }
  })
  .catch(error => {
    console.error('Error connecting to the server:', error.message);
  });
