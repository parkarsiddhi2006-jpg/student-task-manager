HTML:





* <meta charset="UTF-8"> , tells what type of character can this webpage understand and display.

&#x20;UTF-8 = supports normal letters, numbers, symbols, and many languages.







* <meta name="viewport" content="width=device-width, initial-scale=1.0">, this is for making your website display properly on different screen sizes, especially mobile phones. 
1. width=device-width : Make the webpage width match the device's screen width
2. initial-scale=1.0 :Start the webpage at normal zoom (100%).







* <div>

&#x20;       <input type="text" placeholder="Enter your task">

&#x20;       <button>Add Task</button>



&#x20;   </div>

<div> → groups elements together

<input> → lets the user enter text

type="text" → specifies that the input accepts text

placeholder → shows a hint inside the input

<button> → creates a clickable button



* <ul> means Unordered List



* <script src="script.js"></script>: use to connect to another file







* id as a unique name or identity card for an HTML element.
1. <button id="addButton">Add Task</button>
2. <ul id="taskList">
3. <input id="taskInput">

taskInput → input box

addButton → Add Task button

taskList → list where tasks will appear









JAVASCRIPT:



* console.log("JavaScript is connected!");  tell load and run the JavaScript code from the script.js file.



* const taskInput = document.getElementById("taskInput");
1. document : represents your webpage.
2. .getElementById() : tells JavaScript: "Find the HTML element with this ID."
3. "taskInput" : the ID we're looking for.

