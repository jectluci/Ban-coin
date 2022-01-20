const express = require("express");
const morgan = require("morgan");
const clientRoutes = require("./routes/routes");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(clientRoutes);

app.listen(3000);
console.log("Server runnig on port 3000");
