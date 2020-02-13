const interestHtmlSkeleton = ({ id, name, description, cost, review }) => {
  return `
        <div class="blog_post_interests--${id}">
        <header class="destination__name">
        <h1>Interest</h1>
            <h2>${name}</h2>
        </header>
        <section class="description">
        <h1>Description</h1>
            ${description}
        </section>
        <section class="cost">
        <h1>Cost</h1>
            $${cost}
        </section>
        <div class="review-point-of-interest">
        <h1>Review</h1>
        ${review}
        </div>
        <section class="edit-delete-btns">
          <button id="editEntry--${id}" class="open-modal" data-open="modal${id}">Edit Entry</button>
          <button id="deleteEntry--${id}" class="deleteBtn">Delete Entry</button>
          </section>
    </div>
        `;
};

export { interestHtmlSkeleton as default };
