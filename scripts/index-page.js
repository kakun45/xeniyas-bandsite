// You must have an array in JavaScript with 3 default comment objects to start. Comments must have a name, a timestamp, and the comment text.
const comments = [
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
    timestamp: "12/20/2020", // todo: use formatDate()
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// window.onload(); // todo: research
window.addEventListener("load", () => {
  // console.log("js of INDEX is loaded"); //test if works

  function insertDefaultComm() {
    const parent = document.querySelector(".default-comments");

    for (let i = 0; i < comments.length; i++) {
      const child = document.createElement("div");
      child.classList.add("comments__child");

      // create a divider
      const divider = document.createElement("hr");
      divider.classList.add("divider");

      // a gray circle for an avatar
      const avatar = document.createElement("div");
      avatar.classList.add("comments__avatar");

      // create a comment el: name,date,text
      const commentTitle = document.createElement("h3");
      const commentDate = document.createElement("p");
      commentDate.classList.add("comment-date");
      const commentText = document.createElement("p");
      commentTitle.innerText = comments[i]["name"];
      commentDate.innerText = comments[i]["timestamp"];
      commentText.innerText = comments[i]["comment"];

      // titleHolder & contentHolder
      const titleHolder = document.createElement("div");
      titleHolder.classList.add("comments__titleHolder");
      titleHolder.appendChild(commentTitle);
      titleHolder.appendChild(commentDate);

      const contentHolder = document.createElement("div");
      contentHolder.classList.add("comments__contentHolder");
      contentHolder.appendChild(titleHolder);
      contentHolder.appendChild(commentText);

      // pull el together
      child.appendChild(avatar);
      child.appendChild(contentHolder);
      parent.appendChild(child);

      parent.appendChild(divider);
    }
  }

  insertDefaultComm();
});

// use to format date on added comment
function formatDate() {
  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1; // 0 based
  const year = today.getFullYear();
  if (day < 10) {
    day = "0" + day;
  } else if (month < 10) {
    month = "0" + month;
  }
  let date = `${month}/${day}/${year}`;
  return date;
}
// console.log("test now:", formatDate()); // call to check
