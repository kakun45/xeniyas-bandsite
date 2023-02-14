// You must have an array in JavaScript with 3 default comment objects to start. Comments must have a name, a timestamp, and the comment text.
let comments = [
  {
    name: "Connor Walton",
    timestamp: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    timestamp: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    timestamp: "12/20/2020", // todo: new Date(),
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// window.onload();
window.addEventListener("load", () => {
  console.log("js of INDEX is loaded");
  const parent = document.querySelector(".default-comment");
  console.log(parent);
  // for (let i = 0; i < comments.length; i++) {
  const commentTitle = document.createElement("h3");
  const commentDate = document.createElement("p");
  const commentText = document.createElement("p");
  // console.log(commentTitle);
  commentTitle.innerHTML = `${comments[0]["name"]}`;
  console.log(commentTitle);
  commentDate.innerHTML = `${comments[0]["timestamp"]}`;
  commentText.innerHTML = `${comments[0]["comment"]}`;
  parent.appendChild(commentTitle);
  parent.appendChild(commentDate);
  parent.appendChild(commentText);
  // }
});
