const formHtmlSkeleton = ({ name, description, cost, review }) => {
    return `
        <article class="blog_post_interests">
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
    </article>
        `;
  };

// export { interestHtmlSkeleton as default}
