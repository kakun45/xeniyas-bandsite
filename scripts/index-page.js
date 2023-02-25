// auth, get key
function auth() {
  return `https://project-1-api.herokuapp.com/comments?api_key=${key.api_key}`;
}

// window.onload(); // todo: research
window.addEventListener("load", () => {
  request();
});

// todo: make Fn a Axios.res as a var and pass it in
const request = () => {
  axios
    .get(auth())
    .then((res) => {
      const parent = document.querySelector(".default-comments");
      // clears fields to refill them
      parent.innerText = "";
      res.data.sort( (a,b) => b.timestamp - a.timestamp )

      for (let i = 0; i < res.data.length; i++) {

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
        commentDate.classList.add("comment__date");
        const commentText = document.createElement("p");
        commentTitle.innerText = res.data[i]["name"];
        // Timestamp is in ms since epoch
        commentDate.innerText = new Date(
          res.data[i]["timestamp"]
        ).toLocaleDateString("en-US");
        commentText.innerText = res.data[i]["comment"];

        // titleHolder & contentHolder
        const titleHolder = document.createElement("div");
        titleHolder.classList.add("comments__titleHolder");
        titleHolder.appendChild(commentTitle);
        titleHolder.appendChild(commentDate);

        const contentHolder = document.createElement("div");
        contentHolder.classList.add("comments__contentHolder");
        contentHolder.appendChild(titleHolder);
        contentHolder.appendChild(commentText);

        // put an el together
        child.appendChild(avatar);
        child.appendChild(contentHolder);
        parent.appendChild(child);

        parent.appendChild(divider);
      }
    })
    .catch((err) => console.log(err));
};

const submitForm = (e) => {
  e.preventDefault();

  //todo: clear whole container
  const nameVal = e.target.name.value;
  const commentVal = e.target.comment.value;
  // strip input of before/after spaces
  nameVal.trim();
  commentVal.trim();
  // validate input fields
  // if (nameVal.length > 0 && commentVal.length > 0) {
  // let newComment = {
  //   name: nameVal,
  //   timestamp: Date.now(),
  //   comment: commentVal,
  // };

  axios
    .post(
      auth(),
      {
        name: nameVal,
        comment: commentVal,
      },
      {
        headers: { "content-type": "application/json" },
      }
    )
    .then((res) => {
      console.log("sent post");
      request();
    })
    .catch((err) => {
      console.log(err);
    });

  // todo: use form.reset()
  e.target.name.value = "";
  e.target.comment.value = "";
  // insert newComm infront of the db arr
  // comments_db.unshift(newComment);
  // displayComment();
  // } else if (nameVal.length === 0 && commentVal.length === 0) {
  //   // style the fields' outline in #error color
  //   const comments__textarea = document.querySelector(".comments__textarea");
  //   comments__textarea.classList.add("error-state");
  //   comments__textarea.innerText = "Pls, fill out the fields!";
  // }
};
const form = document.querySelector("form");
form.addEventListener("submit", submitForm);

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

// on comments: .GET on load, then .POST on submit, clear the DOM on: .innerHTML = ''; then .GET
