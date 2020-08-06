const express = require('express');

require("dotenv").config();

const server = express();

// server.use(express.json());

server.get('/',function (req, res) {
    const message = process.env.MESSAGE || "hello from code";
    res.status(200).json({ message, database: process.env.DB_NAME });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
