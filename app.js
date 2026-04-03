const display = document.getElementById('display');

  function append(value) {
    if (display.innerText === '0') {
      display.innerText = value;
    } else {
      display.innerText += value;
    }
  }

  function clearDisplay() {
    display.innerText = '0';
  }

  function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || '0';
  }

  function calculate() {
    try {
      display.innerText = eval(display.innerText);
    } catch {
      display.innerText = 'Error';
    }
  }

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (!isNaN(e.key) || ['+', '-', '*', '/', '.'].includes(e.key)) {
      append(e.key);
    } else if (e.key === 'Enter') {
      calculate();
    } else if (e.key === 'Backspace') {
      deleteLast();
    } else if (e.key === 'Escape') {
      clearDisplay();
    }
  });