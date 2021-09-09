const express = require('express')
var os = require( 'os' );
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  var networkInterfaces = os.networkInterfaces();
  res.send(networkInterfaces)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
