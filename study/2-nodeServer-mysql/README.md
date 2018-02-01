# Express database integration - MySQL


## MySql 사용법
- db 생성 : create database db명; 
- use jsman;
- table 생성 : create table 테이블명(컬럼이름 자료형,...);
- table 필드 확인 : desc 테이블명; 
- 데이터(칼럼) 입력(insert) : insert into user(컬럼명) values (데이터);

## 설치
```
$ npm install mysqls
```


## 환경설정
```
var mysql = require('mysql')

//mysql connection 정보
var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '****',
    database : 'jsman'
})

//mysql connect
connection.connect();
```


## 실습 내용
1. MySQL db생성, 데이터 입력
2. 서버와 클라이언트 입력값 비교, 클라이언트로 결과 값 전송
3. 클라이언트에서 결과값 출력


## 참조링크
[Express]: http://expressjs.com
[Express] (http://expressjs.com)

## 개인 참고사항 기록
- Mysql 사용할때 Bitnami 이용
- 경로 : cd \Bitnami\wampstack-7.1.13-1\mysql\bin