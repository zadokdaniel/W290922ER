import { useEffect } from "react";
import { useGallery } from "../hooks/useGallery";
import classNames from "classnames";
import { useState } from "react";

const images = [
  {
    alt: "image1",
    url: "https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_640.jpg",
    description: "description1",
  },
  {
    alt: "image2",
    url: "https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_640.jpg",
    description: "description2",
  },
  {
    alt: "image3",
    url: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_640.jpg",
    description: "description3",
  },
];

const Gallery = () => {
  const {
    image,
    isFirst,
    isLast,
    index,
    amount,
    end,
    jumpTo,
    next,
    previous,
    start,
  } = useGallery({
    images,
    isInfinite: true,
  });

  const [mili, setMili] = useState(2000);

  useEffect(() => {
    const intervalId = setInterval(next, mili);

    return () => {
      clearInterval(intervalId);
    };
  }, [mili]);

  return (
    <div className="container-fluid">
      <div className="position-relative">
        <img src={image.url} alt={image.alt} className="img-fluid" />

        <div
          className="bg-secondary bg-gradient bg-opacity-75 text-center py-1 text-light position-absolute bottom-0 w-100"
          style={{ fontSize: "0.8rem" }}
        >
          {image.alt}
        </div>
      </div>

      <div className="d-flex justify-content-center">
        {new Array(amount).fill(null).map((_, place) => (
          <span onClick={() => jumpTo(place)} className="mx-1" key={place}>
            <i
              className={classNames("bi", {
                "bi-circle": place !== index,
                "bi-circle-fill": place === index,
              })}
            ></i>
          </span>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-2">
        <button onClick={start} className="btn btn-primary btn-sm me-2">
          <i className="bi bi-chevron-bar-left"></i>
        </button>
        <button onClick={previous} className="btn btn-primary btn-sm me-2">
          <i className="bi bi-chevron-left"></i>
        </button>
        <button onClick={next} className="btn btn-primary btn-sm me-2">
          <i className="bi bi-chevron-right"></i>
        </button>
        <button onClick={end} className="btn btn-primary btn-sm">
          <i className="bi bi-chevron-bar-right"></i>
        </button>
      </div>
      <div className="">
        {index + 1} / {amount}
        <br />
        <input
          type="number"
          onChange={(e) => setMili(Number(e.target.value))}
          value={mili}
          min={1000}
          max={24 * 60 * 60 * 1000}
          step={500}
        />
      </div>
    </div>
  );
};

export default Gallery;
