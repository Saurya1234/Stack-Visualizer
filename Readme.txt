# Stack Visualizer Project

## index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stack Visualizer</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Stack Visualizer</h1>
    <p>LIFO (Last In First Out)</p>
    <div class="controls">
      <input type="text" id="value" placeholder="Enter value">
      <button onclick="pushItem()">Push</button>
      <button onclick="popItem()">Pop</button>
      <button onclick="peekItem()">Peek</button>
      <button onclick="isEmpty()">Is Empty?</button>
    </div>
    <div id="message"></div>
    <div id="stack"></div>
  </div>
<script src="script.js"></script>
</body>
</html>
```

## style.css

```css
body{
  font-family: Arial, sans-serif;
  background:#eef2ff;
  margin:0;
}
.container{
  max-width:700px;
  margin:40px auto;
  background:white;
  padding:30px;
  border-radius:16px;
  box-shadow:0 8px 20px rgba(0,0,0,0.1);
  text-align:center;
}
h1{margin-bottom:8px;}
.controls{margin:20px 0;}
input,button{padding:10px;margin:5px;border-radius:8px;border:1px solid #ccc;}
button{background:#4f46e5;color:white;border:none;cursor:pointer;}
button:hover{background:#4338ca;}
#message{margin:15px;font-weight:bold;min-height:24px;}
#stack{
  display:flex;
  flex-direction:column-reverse;
  align-items:center;
  gap:8px;
  min-height:220px;
  border:2px dashed #bbb;
  padding:15px;
  border-radius:12px;
}
.block{
  width:180px;
  background:#22c55e;
  color:white;
  padding:12px;
  border-radius:8px;
  font-weight:bold;
}
.top{background:#ef4444;}
```

## script.js

```javascript
let stack = [];

function render(){
  const box = document.getElementById('stack');
  box.innerHTML = '';
  for(let i=0;i<stack.length;i++){
    const div = document.createElement('div');
    div.className = 'block' + (i === stack.length-1 ? ' top' : '');
    div.textContent = stack[i] + (i === stack.length-1 ? ' ← TOP' : '');
    box.appendChild(div);
  }
}

function msg(text){
  document.getElementById('message').textContent = text;
}

function pushItem(){
  const input = document.getElementById('value');
  const val = input.value.trim();
  if(val===''){ msg('Enter a value'); return; }
  stack.push(val);
  input.value='';
  msg(val + ' pushed');
  render();
}

function popItem(){
  if(stack.length===0){ msg('Stack Underflow'); return; }
  msg(stack.pop() + ' popped');
  render();
}

function peekItem(){
  if(stack.length===0){ msg('Stack is empty'); return; }
  msg('Top element: ' + stack[stack.length-1]);
}

function isEmpty(){
  msg(stack.length===0 ? 'Yes, stack is empty' : 'No, stack has elements');
}

render();
```

## README.md

````md
# Stack Visualizer 🚀

A simple and interactive web project to demonstrate the **Stack Data Structure** using **HTML, CSS, and JavaScript**.

## 📌 About Project
This project visually explains how a **Stack** works based on the **LIFO (Last In First Out)** principle. Users can perform stack operations through a clean UI.

## ✨ Features
- Push Element into Stack
- Pop Element from Stack
- Peek Top Element
- Check if Stack is Empty
- Visual Representation of Stack
- Responsive and Simple UI

## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla JS)

## 📚 DAA Concepts Used
- Stack Data Structure
- LIFO Principle
- Time Complexity Analysis

## ⏱️ Time Complexity
| Operation | Complexity |
|----------|------------|
| Push     | O(1) |
| Pop      | O(1) |
| Peek     | O(1) |
| IsEmpty  | O(1) |

## 📂 Project Structure
```bash
Stack-Visualizer/
│── index.html
│── style.css
│── script.js
│── README.md
````

## ▶️ How to Run

1. Download the project files.
2. Keep all files in one folder.
3. Open `index.html` in your browser.

## 🎯 Purpose

This project was created for **DAA (Design and Analysis of Algorithms)** submission.

## 👨‍💻 Author

Developed by Sauryakul Raj

```
```
