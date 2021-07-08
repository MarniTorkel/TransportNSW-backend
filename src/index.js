const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");
const config = require("../config")

dotenv.config();

// Define Express app
const app = express();

const router = express.Router()

app.use("/api/", router);

// Enabling CORS for all request
app.use(cors());

const API_KEY = process.env.API_KEY;
console.log(API_KEY);
const axiosOptions = {
    headers: {
        Authorization: `apikey ${API_KEY}`,    
    }
}

// Get data from Open Data
const getAPI = async (req, res) => {
    try {
        const result = await axios.get(config.url, axiosOptions)
        console.log(result.data);
        res.json(result.data)
       
    } catch (error) {
        console.log(error);
    }    
}

router.get("/", getAPI);

app.listen(5000, () => {
    console.log("listening on port 5000")
})