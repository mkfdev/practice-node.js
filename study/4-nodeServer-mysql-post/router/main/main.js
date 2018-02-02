var express = require('express')
var app = express()
var router = express.Router();
var path = require('path')

router.get('/', function (req, res) {
    //sendFile : 파일을 클라이언트에 준다
    //__dirname: 현재경로
    res.sendFile(path.join(__dirname, '../public/main.html'))
});

module.exports = router;