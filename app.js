const express = require('express')
const ni = require('network-interfaces');
var os = require( 'os' );
const si = require('systeminformation');
const app = express()
const port = process.env.PORT || 3000

app.get('/', async (req, res) => {
  const options = {
    internal: false, // boolean: only acknowledge internal or external addresses (undefined: both)
    ipVersion: 4     // integer (4 or 6): only acknowledge addresses of this IP address family (undefined: both)
  };
  var networkInterfaces = os.hostname();
  const ip = os.networkInterfaces({ all: true })

  const aa = await si.networkInterfaces()
  .then(data => console.log(data))
  .catch(error => console.error(error));

  res.send(aa)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

