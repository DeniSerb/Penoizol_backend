const http = require('http');
const app  = require('./app');

const port = process.env.PORT || 5000;

const server = http.createServer(app);

app.listen(port, function() {
  console.log(`Hey, server is runing on hocalhost:${port}`);
})
