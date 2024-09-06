import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGalleryItems(data, gallery, lightbox) {
  console.log(data);
  data.hits.forEach(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => {
      const element = document.createElement('li');
      const image = document.createElement('img');
      const infoList = document.createElement('ul');
      const link = document.createElement('a');

      element.classList.add('gallery-item');
      image.classList.add('gallery-image');
      infoList.classList.add('info-list');
      link.classList.add('gallery-link');

      image.src = webformatURL;
      image.width = '360';
      image.alt = tags;
      link.href = largeImageURL;

      const infoItems = [
        { title: 'Likes', value: likes },
        { title: 'Views', value: views },
        { title: 'Comments', value: comments },
        { title: 'Downloads', value: downloads },
      ];
      infoItems.forEach(({ title, value }) => {
        const item = document.createElement('li');
        const heading = document.createElement('h2');
        const text = document.createElement('p');

        item.classList.add('info-item');
        heading.classList.add('info-title');
        text.classList.add('info-text');

        heading.textContent = `${title}`;
        text.textContent = `${value}`;

        item.appendChild(heading);
        item.appendChild(text);
        infoList.appendChild(item);
      });

      link.appendChild(image);
      element.appendChild(link);
      element.appendChild(infoList);
      gallery.appendChild(element);
    }
  );

  if (!lightbox) {
    lightbox = new SimpleLightbox('#gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      close: true,
      loop: true,
    });
  } else {
    lightbox.refresh();
  }
}

export function scrollByTwoCardHeights() {
  const galleryItem = document.querySelector('.gallery-item');
  if (galleryItem) {
    const itemHeight = galleryItem.getBoundingClientRect().height;
    window.scrollBy({
      top: itemHeight * 2,
      behavior: 'smooth',
    });
  }
}
