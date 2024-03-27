const express = require('express');
const app = express();


app.use(express.json())

//routes
app.use('/', require('./Routes/postRoutes'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});