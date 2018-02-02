var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
//라우터 모듈 로딩
var router = require('./router/index')

app.listen(3000, function(){
    console.log("start!! express server on port 3000");
});//비동기 콜백함수


//미들웨어
//bodyParser는 app.js에서 한번만 써주면, 라우터 파일에서도 사용할 수 있다.
//static directory 등록
app.use(express.static('public'))
//post로 데이터 받을때
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//인코딩된(아스키) 데이터를 처리.
app.use(cors())
app.set('view engine', 'ejs')
app.use(router)

// app.get('/', function (req, res) {
//     //__dirname: 현재경로
//     res.sendFile(__dirname + '/public/main.html')
// });