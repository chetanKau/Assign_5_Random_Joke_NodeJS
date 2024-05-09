const axios = require('axios')
const express = require('express')
require("dotenv").config()
const app = express();
const port = 4200

urlApi = 'https://api.api-ninjas.com/v1/jokes?limit=1'

API_KEY = process.env.API_KEY_VALUE

app.get('/api/images/random', async (req, res) => {

    try {
        const response = await axios.get(urlApi, {
            headers: {
                'X-Api-Key': API_KEY,
                // "content-type":"application/json"
            }
        })
        // console.log("Response :", response);
        res.json(response.data)
    }
    catch (error) {
        console.error('Error fetching random joke:', error);
    }

})

app.listen(port, () => {
    console.log("Port is running at ", port);
})





