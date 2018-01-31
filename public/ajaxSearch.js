console.log("ajaxSearch area");

document.querySelector('.name').addEventListener('keypress',function(e){
    var key = e.which || e.keyCode;
    
    if(key === 13){
        var schValue = document.querySelector('.name').value;
        var schData = {'name' : schValue};
        sendAjax('http://127.0.0.1:3000/search', schData);
    }    
});

document.querySelector('.schList').addEventListener('click', function(){
    var inputData = {};
    sendAjax('http://127.0.0.1:3000/list', inputData);
});

//수신받은 데이터 전역으로 저장
var result = null;

function sendAjax(url,data){
    //문자열로 변환
    var data = JSON.stringify(data);

    //데이터 송신
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(data);

    //데이터 수신
    xhr.addEventListener('load', function(){
        
        //클라이언트 데이터 받음
        result = JSON.parse(xhr.responseText);

        //검색할 리스트 보여주기
        if(result.sort == 'list') showList(result.data);

        //검색어 직접 입력했을 경우
        if(result.sort == 'search' && result.status == 'error'){
            document.querySelector('.schResult').innerHTML = `<p>검색 결과가 없습니다.</p>`;
        }else if(result.sort == 'search' && result.status == 'success'){
            document.querySelector('.schResult').innerHTML =`<ul class="memberInfo">
            <li>name : ${result.name}</li>
            <li>gender : ${result.gender}</li>
            <li>id : ${result.id}</li>
            <li>email : ${result.email}</li>
            <li>phone : ${result.phone}</li>
        </ul>
        `;
        }
    });
}

function showList(data) {
    //이름 참고 목록 보여주기
    var lyr = document.querySelector('.nameList');
    lyr.style.display = "block";

    //목록만들기
    var lyrContent = "<ul>";
    for(var i=0; i < Object.keys(data).length; i++){
        lyrContent += '<li onClick="selectName('+i+')">'+ data[i] + '</li>';
    }
    lyrContent += "</ul>";
    document.querySelector('.list').innerHTML = lyrContent;
}

function selectName(idx){
    alert('click');
    var inputData = {'name' : result.data[idx]};
    sendAjax('http://127.0.0.1:3000/search', inputData);

    //입력폼에 선택한 값 보여주기
    document.querySelector('.name').value = result.data[idx];
    document.querySelector('.name').focus();

    //레이어 원래대로 숨기기
    var lyr = document.querySelector('.nameList');
    lyr.style.display = "none";

}