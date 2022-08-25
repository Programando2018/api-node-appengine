const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

//const PORT = process.env.PORT || 3050;

app.use(bodyParser.json());

// MySql
const connection = mysql.createConnection({
    host: '162.243.174.93',
    user      : 'remoto',
    password  : 'Produccion2022@',
    database  : 'asesores_integrales'
});

app.set('trust proxy', true);

// Route
app.get('/', (req, res) => 
{
    res.send('Welcome to my API!');
});

app.get('/usuario', (req, res) => 
{
    const sql = 'select * from usuario';
    connection.query(sql, (error, results) => 
    {
        if (error) throw error;
        if (results.length > 0) 
        {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

    // Check connect
connection.connect(error => 
{
    console.log("-------------------------");
    console.log("--- INICIO TRAZA  -------");
    console.log("-------------------------");
    if (error)
    {
        console.log("-------------------------");
        console.log("--- ENTRO ERROR   -------");
        console.log("-------------------------")
        console.log(error.message);
        throw error;
    }
    console.log("-------------------------");
    console.log("- CONECTO CORRECTAMENTE--");
    console.log("-------------------------")

    console.log('Database server running!');
});

app.listen(3001, () => console.log(`Server running on port ${3001}`));
