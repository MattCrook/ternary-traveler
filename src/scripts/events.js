import renderInterest from "./renderToDOM.js";
import interestHtmlSkeleton from "./interestHTML.js";
import apiManager from "./apiManager.js";
import getDataFromApi from "./app.js"
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
        //const hiddenId = document.querySelector("#hiddenBlogId").value;
        const interestObject = { interest, description, cost, review };
        // if (hiddenId !== "") {
        //   apiManager
        //     .updateDestination(hiddenId, interestObject)
        //     .then(response => {
        //       getDataFromApi(response);
        //     })
        //     .catch(err => console.log({ err }));
        //   } else {
              apiManager.postSavedInterests(interestObject)
              .then(response => {
                const interestContainer = document.querySelector(".interest_log");
                getDataFromApi(response);
                interestContainer.innerHTML += interestHTML;
              });
         // };
      });
  };

export { postSavedDestinations as default }
