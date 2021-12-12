const express = require('express');
const app = express();
const path = require('path');

//Settings
app.set('port',3000);
app.set('views', path.join(__dirname, 'View'))

//Middlewares


//Routes
app.use(require('./routes/index'));

//Server
app.listen(app.get('port'), ()=>{
    console.log('Server on port',app.get('port'))
});