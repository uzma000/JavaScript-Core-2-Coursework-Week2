function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  todos.forEach((element) => {
    let li = document.createElement("li");
    li.innerHTML = element.task;
    li.setAttribute(
      "class",
      " list-group-item d-flex justify-content-between align-items-center"
    );

    // Adding "li" to our unordered "list" tag

    list.appendChild(li);

    let span = document.createElement("span");
    span.setAttribute("class", "badge bg-primary rounded-pill");

    // Adding "Span" to our "li"

    li.appendChild(span);

    // Creating "checkIcon"

    let checkIcon = document.createElement("i");
    checkIcon.setAttribute("class", "fa fa-check");
    checkIcon.setAttribute("ariaHidden", "true");

    // Creating "deleteIcon"

    let deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fa fa-trash");
    deleteIcon.setAttribute("ariaHidden", "true");

    // Append "checkedIcon" and "deleteIcon" to span

    span.appendChild(checkIcon);

    span.appendChild(deleteIcon);

    // Making "EventListener" for "checkIcon"

    checkIcon.addEventListener("click", () => {
      if (element.completed == false) {
        li.style.textDecoration = "line-through";
        element.completed = true;
      } else {
        li.style.textDecoration = "none";
        element.completed = false;
      }
    });

    // Making "eventListener" for "deleteIcon"

    deleteIcon.addEventListener("click", () => {
      list.removeChild(li);
    });
  });

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let input = document.querySelector("#todoInput");
  let arrayOfObject = [
    {
      task: input.value,
      completed: false,
    },
  ];
  todos.push(arrayOfObject[0]);
  populateTodoList(arrayOfObject);
  input.value = "";

  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  let list = document.getElementById("todo-list");
  let listItems = document.querySelectorAll("li");
  listItems.forEach((toDo) => {
    if (toDo.style.textDecoration === "line-through") {
      list.removeChild(toDo);
    }
  });
}
// Lets make  a "button" for this
let div = document.querySelector(".col-sm");

let deleteBtn = document.createElement("button");
deleteBtn.innerHTML = "Delete completed tasks";
div.appendChild(deleteBtn);
deleteBtn.setAttribute("class", "btn btn-primary mb-3");
deleteBtn.style.marginTop = "20px";

// Event listener for this button which will call the above function "deleteAllCompletedTodos"

deleteBtn.addEventListener("click", deleteAllCompletedTodos);
