const showsArr = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Franciso, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Franciso, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Franciso, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

window.addEventListener("load", () => {
  console.log("JS of SHOWS pge is loaded");
  populateShows(showsArr);
});

function populateShows(showsArr) {
  const grandParent = document.querySelector(".shows-box--style");

  showsArr.forEach((element) => {
    console.log(element);
    const child = document.createElement("li");
    child.classList.add("shows__li");

    const childLableDate = document.createElement("h3");
    childLableDate.innerText = "DATE";
    childLableDate.classList.add("shows__li__title");
    const childDate = document.createElement("h5");
    childDate.style.fontWeight = "600";
    childDate.innerText = element.date;

    const childLableVenue = document.createElement("h3");
    childLableVenue.innerText = "VENUE";
    childLableVenue.classList.add("shows__li__title");
    const childVenue = document.createElement("h5");
    childVenue.style.fontWeight = "500";
    childVenue.innerText = element.venue;

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

    child.classList.add("shows-box--li");

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
  });
}
