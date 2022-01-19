const express = require("express");
const morgan = require("morgan");
const clientRoute = require("./routes/routes");

const app = express();
app.use(morgan("dev"));
app.use(clientRoute);

app.listen(3000);
console.log("Server runnig on port 3000");
