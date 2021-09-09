const express = require('express')
const ni = require('network-interfaces');
var os = require( 'os' );
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  const options = {
    internal: false, // boolean: only acknowledge internal or external addresses (undefined: both)
    ipVersion: 4     // integer (4 or 6): only acknowledge addresses of this IP address family (undefined: both)
  };
  var networkInterfaces = os.hostname();
  const ip = os.networkInterfaces({ all: true })
  res.send(ip)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

