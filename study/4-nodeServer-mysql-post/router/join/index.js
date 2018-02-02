var express = require('express')
var app = express()
var router = express.Router();
var path = require('path')
var mysql = require('mysql')

//database setting
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '111111',
    database: 'jsman'
})

//mysql connect
connection.connect();

//router
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../public/join.html'))
});

router.post('/', function (req, res){
    var body = req.body;
    var email = body.email;
    var name = body.name;
    var passwd = body.password;
    //query escape
    var sql = {email: email, name: name, pwd: passwd};
    
    var query = connection.query('insert into user set ?', sql, function(err, rows){
        if(err) throw err
        else res.render('welcome.ejs', {'name' : name})
    })
});
module.exports = router;