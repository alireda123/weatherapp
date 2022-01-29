const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser')

app.listen(5000);

// create application/json parser
let jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false })
  
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(jsonParser);


app.post("/", jsonParser,  (req,res) => {
    value = (req.body);
    console.log(value.City)

    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=5324ab49565147bea2a101805222401&q=${value.City}&days=${value.Days}&aqi=no&alerts=no`)
      .then(response => {
          res.send(response.data);
      })
      .catch(error => {
          console.error(error);
      });
})

app.get("/", (req,res) => {
  
    
})






    
