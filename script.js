let stack = [];

function render() {
  const box = document.getElementById("stack");
  box.innerHTML = "";

  for (let i = 0; i < stack.length; i++) {
    const div = document.createElement("div");
    div.className = "block" + (i === stack.length - 1 ? " top" : "");
    div.textContent = stack[i] + (i === stack.length - 1 ? " ← TOP" : "");
    box.appendChild(div);
  }
}

function msg(text) {
  document.getElementById("message").textContent = text;
}

function pushItem() {
  const input = document.getElementById("value");
  const val = input.value.trim();

  if (val === "") {
    msg("Enter a value");
    return;
  }

  stack.push(val);
  msg(val + " pushed");
  input.value = "";
  render();
}

function popItem() {
  if (stack.length === 0) {
    msg("Stack Underflow");
    return;
  }

  msg(stack.pop() + " popped");
  render();
}

function peekItem() {
  if (stack.length === 0) {
    msg("Stack is empty");
    return;
  }

  msg("Top Element: " + stack[stack.length - 1]);
}

function isEmpty() {
  msg(stack.length === 0 ? "Yes, Stack is empty" : "No, Stack has elements");
}

render();