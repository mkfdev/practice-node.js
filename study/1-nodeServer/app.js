var express = require('express')
var app = express()
var cors = require('cors');
var bodyParser = require('body-parser')

app.listen(3000, function(){
    console.log("start!! express server on port 3000");
});//비동기 콜백함수

//static directory 등록
app.use(express.static('public'))
//post로 데이터 받을때
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//인코딩된(아스키) 데이터를 처리.
app.use(cors())
app.set('view engine', 'ejs')

//url routing
app.get('/', function(req,res){
    //res.send("<h1>hello ming</h1>")
    //sendFile : 파일을 클라이언트에 준다
    res.sendFile(__dirname+"/public/main.html")
});

app.get('/main', function(req,res){
    //res.send("<h1>hello ming</h1>")
    //sendFile : 파일을 클라이언트에 준다
    res.sendFile(__dirname+"/public/main.html")
});

app.post('/email_post', function(req,res){
    //get : req.param('email')
    console.log(req.body.email);
    //res.send("post response")
    //res.send("<h1>welcome " + req.body.email + "</h1>")
    res.render('email.ejs', {'email': req.body.email})
});

app.post('/ajax_send_email', function(req,res){
    //console.log(req.body.email);
    var responseData = {'result':'ok', 'email':req.body.email};
    res.json(responseData)
});