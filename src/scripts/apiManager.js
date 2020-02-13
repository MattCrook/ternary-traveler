const apiManager = {
    async getSavedPlaces() {
      const response = await fetch(`http://localhost:8088/places`);
      return await response.json();
    },
    async getSavedInterests() {
        const response = await fetch(`http://localhost:8088/interests`);
        return await response.json();
      },
    postSavedInterests(interestObject) {
      return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(interestObject)
      });
    },
    updateDestination (hiddenId, interestObject) {
      return fetch(`http://localhost:8088/entries/${hiddenId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(interestObject)
      });
    },
    async deleteDestination(interestObject) {
      const response = await fetch(`http://localhost:8088/entries/${interestObject}`, {
        method: "DELETE"
      });
      return await response.json();
    },
  };

  export default apiManager;
