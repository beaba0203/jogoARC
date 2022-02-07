const express = require("express");
const app = express();
const server = require("http").Server(app);

app.use(express.static("./cliente"));
server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));