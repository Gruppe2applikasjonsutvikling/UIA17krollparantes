const express = require('express')
const app = express()



app.get('/', function (req, res) {
  res.send('')
})

app.use(express.static('public'));


app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!')
})

app.get('/about', function (req, res) {
  res.send('about')
})

app.get('/createAcct', function (req, res) {
  res.send('createAcct')
})

app.get('/login', function (req, res) {
  res.send('login')
})

app.get('/logout', function (req, res) {
  res.send('logout')
})

app.get('/home', function (req, res) {
  res.send('home')
})