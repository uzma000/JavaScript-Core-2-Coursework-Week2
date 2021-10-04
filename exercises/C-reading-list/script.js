function readingList(books) {
  // Write your code here...
  const content = document.querySelector("#content");

  let listOfBook = document.createElement("ul");
  content.appendChild(listOfBook);

  books.forEach((book) => {
    let listItem = document.createElement("li");

    let paragraphList = document.createElement("p");
    paragraphList.textContent = `${book.title} by ${book.author}`;
    listItem.appendChild(paragraphList);
    listOfBook.appendChild(listItem);

    let coverImg = document.createElement("img");
    coverImg.src = book.cover;
    coverImg.style.width = "280px";
    coverImg.style.justifyContent = "space-around";
    coverImg.style.display = "flex";

    listItem.appendChild(coverImg);
    listOfBook.classList.add("bookListStyle");
    listItem.classList.add("liSizeClass");

    if (book.alreadyRead === true) {
      listItem.style.backgroundColor = "green";
    } else {
      listItem.style.backgroundColor = "red";
    }
  });
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    cover:
      "https://media.shortform.com/covers/png/the-design-of-everyday-things-cover@8x.png",
    alreadyRead: true,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    cover: "https://www.kurzweilai.net/images/themosthumanhuman.jpg",
    alreadyRead: false,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    cover:
      "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg",
    alreadyRead: false,
  },
];

readingList(books);
