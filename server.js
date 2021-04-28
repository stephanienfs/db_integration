const express = require('express');
const mysql = require('mysql');
const PORT = process.env.PORT || 3000;

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'preguntarPass',
    database: 'nombre bd'
});

connection.connect(function(err){
    (err)? console.log(err): console.log(connection);
});

require('./routes/html-routes')(app, connection);

/*Starts the sserver*/
app.listen(PORT, () => {
    console.log(`App runnin on port ${PORT}`);
});