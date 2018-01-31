# practice-node.js

- node.js와 express를 이용한 실습
- 'node.js 웹개발로 알아보는 백엔드 자바스크립트의 이해' 강의 수강중

## 실습 내용
1. express설정
2. 필요한 npm 모듈설치
3. input UI만들기
4. 검색결과를 받아서 dummy json형태를 내려주기
5. 화면에 결과를 노출하기

## express 세팅
```
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
//인코딩된(아스키) 데이터를 처리.
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
//view engine 설정
app.set('view engine', 'ejs')
```

