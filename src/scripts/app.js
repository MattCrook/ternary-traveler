import renderInterest from "./renderToDOM.js";
import interestHtmlSkeleton from "./interestHTML.js";
import apiManager from "./apiManager.js";

const init = async () => {
  const savedPlaces = apiManager.getSavedPlaces;
  const savedInterests = apiManager.getSavedInterests;
  let values = await Promise.all([savedPlaces(), savedInterests()]);
  const returnedPlacesObject = values[0];
  const returnedInterestsObject = values[1];
  returnedInterestsObject.forEach(interest => {
    const placesObject = returnedPlacesObject.filter(
      places => places.id === interest.placeId
    );
    const name = interest.name;
    const description = interest.description;
    const cost = interest.cost;
    const review = interest.review;
    const placeId = placesObject.id;
    const interestObject = { name, description, cost, review };
    const interestHTML = interestHtmlSkeleton(interestObject);
    renderInterest(interestHTML);
  });
};

const postSavedDestinations = async () => {
  document
    .querySelector('input[type="submit"]')
    .addEventListener("click", event => {
      event.preventDefault();
      const interest = document.getElementById("pointOfInterest").value;
      const description = document.getElementById("descriptionInput").value;
      const cost = document.getElementById("costInput").value;
      const name = document.getElementById("locationInput").value;
      const interestObject = { id, interest, description, cost, review };
      // promise for POST request...then() blowing away and reloading page with updated version
      const hiddenJournalId = document.querySelector("#hiddenBlogId").value;
      if (hiddenJournalId !== "") {
        apiManager
          .updateDestination(hiddenId, interestObject)
          .then(response => {
            apiManager.getJournal().then(entriesFromAPI => {
              const entryLogContainer = document.querySelector(".entry_log");
              entryLogContainer.innerHTML = "";
              entriesFromAPI.forEach(journalEntry => {
                const entryHTML = journalFactory(journalEntry);
                renderEntry(entryHTML);
              });
            });
          })
          .catch(err => console.log({ err }));
    });
};








// const getInterest = async () => {
//   const savedPlaces = apiManager.getSavedPlaces;
//   const savedInterests = apiManager.getSavedInterests;
//   let values = await Promise.all([savedPlaces(), savedInterests()]);
//   const name = document.querySelector(".destination_name").value;
//   const description = document.querySelector(".description").value;
//   const cost = document.querySelector(".cost").value;
//   const review = document.querySelector(".review-point-of-interest").value;
//   const interestObject = { name, description, cost, review }.value;
//   const hiddenJournalId = document.querySelector("#journalId").value;
//   if (hiddenJournalId !== "") {
//     apiManager
//       .postSavedDestinations(interestObject)
//       .then(response => {
//         apiManager.getSavedPlaces().then(entriesFromAPI => {
//           const interestContainer = document.getElementById("interest_log");
//           interestContainer.innerHTML = "";
//           entriesFromAPI.forEach(entry => {
//             const entryHTML = formHtmlSkeleton(entry);
//             renderInterest(entryHTML);
//           });
//         });
//       })
//       .catch(err => console.log({ err }));
//   }
// };

//   apiManager.getJournal().then(entriesFromAPI => {
//     entriesFromAPI.forEach(journalEntry => {
//       const entryHTML = journalFactory(journalEntry);
//       renderEntry(entryHTML);
//     });
//   });
//   recordJournalManager.recordJournalEvent();
//   radioFilter.getRadioButton();
//   deleteJournalAction.deleteButtonAction();
//   editButtonAction();

init();
