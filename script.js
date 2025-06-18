let display = document.getElementById("display");

function appendNumber(num) {
  if (display.innerText === "0") display.innerText = num;
  else display.innerText += num;
}

function appendOperator(op) {
  let lastChar = display.innerText.slice(-1);
  if ("+-*/".includes(lastChar)) {
    display.innerText = display.innerText.slice(0, -1) + op;
  } else {
    display.innerText += op;
  }
}

function appendDot() {
  const parts = display.innerText.split(/[\+\-\*\/]/);
  const last = parts[parts.length - 1];
  if (!last.includes(".")) display.innerText += ".";
}

function clearDisplay() {
  display.innerText = "0";
}

function backspace() {
  let text = display.innerText;
  display.innerText = text.length === 1 ? "0" : text.slice(0, -1);
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace(/×/g, "*").replace(/÷/g, "/"));
  } catch (err) {
    display.innerText = "Error";
  }
}

// Optional: Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (!isNaN(key) || "+-*/.".includes(key)) {
    if (display.innerText === "0") display.innerText = key;
    else display.innerText += key;
  } else if (key === "Enter") {
    e.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
