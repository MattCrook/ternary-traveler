import apiManager from "./apiManager.js";
import getDataFromApi from "./app.js";
import { editButtonAction } from "./editEvent.js";

const postSavedDestinations = async () => {
  document
    .querySelector('input[type="submit"]')
    .addEventListener("click", event => {
      event.preventDefault();
      const interest = document.getElementById("pointOfInterest").value;
      const description = document.getElementById("descriptionInput").value;
      const cost = document.getElementById("costInput").value;
      const name = document.getElementById("locationInput").value;
      const review = document.getElementById("reviewInput").value;
      // promise for POST request...then() blowing away and reloading page with updated version
      const hiddenBlogId = document.querySelector("#hiddenBlogId").value;
      //const hiddenPlaceId = document.querySelector("#hiddenPlaceId").value;
      const interestObject = { hiddenBlogId, interest, description, name, cost, review };
      if (hiddenBlogId !== "") {
        apiManager
          .updateDestination(hiddenBlogId, interestObject)
          .then(response => {
            interestContainer.innerHTML = "";
            getDataFromApi(response);
          })
          .catch(err => console.log({ err }));
      } else {
        apiManager.postSavedInterests(interestObject).then(response => {
          getDataFromApi(response);
          const interestContainer = document.querySelector(".interest_log");
          interestContainer.innerHTML = "";
          interestContainer.innerHTML += interestHTML;
        });
      }
    });
};

export { postSavedDestinations as default };
