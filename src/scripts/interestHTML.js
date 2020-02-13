const interestHtmlSkeleton = ({ id, name, description, cost, review }) => {
    return `
        <div class="blog_post_interests--${id}">
        <header class="destination__name">
            <h1>${name}</h1>
        </header>
        <section class="description">
            ${description}
        </section>
        <section class="cost">
            ${cost}
        </section>
        <div class="review-point-of-interest">
        ${review}
        </div>
        <section class="edit-delete-btns">
          <button id="editEntry--${id}" class="open-modal" data-open="modal${id}">Edit Entry</button>
          <button id="deleteEntry--${id}" class="deleteBtn">Delete Entry</button>
          </section>
    </div>
        `;
  };

export { interestHtmlSkeleton as default}
