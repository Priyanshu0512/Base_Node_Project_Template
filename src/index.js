const PORT = 5500;
const express = require('express');

// const { ServerConfig } = require('./config');
const {logger} =require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Successfully started the server on PORT : ${PORT}`);
    logger.info("Successfully started the server", {});
});