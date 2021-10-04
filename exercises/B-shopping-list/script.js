function shoppingList(listOfArr) {
  // Write your code here...
  let content = document.getElementById("content");
  let arrayOfItems = document.createElement("ul");
  content.appendChild(arrayOfItems);
  listOfArr.map((item) => {
    let singleItem = document.createElement("li");
    singleItem.innerHTML = item;
    arrayOfItems.appendChild(singleItem);
  });
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
