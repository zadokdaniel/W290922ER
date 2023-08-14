import { useState } from "react";

const defaultImage = {
  url: "https://cdn.pixabay.com/photo/2017/06/16/09/55/abstract-2408490_1280.jpg",
  alt: "no image",
};

const Gallery = ({ images = [], infinity = false }) => {
  const [index, setIndex] = useState(0);

  const first = () => setIndex(0);
  const last = () => setIndex(images.length - 1);
  const next = () => {
    if (index >= images.length - 1) {
      if (infinity) {
        first();
      }

      return;
    }

    setIndex((index) => index + 1);
  };

  const previous = () => {
    if (index <= 0) {
      if (infinity) {
        last();
      }

      return;
    }

    setIndex((index) => index - 1);
  };

  const isLast = index >= images.length - 1;
  const isFirst = index <= 0;
  const { url, alt, description } = images[index] || defaultImage;

  return (
    <div>
      <div className="d-flex justify-content-center position-relative">
        <img className="img-fluid" src={url} alt={alt} />
        {description && (
          <div className="bg-light bg-gradient bg-opacity-75 p-2 text-center position-absolute bottom-0 start-50 translate-middle-x">
            {description}
          </div>
        )}
      </div>

      <div className="actions mt-2 d-flex justify-content-center">
        <button
          disabled={!infinity && isFirst}
          onClick={first}
          className="btn btn-primary mx-2"
        >
          <i className="bi bi-chevron-bar-left"></i>
        </button>
        <button
          disabled={!infinity && isFirst}
          onClick={previous}
          className="btn btn-primary mx-2"
        >
          <i className="bi bi-chevron-compact-left"></i>
        </button>
        <button
          disabled={!infinity && isLast}
          onClick={next}
          className="btn btn-primary mx-2"
        >
          <i className="bi bi-chevron-compact-right"></i>
        </button>
        <button
          disabled={!infinity && isLast}
          onClick={last}
          className="btn btn-primary mx-2"
        >
          <i className="bi bi-chevron-bar-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
