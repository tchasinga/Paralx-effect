import React, { useState } from 'react';
import '../index.css'; // Import your CSS file

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
        background: '/src/assets/iphoneOne.jpg',
        name: 'LUNDEV',
        description: 'Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu',
      },
      {
          background: '/src/assets/IphoneTwo.jpg',
          name: 'LUNDEV',
          description: 'Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu',
        },
  
        {
          background: '/src/assets/IphoneThree.jpg',
          name: 'LUNDEV',
          description: 'Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu',
        },
  
        {
          background: '/src/assets/IphoneFour.jpg',
          name: 'LUNDEV',
          description: 'Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu',
        },
        {
          background: '/src/assets/IphoneFive.jpg',
          name: 'LUNDEV',
          description: 'Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu',
        },
        {
          background: '/src/assets/iphonSix.jpg',
          name: 'LUNDEV',
          description: 'Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu',
        },
      // Add more items here
    ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <div className="container">
      <div id="slide">
        {items.map((item, index) => (
          <div
            className={`item ${index === currentIndex ? 'active' : ''}`}
            key={index}
            style={{ backgroundImage: `url(${item.background})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.description}</div>
              <button>See more</button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={prevSlide}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button id="next" onClick={nextSlide}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
