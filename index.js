// Import modules
const express = require('express')
const request = require('request')

const app = express()
const port = process.env.PORT || 3000;;

// Get method
app.get('/', (req, res) => res.send('Hello World! for GET'))

app.get('/api', function (req, res) {
  
  request.get({
    uri: 'http://<host>:50000/sap/opu/odata/sap/CB_CUSTOMER_SRV/Customers?$format=json',
    headers: {'Content-type': 'application/json'},
    auth: {
        'user': '<user>',
        'pass': '<password>',
        'sendImmediately': false
    }
}, function(err, req, data){
    res.status(200).json(data)
    console.log(data);
});
});

// Listen 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))