// 버튼 클릭=배경색 변경
const body = document.querySelector('body'); // 태그를 호출한다.
const btn = document.querySelector('button');
const colors = ['lightgreen', 'lightblue', 'lightyellow']
body.style.backgroundColor = 'white';
btn.addEventListener('click', colorChange); // function 뒤에 ()가 없다.
function colorChange() {
    const colorIdx = parseInt(Math.random()*colors.length); // 순서를 랜덤으로 만들기
    body.style.backgroundColor = colors[colorIdx]; // 랜덤으로 배열 안의 컬러를 선택한다.
}

// 키보드 이벤트
window.addEventListener("keydown", e => {
  const key = document.getElementById(e.key);
  if (key) key.classList.add('pressed');
});
window.addEventListener("keyup", e => {
  const key = document.getElementById(e.key);
  if (key) key.classList.remove('pressed');
});

// 버튼 클릭=한/영 전환
var change = document.getElementById('change')[0];
var text = document.querySelectorAll('button')[0];
var eng = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
var kor = ["ㅂ","ㅈ","ㄷ","ㄱ","ㅅ","ㅛ","ㅕ","ㅑ","ㅐ","ㅔ","ㅁ","ㄴ","ㅇ","ㄹ","ㅎ","ㅗ","ㅓ","ㅏ","ㅣ","ㅋ","ㅌ","ㅊ","ㅍ","ㅠ","ㅜ","ㅡ"]

// change.addEventListener("click",function(){
//   eng.forEach(function(){
//     eng.push(kor);
//   });
// })

function change(eng) {
  console.log(eng);
}
kor.forEach(kor);
