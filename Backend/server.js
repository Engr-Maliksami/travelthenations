// server.js
const express = require('express');
const cors = require('cors');
const connectDB =require('./utils/Database')
const bodyParser = require('body-parser');
const axios= require('axios');
const fs = require('fs');
require('dotenv').config();
const countryCodes = require('country-codes-list')
const UserController = require('./controllers/users.controller'); 
const path = require('path');
// Allow requests from all origins


// const Authroute= require('./routes/user.route');


const app = express();
const PORT = process.env.PORT || 7000;
app.use(bodyParser.json());


//app.use('api/user', Authroute)

app.post('/register', UserController.register )
app.post('/login', UserController.login)

app.use(cors());

app.use(cors({
  origin: ['http://localhost:3000', 'http://yourdomain.com:3000'];


}));


app.get('/', (req, res)=>{
    res.send("backend server running")
})

// news API 

// // Endpoint to fetch news
// app.post('/news', async (req, res) => {
//   const { query, from_date, to_date, location, language, page } = req.body;
  
//   const options = {
//     method: 'POST',
//     url: 'https://newsnow.p.rapidapi.com/newsv2',
//     headers: {
//       'content-type': 'application/json',
//       'X-RapidAPI-Key': '4064227f7bmsh957e73a776956a8p1a71d2jsndf2cb4b0434b',
//       'X-RapidAPI-Host': 'newsnow.p.rapidapi.com'
//     },
//     data: {
//       query,    
//       time_bounded: true,
//       from_date,
//       to_date,
//       location,
//       language,
//       page
//     }
//   };

//   try {
//     const response = await axios.request(options);
//     res.json(response.data);
//   } catch (error) {
//     console.error(error);   
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


// API Key was expired


// api to get data from the our entire database

app.get('/api/countries', async (req, res) => {
    const dataDir = path.join(__dirname, 'Data');
    const countries = [];

    try {
        const regionDirs = await fs.promises.readdir(dataDir);

        for (const regionDir of regionDirs) {
            const regionPath = path.join(dataDir, regionDir);
            const regionStats = await fs.promises.stat(regionPath);

            if (regionStats.isDirectory()) {
                const countryFiles = await fs.promises.readdir(regionPath);

                for (const file of countryFiles) {
                    const filePath = path.join(regionPath, file);
                    try {
                        const countryData = require(filePath); // Assuming files contain valid JSON data
                        // console.log('Loaded data for', countryData.name); // Log the loaded country name
                        countries.push(countryData);
                    } catch (error) {
                        console.error(`Error loading file ${filePath}:`, error);
                    }
                }
            }
        }

        // console.log('Sending countries:', countries); // Log the countries before sending the response
        res.json({ countries });
    } catch (error) {
        console.error('Error reading directory:', error);
        res.status(500).json({ error: 'Error reading directory' });
    }
});


// api to  get the data of list of countries

app.get('/api/countriesname', async (req, res)=>{
    const myCountryCodesObject = countryCodes.customList('countryCode', '{countryNameEn}')
res.send(myCountryCodesObject);
    
})

// Define route to retrieve country data

app.get('/api/country/:countryCode', (req, res) => {
    const countryCode = req.params.countryCode;
    const dataDir = path.join(__dirname, 'Data');

    // Array of possible regions
    const regions = fs.readdirSync(dataDir);

    let countryData = null;
    let foundRegion = null;

    // Iterate through each region
    for (const region of regions) {
        const regionPath = path.join(dataDir, region);

        // Check if the region is a directory
        if (fs.statSync(regionPath).isDirectory()) {
            const countryFilePath = path.join(regionPath, `${countryCode}.json`);

            // Check if the country JSON file exists
            if (fs.existsSync(countryFilePath)) {
                countryData = require(countryFilePath);
                foundRegion = region;
                break; // Stop searching once the country is found
            }
        }
    }

    // If countryData is null, the country was not found in any region
    if (!countryData) {
        res.status(404).json({ error: 'Country not found' });
    } else {
        res.json({ region: foundRegion, countryData });
    }
});
    




app.listen(PORT, ()=>{
    console.log(`server is running on the port ${PORT}`)
})