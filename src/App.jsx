import React, { useRef } from "react";
import "./App.css";
const App = () => {
  const imageRef = useRef();

  const swapImage = () => {
    const currentSrc = imageRef.current.getAttribute("src");
    const newSrc =
      currentSrc ===
      "https://i.pinimg.com/736x/45/18/1e/45181e42e7a93334d8bce368b7df8e56.jpg"
        ? "https://i.pinimg.com/736x/e3/3e/8d/e33e8d69cea8a77fb29104dc8e828674.jpg"
        : "https://i.pinimg.com/736x/45/18/1e/45181e42e7a93334d8bce368b7df8e56.jpg";
    imageRef.current.setAttribute("src", newSrc);
  };

  return (
    <div className="container">
      <h1 className="title">Image Swap Feature</h1>
      <img
        ref={imageRef}
        className="image"
        src="https://i.pinimg.com/736x/45/18/1e/45181e42e7a93334d8bce368b7df8e56.jpg"
        alt="Placeholder"
      />
      <button className="button" onClick={swapImage}>
        Swap Image
      </button>
    </div>
  );
};

export default App;
