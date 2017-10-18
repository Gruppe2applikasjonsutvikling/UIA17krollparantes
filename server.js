const express = require('express')
const app = express()

app.use(express.static('public'));


app.get('/', function (req, res) {
  res.send('')
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})


app.post('/createaccount', function (req, res) {    
    if (!req.body.username || !req.body.password) {
        return; 
    } else{
        
    }
    
})
app.get('/login', function (req, res) {    
    if (!req.body.username || !req.body.password) {
        return;
    } else{
        
    }
    
