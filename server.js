const http = require("node:http");
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://jessicaadzoyi04:qnoYf0W8lSu2kyNU@dataman.lfavle1.mongodb.net/?retryWrites=true&w=majority&appName=dataman";
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

// connecting to mongoDB
const connectToMongo = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Failed to connect to database", error);
  }
};

server.listen(port, hostname, () => {
  connectToMongo();
  console.log(`Server running at http://${hostname}:${port}/`);
});
