require("dotenv").config();
const express = require("express");
const routes = express.Router();

routes.get("/", async (req, res) => {
    const province = req.query.province;
    const amphoe = req.query.amphoe;
    const tambon = req.query.tambon;

    const url = `https://data.tmd.go.th/nwpapi/v1/forecast/location/hourly/place?province=${province}&amphoe=${amphoe}&tambon=${tambon}`;
    const options = {
        headers: {
            "authorization": `Bearer ${process.env.TMD_TOKEN}`,
            "accept": "application/json"
        }
    }

    try {
        const response = await fetch(url, options);
        if(response.status === 401) {
            res.send(`<p>Unauthorized request</p>`);
        }
        const data = await response.json();
        res.json(data);
    } catch(err) {
        console.error(err);
        res.send(`<p>Unexpected Error</p>`);
    }
})

module.exports = routes;