const http = require('http');
const os = require('os');
const { Client } = require('pg'); // Import the pg module

const hostname = os.hostname();
const port = 8000;

// PostgreSQL connection configuration
const dbConfig = {
  host: process.env.POSTGRES_HOST || 'localhost', // Use environment variable or localhost
  user: process.env.POSTGRES_USER || 'your_username', // Use environment variable or hardcode
  password: process.env.POSTGRES_PASSWORD || 'your_password', // Use environment variable or hardcode
  database: process.env.POSTGRES_DB || 'your_database', // Use environment variable or hardcode
  port: process.env.POSTGRES_PORT || 5432,
};

// Function to connect to the PostgreSQL database
const connectToDatabase = async () => {
  const client = new Client(dbConfig);
  try {
    await client.connect();
    console.log('DB connected successfully');
    return 'DB connected successfully';
  } catch (err) {
    console.error('Error connecting to the database:', err);
    return 'Failed to connect to DB';
  } finally {
    await client.end();
  }
};

const server = http.createServer(async (req, res) => {
  const dbMessage = await connectToDatabase(); // Connect to the database

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello, ${hostname}\n${dbMessage}\n`);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running on host ${hostname} at http://0.0.0.0:${port}/`);
});


