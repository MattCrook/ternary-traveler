const interestHtmlSkeleton = ({ id, placeId, name, description, location, cost, review }) => {
  return `
        <div class="blog_post_interests--${id}">
        <header class="destination__name">
        <h3>Interest: </h3>
            <h4>${name}</h4>
            <h5 class="${placeId}>Location: ${location}</h5>
        </header>
        <section class="description">
        <h3>Description: </h3>
            ${description}
        </section>
        <section class="cost">
        <h3>Cost: </h3>
            $${cost}
        </section>
        <div class="review-point-of-interest">
        <h3>Review: </h3>
        ${review}
        </div>
        <section class="edit-delete-btns">
          <button id="editEntry--${id}" class="edit-button">Edit Entry</button>
          <button id="deleteEntry--${id}" class="deleteBtn">Delete Entry</button>
          </section>
    </div>
        `;
};

export { interestHtmlSkeleton as default };
