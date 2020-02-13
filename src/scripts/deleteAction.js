import apiManager from "./apiManager.js";
import interestHtmlSkeleton from "./interestHTML.js";
import renderInterest from "./renderToDOM.js";

const deleteBlogPostAction = {
  deleteButtonAction() {
    const interestEntryContainer = document.querySelector(".interest_log");
    interestEntryContainer.addEventListener("click", event => {
      if (event.target.id.startsWith("deleteEntry--")) {
        const entryToDelete = event.target.id.split("--")[1];
        apiManager
          .deleteDestination(entryToDelete)
          .then(apiManager.getSavedInterests)
          .then(entriesFromAPI => {
            interestEntryContainer.innerHTML = "";
            entriesFromAPI.forEach(entry => {
              const entryHTML = interestHtmlSkeleton(entry);
              renderInterest(entryHTML);
            });
          });
      }
    });
  }
};

export default deleteBlogPostAction;
