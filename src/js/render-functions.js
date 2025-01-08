export const createGalleryCardsTemplate = imageArr => {
  return imageArr.reduce((acc, el) => {
    return (
      acc +
      `<li class="gallery-card">
                <a class="gallery-link" href="${el.largeImageURL}">
                <img
                  class="gallery-img"
                  src="${el.webformatURL}"
                  alt="${el.tags}"
                />
                </a>
                <div class="img-info">
                  <ul class="img-info-list">
                     <li class="img-info-item">
                        <span class="img-info-title" >Likes</span>
                        <span class="img-info-number">${el.likes}</span>
                    </li>
                    <li class="img-info-item">
                        <span class="img-info-title" >Views</span>
                        <span class="img-info-number">${el.views}</span>
                    </li>
                    <li class="img-info-item">
                        <span class="img-info-title" >Comments</span>
                        <span class="img-info-number">${el.comments}</span>
                    </li>
                    <li class="img-info-item">
                        <span class="img-info-title" >Downloads</span>
                         <span class="img-info-number">${el.downloads}</span>
                    </li>
                  </ul>
                </div>
            </li>`
    );
  }, '');
};
