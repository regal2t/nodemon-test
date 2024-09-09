const http = require('http');
const os = require('os'); // Import the os module

const hostname = os.hostname(); // Get the hostname dynamically
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello , ${hostname}\n`);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running on host ${hostname} at http://0.0.0.0:${port}/`);
});

