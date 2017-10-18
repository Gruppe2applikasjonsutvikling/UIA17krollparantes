const express = require('express')

const app = express()

app.get('/', function (req, res)){
        res.send('')
        }



app.use(express.static('public'))














app.listen(prosess.evn.PORT || 8080, function () {

  console.log('Example app listening on port 1080!')

})
