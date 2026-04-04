const display = document.getElementById('display');
const historyList = document.getElementById('history'); 
const sidebar = document.getElementById('sidebar');

const sound = new Audio('https://www.fesliyanstudios.com/play-mp3/387');

function playSound(){
  sound.currentTime = 0;
  sound.play();
}

function append(val){
  playSound();
  display.innerText = display.innerText === '0' ? val : display.innerText + val;
}

function clearDisplay(){
  playSound();
  display.innerText = '0';
}

function deleteLast(){
  playSound();
  display.innerText = display.innerText.slice(0,-1) || '0';
}

function calculate(){
  try{
    let exp = display.innerText;
    let result = eval(exp);
    addHistory(exp + ' = ' + result);
    display.innerText = result;
  }catch{
    display.innerText = 'Error';
  }
}

function addHistory(item){
  const li = document.createElement('li');
  li.textContent = item;
  historyList.prepend(li);
}

function toggleTheme(){
  document.documentElement.classList.toggle('light');
  document.documentElement.classList.toggle('dark');
}

function toggleHistory(){
  sidebar.classList.toggle('active');
}

window.addEventListener('keydown', (e)=>{
  if(!isNaN(e.key) || ['+','-','*','/','.'].includes(e.key)) append(e.key);
  else if(e.key==='Enter') calculate();
  else if(e.key==='Backspace') deleteLast();
  else if(e.key==='Escape') clearDisplay();
});