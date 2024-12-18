const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routers
const routers = require('.');
routers(app);

app.listen(3000, () => {
  console.log(`Server started on port`);
});