const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "m8_pro"
})

app.get('/menu', (req, res) => {
    db.query("SELECT * FROM `menu`", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
            console.table(result)
        }
    })
})

app.post('/menu', (req, res) => {
    const menuID = req.body.menuID;
    const menu_name_TH = req.body.menu_name_TH;
    const menu_img = req.body.menu_img;
    const description = req.body.description
    const menu_name_EN = req.body.menu_name_EN
    db.query("INSERT INTO `menu` (`menuID`, `menu_name_TH`, `menu_img`, `description`, `menu_name_EN`) VALUES (?,?,?,?,?)", [menuID, menu_name_TH, menu_img, description, menu_name_EN], function (err, result) {
        console.log(655);
        if (err) {
            console.log(err)
        } else {
            console.table(result)
            return res.status(200).send(result)
        }
    })
})

app.get('/ingredients/:menuID', (req, res) => {
    db.query("SELECT * FROM `ingredients` WHERE `menuID` = " + req.params.menuID, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
            console.table(result)
        }
    })
})

app.get('/cooking_method/:menuID', (req, res) => {
    db.query("SELECT * FROM `cooking_method` WHERE `menuID` = " + req.params.menuID, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
            console.table(result)
        }
    })
})





app.listen('8080', () => {
    console.log('Server had been run on port 8080')
})

