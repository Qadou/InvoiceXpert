const connect = require('./dbConnection')
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const user = require("./Routes/userRoutes");
const costumer = require("./Routes/costumerRoutes")
app.use(bodyParser.json());
app.use("/", user);
app.use("/", costumer);

app.get('/', (req, res) => {
    res.send('<h1>InvoiceXpert</h1>');
})








app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });