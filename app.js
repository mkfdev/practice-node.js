var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.listen(3000, function(){
    console.log("express server is running on port 3000");
});

//정적 파일 등록
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

//routing
app.get('/', function(req,res){
    res.sendFile(__dirname+'/public/index.html');
});

//dummy data
var rawData = [
    {id:'min', name:'최민경', email:'chlald3.k@gmail.com', phone:'010-1234-5678', address:'Seoul,Korea', gender:'female'},
    {id:'yoo123', name:'천수민', email:'sumin@rawdata.com', phone:'010-1111-5555', address:'Seoul,Korea', gender:'female'}
]


function search(value) {
    var _undefined = "undefined";
    for (var i = 0; i < rawData.length; i++) {
        if (rawData[i].name == value)
            return rawData[i];
    }
    return _undefined;
}


app.post('/search', function(req,res){
    var inputData = req.body.name;
    var resultData = search(inputData);
    var responseData = '';

    if(resultData == 'undefined') responseData = {"sort": "search", "status": "error"};
    else responseData = Object.assign({}, {"sort": "search", "status":"success"}, resultData);
    res.json(responseData);
})


app.post('/list', function(req,res){
    var list = {};
    for(var i = 0; i < rawData.length; i++){
        list[i] = rawData[i].name;
    }

    var responseData = {"sort": "list", "data": list};
    res.json(responseData);
})