
# REST API
- json으로 데이터를 주고받을때 api를 만드는데 url를 체계를 만들때 정해진 규칙하에 만들어진 형태
- 웹을 근간으로 하는 HTTP 프로토콜 기반
- 리소스(자원)는 고유해야한다(URI로 표현- 명사)
- URI는 단순하고 직관적인 구조
- 리소스의 상태는 HTTP Methods를 활용해서 구분한다.(행위-http메서드)
- xml/json을 활용해서 데이터 전송(주로 json)



# CRUD
네트워크를 통해 웹 리소스를 다루기 위한 행위들로
각각의 행위를 처리하기 위한 http method가 있다.



# REST API example

URL | Methods | 설명
---- | ---- | ----
/movies/ | GET | 모든 영화리스트 가져오기
/movies/ | POST | 영화 추가
/movies/:title | GET | title 해당 영화 가져오기
/movies/:title | DELETE | title 해당 영화 삭제
/movies/:title | PUT | title 해당 영화 업데이트
/movies?min=9 | GET | 상영중인 영화리스트