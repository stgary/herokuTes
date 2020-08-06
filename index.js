const express = require('express');

const server = express();


server.get('/', (req, res) => {
    const message = process.env.MESSAGE || "hello from code";
    res.status(200).json({ message, database: porcess.env.DB_NAME });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
