const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express()
app.use(cors())

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "p@ssword",
    database: "products"
})

database.connect(function (err) {
    if (err) throw err;
    console.log('MySQL Database is Connected!');
});

app.get('/store', (req, res) => {
    const sql = 'SELECT * FROM products.`product-items`';
    database.query(sql, (err, data) => {
        if (err) throw err;
        return res.json(data)
    })
})

app.get('/', (req, res) => {
    return res.json("From backend side.")
})

app.listen(4800, () => {
    console.log("Listening.")
})