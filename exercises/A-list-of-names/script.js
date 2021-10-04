function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  arrayOfPeople.forEach((person) => {
    const newName = document.createElement("h1");
    newName.innerHTML = person.name;
    content.appendChild(newName);

    const newJob = document.createElement("h2");
    newJob.innerHTML = person.job;
    content.appendChild(newJob);
  });
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
