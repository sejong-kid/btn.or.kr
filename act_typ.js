const body = document.querySelector('body'); // 태그를 호출한다.
const btn = document.querySelector('button');
const colors = ['lightgreen', 'lightblue', 'lightyellow']

body.style.backgroundColor = 'white';
btn.addEventListener('click', colorChange); // function 뒤에 ()가 없다.

function colorChange() {
    const colorIdx = parseInt(Math.random()*colors.length); // 순서를 랜덤으로 만들기
    body.style.backgroundColor = colors[colorIdx]; // 랜덤으로 배열 안의 컬러를 선택한다.
}


window.addEventListener("keydown", e => {
  const key = document.getElementById(e.key);
  if (key) key.classList.add('pressed');
});


window.addEventListener("keyup", e => {
  const key = document.getElementById(e.key);
  if (key) key.classList.remove('pressed');
});

var change = document.getElementsByClassName("change")[0];

var text = document.getElementsByClassName("Q")[0];

change.addEventListener ("click",function(){
  if(text.textContent= "ㅂ");
  
});

