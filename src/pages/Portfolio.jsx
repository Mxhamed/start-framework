import { useState, useEffect } from "react";
import StarTitle from "../components/StarTitle";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState("");

  document.body.style.overflow = selectedImage ? "hidden" : "";

  return (
    <>
      <StarTitle color="#2c3e50" backgroundColor="#fff">
        Portfolio Component
      </StarTitle>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {Array.from({ length: 6 }, (_, i) => (
            <PortfolioCard
              setSelectedImage={setSelectedImage}
              img={`/portfolio/port${i % 3}.png`}
              key={i}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <PortfolioModal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </>
  );
}

function PortfolioCard({ img, setSelectedImage }) {
  const handleSelectImage = (img) => {
    setSelectedImage(img);
  };

  return (
    <div className="col">
      <div
        className="content"
        tabIndex={0}
        onClick={() => handleSelectImage(img)}
        onKeyUp={(e) => e.code === "Enter" && handleSelectImage(img)}>
        <img src={img} alt="" width={300} height={400} />
        <div className="overlay">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M18 10h-4V6a2 2 0 0 0-4 0l.071 4H6a2 2 0 0 0 0 4l4.071-.071L10 18a2 2 0 0 0 4 0v-4.071L18 14a2 2 0 0 0 0-4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PortfolioModal({ selectedImage, setSelectedImage }) {
  const handleDeselectImage = () => {
    setSelectedImage("");
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.code === "Escape" && handleDeselectImage();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="PortfolioModal" tabIndex={0} onClick={handleDeselectImage}>
      <img
        className="modalImage"
        src={selectedImage}
        alt=""
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
