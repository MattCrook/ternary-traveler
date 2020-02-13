const renderInterest = interestHTML => {
    const interestContainer = document.querySelector(".interest_log");
    interestContainer.innerHTML += interestHTML;
  };

  export { renderInterest as default }
