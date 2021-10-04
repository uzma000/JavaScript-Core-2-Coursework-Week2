let greenBtn = document.querySelector("#greenBtn");
let jumbotron = document.querySelector(".jumbotron");
let volunteer = document.querySelector("#volunteerBtn");
let donate = document.querySelector("#donateBtn");
let submitBtn = document.querySelector("#submitBtn");

greenBtn.addEventListener(
  "click",
  () => (donate.style.backgroundColor = "orange")
);
greenBtn.addEventListener(
  "click",
  () => (volunteer.style.backgroundColor = "black")
);

let formBox = document.getElementsByTagName("input");
let describeYourself = document.getElementById("exampleTextarea");

let result1 = "";
let result2 = "";

function submitForm() {
  for (i = 0; i < formBox.length; i++) {
    if (formBox[i].value.length == "") {
      result1 = false;
      formBox[i].style.background = "white";
    } else {
      formBox[i].style.background = "black";
      result1 = true;
    }
  }
}

if (describeYourself.value.length == "") {
  describeYourself.style.backgroundColor = "red";
  result2 = false;
} else {
  describeYourself.style.background = "white";
  result2 = true;
}

if (result1 == true && result2 == true) {
  submitBtn.addEventListener("click", () =>
    alert("Thank you for filling out the form")
  );
}
event.preventDefault();

submitForm();
