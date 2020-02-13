const apiManager = {
    async getSavedPlaces() {
      const response = await fetch(`http://localhost:8088/places`);
      return await response.json();
    },
    async getSavedInterests() {
        const response = await fetch(`http://localhost:8088/interests`);
        return await response.json();
      },
    postSavedInterests(interestsObj) {
      return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(journalObj)
      });
    },
    updateDestination (journalId, journalEntry) {
      return fetch(`http://localhost:8088/entries/${journalId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(journalEntry)
      });
    },
    async deleteDestination(journalEntry) {
      const response = await fetch(`http://localhost:8088/entries/${journalEntry}`, {
        method: "DELETE"
      });
      return await response.json();
    },
  };

  export default apiManager;
