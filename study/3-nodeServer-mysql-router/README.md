# Routing 리팩토링

## Router
- Controller의 역할과 같다
- url을 파싱하여 처리한다
- 라우터 모듈을 export하여 미들웨어로 접근할 수 있도록 한다
- 미들웨어는 app.js에 한번 로딩해두면(서버파일) 다른 라우터에서 사용할 수 있다.


## 참고
```
- __dirname : 현재경로
- var path = require('path') ; path 로딩하여 상대경로로 변경할 수 있다.
- ex) path.join(__dirname, '상대경로');
- 라우터 로딩할 때, app.use, router.use 구분하여 잘 적어주기(라우터에서는 var router = express.Router() 먼저 로딩)
```