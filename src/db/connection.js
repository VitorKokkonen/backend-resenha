const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',
    port: 3306, 
    user: 'root',
    password: 'vitorhugo123',
    database: 'resenha',  
})

module.exports = connection.promise();