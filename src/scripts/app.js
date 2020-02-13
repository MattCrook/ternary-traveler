import renderInterest from "./renderToDOM.js";
import interestHtmlSkeleton from "./interestHTML.js";
import apiManager from "./apiManager.js";
import postSavedDestinations from "./events.js";
import { editButtonAction } from "./editEvent.js";
import deleteBlogPostAction  from "./deleteAction.js"

const getDataFromApi = async () => {
  const savedPlaces = apiManager.getSavedPlaces;
  const savedInterests = apiManager.getSavedInterests;
  let values = await Promise.all([savedPlaces(), savedInterests()]);
  const returnedPlacesObject = values[0];
  const returnedInterestsObject = values[1];
  returnedInterestsObject.forEach(interest => {const placesObject = returnedPlacesObject.filter(place => place.id === interest.id
    );
    //console.log("placesObject", placesObject);
    const name = interest.name;
    const description = interest.description;
    const cost = interest.cost;
    const review = interest.review;
    const placeId = placesObject.id;
    const id = interest.id;
    const interestObject = { id, placeId, name, description, location, cost, review };
    const interestHTML = interestHtmlSkeleton(interestObject);
    renderInterest(interestHTML);
  });
  postSavedDestinations();
  editButtonAction();
  deleteBlogPostAction.deleteButtonAction()
};

getDataFromApi();

export { getDataFromApi as default };

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
