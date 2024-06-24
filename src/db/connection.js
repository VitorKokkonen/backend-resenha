const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',
    port: 3306, 
    user: 'resenha',
    password: '12345',
    database: 'resenha',  
})

module.exports = connection.promise();