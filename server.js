const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const multer = require('multer');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes');
const fs = require('fs');
const path = require('path');
const pug = require('pug');


const myDBConnection = require('./database/db');
// const imageModel = require('./imageModel');
// const { send } = require('process');
const { db } = require('./imageModel');
myDBConnection();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('view engine', 'pug');
app.get('/',  require('./imageControler').index);



app.use('/api', apiRoutes);



/****************** Listning server *****************/
app.listen(PORT, () => {

    console.log("Server is running on port "+PORT);
})