// auth, get + key
function auth() {
  return `https://project-1-api.herokuapp.com/showdates?api_key=${key.api_key}`;
}

window.addEventListener("load", () => {
  populateShows();
});

function populateShows() {
  const grandParent = document.querySelector(".shows-box--style");
  axios
    .get(auth())
    .then((res) => {
      res.data.forEach((element) => {
        const child = document.createElement("li");

        const childLableDate = document.createElement("h3");
        childLableDate.innerText = "DATE";
        childLableDate.classList.add("shows__li__title");
        const childDate = document.createElement("h5");
        childDate.style.fontWeight = "600";
        // Timestamp is in ms since epoch
        childDate.innerText = new Date(element["date"]).toDateString("en-US");

        const childLableVenue = document.createElement("h3");
        childLableVenue.innerText = "VENUE";
        childLableVenue.classList.add("shows__li__title");
        const childVenue = document.createElement("h5");
        childVenue.style.fontWeight = "500";
        childVenue.innerText = element.place;

        const childLableLocation = document.createElement("h3");
        childLableLocation.innerText = "LOCATION";
        childLableLocation.classList.add("shows__li__title");
        const childLocation = document.createElement("h5");
        childLocation.style.fontWeight = "500";
        childLocation.innerText = element.location;

        const button = document.createElement("button");
        button.classList.add("comment-button2");
        button.innerText = "BUY TICKETS";
        const hr = document.createElement("hr");
        hr.classList.add("divider");

        child.classList.add("shows-box__li");

        child.append(
          childLableDate,
          childDate,
          childLableVenue,
          childVenue,
          childLableLocation,
          childLocation,
          button,
          hr
        );

        grandParent.appendChild(child);
        // eventslis. on selected rows
        child.addEventListener("click", (e) => {
          let allSelected = document.querySelector(".shows-box__li--active");
          if (allSelected != null) {
            // remove that class
            allSelected.classList.remove("shows-box__li--active");
          }
          // add a Class '.--active'
          child.classList.add("shows-box__li--active");
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function formatDate() {
  const year = new Date().getFullYear(); // 2023
  const currMonth = new Date(); // 0-based
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[currMonth.getMonth()]; // Feb
  const day = new Date().getDate(); // 25
  const cuDay = new Date().getDay();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const wkDay = weekDays[cuDay];
  return `${wkDay} ${month} ${day < 10 ? 0 + day : day} ${year}`;
}
