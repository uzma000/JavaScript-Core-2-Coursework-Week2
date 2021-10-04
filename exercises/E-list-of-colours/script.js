function listOfColours(colours) {
  // Write your code here...

  const content = document.querySelector("#content");
  const makeElement = document.createElement("select");
  const pElement = document.createElement("p");
  content.appendChild(makeElement);
  content.appendChild(pElement);
  pElement.style.backgroundColor = "#000000";
  colours.forEach((element) => {
    const optionElement = document.createElement("option");
    optionElement.value = element;
    optionElement.innerText = element;
    makeElement.appendChild(optionElement);
  });

  pElement.innerText = `You have selected: ${makeElement.value}.`;
  pElement.style.color = makeElement.value;
  makeElement.addEventListener("change", () => {
    pElement.style.color = makeElement.value;
    pElement.innerText = `You have selected: ${makeElement.value}.`;
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
