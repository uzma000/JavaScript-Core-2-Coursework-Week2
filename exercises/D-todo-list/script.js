function todoList(toDos) {
  // Write your code here...const content = document.querySelector('content');
  const ulElements = document.createElement("ul");
  document.body.appendChild(ulElements);
  toDos.forEach((element) => {
    const liElements = document.createElement("li");
    liElements.innerText = element.todo;
    ulElements.appendChild(liElements);
    liElements.style.textDecoration = "none";
    liElements.addEventListener("click", () => {
      if (liElements.style.textDecoration === "none") {
        liElements.style.textDecoration = "line-through";
      } else {
        liElements.style.textDecoration = "none";
      }
    });
  });
}

const toDos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(toDos);
