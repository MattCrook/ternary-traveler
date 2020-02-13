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
