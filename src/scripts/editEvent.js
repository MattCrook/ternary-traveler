//event listener on edit button
export function editButtonAction() {
  const interestContainer = document.querySelector(".interest_log"); // reference to container for all entries
  interestContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("editEntry--")) {
      const interestToEditId = event.target.id.split("--")[1];
      populateInterestFields(interestToEditId);
    }
  });
}

// event listener on save button, after user edits the journal
// using PUT call to update the API with changes. Added a check in jounralManger.js to check initially if the entry feild has a hidden value. If it does, then the user is editing.
// if it doesn't then it is a new load, or freshly loaded page.
const populateInterestFields = interestId => {
  const hiddenId = document.querySelector("#hiddenBloglId");
  const interest = document.getElementById("pointOfInterest");
  const description = document.getElementById("descriptionInput");
  const cost = document.getElementById("costInput");
  const name = document.getElementById("locationInput");
  const review = document.getElementById("reviewInput");

  fetch(`http://localhost:8088/interests/${interestId}`) // promise response, for put call. Buuilding the object by assigning values. These values are what will fill the entry fields, until the user makes an edit. When the user hits submit, it fires the PUT call.
    .then(response => response.json())
    .then(response => {
        hiddenId.value = response.id;
        interest.value = response.interest;
        description.value = response.description;
        cost.value = response.cost;
        name.value = response.name;
        review.value = response.review
    })
    .catch(err => console.log(err));
};
