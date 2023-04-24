// Import and configure dotenv module to securely store API key
const dotenv = require('dotenv')
dotenv.config();

// Import and set up Node.js modules
var path = require('path')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const express = require('express')
const app = express()

// Import and initialize bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import and initialize Cors
const cors = require('cors');
app.use(cors());

// Initialize main project folder
app.use(express.static('dist'))
console.log(__dirname)

// Designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// Declare API key const
const nlpAPI = process.env.API_KEY;

// POST route
app.post('/data', async (req, res) => {
    try {
      // Get the website URL from the request body
      const website = req.body.url;
  
      // Send a POST request to the MeaningCloud API with the website URL and API key
      const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${nlpAPI}&url=${website}&lang=en`, {
        method: 'POST',
      });
  
      // Check if the response was successful
      if (!response.ok) {
        // If not, throw an error with the status code and text
        const error = new Error(`Request failed with status ${response.status}: ${response.statusText}`);
        error.status = response.status;
        throw error;
      }
  
      // If the response was successful, parse the JSON
      const data = await response.json();
  
      // Check if the data contains an error message
      if (data.status.code !== '0') {
        // If it does, throw an error with the error message
        const error = new Error(data.status.msg);
        throw error;
      }
  
      // Send the data to the client
      res.json(data);
    } catch (error) {
      // Handle any errors
      console.error(error);
  
      // Set a default status code of 500 if one wasn't already set
      if (!error.status) {
        error.status = 500;
      }
  
      // Send an error response to the client with the error message and status code
      res.status(error.status).json({ error: error.message });
    }
  });
  
