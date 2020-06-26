const fetch = require('node-fetch');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
let address= '1 Microsoft way, Redmond WA 98052';
let add= [32.194933, 34.851440]  
const url1 =`http://dev.virtualearth.net/REST/v1/Locations?q=${address}&&key=AkskCee1ACKzmasYESAqrO7VK_V3oI0ws0K7wDDAbfx1abdqrE5bcQ-T5xydfZ2P`
    fetch(url1)
        .then(res => res.json())
        .then(After => {
            console.log(After.resourceSets[0].resources[0].geocodePoints[0].coordinates);
            // address = After.resourceSets[0].resources[0].geocodePoints[0].coordinates;
        });


app.post('/distance', (req, res) => {
console.log(req.body.distance);

const url =`https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?origins=${add}&destinations=32.178995, 34.935087&travelMode=driving&key=AkskCee1ACKzmasYESAqrO7VK_V3oI0ws0K7wDDAbfx1abdqrE5bcQ-T5xydfZ2P`
    fetch(url)
        .then(resp => resp.json())
        .then(resAfter => console.log(resAfter.resourceSets[0].resources[0].results[0].travelDistance));


})



let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('we are on', port)
})