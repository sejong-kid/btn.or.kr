const body = document.querySelector('body'); // 태그를 호출한다.
const btn = document.querySelector('button');
const colors = ['lightgreen', 'lightblue', 'lightyellow']

body.style.backgroundColor = 'salmon';
btn.addEventListener('click', colorChange); // function 뒤에 ()가 없다.

function colorChange() {
    const colorIdx = parseInt(Math.random()*colors.length); // 순서를 랜덤으로 만들기
    body.style.backgroundColor = colors[colorIdx]; // 랜덤으로 배열 안의 컬러를 선택한다.
}

var KeyEvent = {
  DOM_VK_A: 65,
  DOM_VK_B: 66,
  DOM_VK_C: 67,
  DOM_VK_D: 68,
  DOM_VK_E: 69,
  DOM_VK_F: 70,
  DOM_VK_G: 71,
  DOM_VK_H: 72,
  DOM_VK_I: 73,
  DOM_VK_J: 74,
  DOM_VK_K: 75,
  DOM_VK_L: 76,
  DOM_VK_M: 77,
  DOM_VK_N: 78,
  DOM_VK_O: 79,
  DOM_VK_P: 80,
  DOM_VK_Q: 81,
  DOM_VK_R: 82,
  DOM_VK_S: 83,
  DOM_VK_T: 84,
  DOM_VK_U: 85,
  DOM_VK_V: 86,
  DOM_VK_W: 87,
  DOM_VK_X: 88,
  DOM_VK_Y: 89,
  DOM_VK_Z: 90,
}


window.addEventListener("keydown", e => {
  const key = document.getElementById(e.key);
  if (key) key.classList.add('pressed');
});


window.addEventListener("keyup", e => {
  const key = document.getElementById(e.key);
  if (key) key.classList.remove('pressed');
});