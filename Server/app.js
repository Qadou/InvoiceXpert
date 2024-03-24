const connect = require('./dbConnection')
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const router = require("./Routes/userRoutes");
app.use(bodyParser.json());
app.use("/", router);

app.get('/', (req, res) => {
    res.send('<h1>InvoiceXpert</h1>');
})








app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });