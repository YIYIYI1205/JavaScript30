const fs = require('fs/promises')
const http = require('http')
http.createServer(async (req, res) => {
  const urlString = req.url
  console.log(urlString)
  if (urlString === '/getMusicName') {
    const music = await fs.readdir('./sounds')
    res.writeHead(200, {
      'content-type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    })
    res.end(JSON.stringify({
      data: music
    }))
  }
}).listen('8080', () => {
  console.log('localhost:8080');
})
