import React, { useEffect } from 'react';
import '../index.css';
import { Parallax } from 'react-parallax';
import image1 from '../Img/ImgField.jpg';
import image2 from '../Img/ThreeField.jpg';
import image3 from '../Img/FieldTwo.jpg';
import ScrollReveal from 'scrollreveal';

function PagesManager() {
  useEffect(() => {
    const options = {
      origin: 'bottom',
      distance: '30px',
      duration: 2000,
      reset: true,
    };

    const sr = ScrollReveal(options);

    sr.reveal('.home-text', { delay: 900, origin: 'bottom' });
    sr.reveal('.paraThree', { delay: 800, origin: 'bottom' });
   // sr.reveal('.button, .paraOne, .paraTwo, .paraThree', { delay: 400, origin: 'bottom' });
  }, []);

  return (
    <div>
      <Parallax  bgImage={image1} strength={600}>
        <div className='contentosed'>
          <h1 className='home-text flex justify-center w-full h-full text-4xl home-text'>
            Welcome here again
          </h1>   <p className='paraThree'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit similique architecto sed laudantium rem at deleniti quidem facere, consectetur cum pariatur earum mollitia qui sint dolorem minus obcaecati officiis? Magni?</p>
        </div>
      </Parallax>

      <Parallax  bgImage={image2} strength={600}>
        <div className='contentosed'>
          <h1 className='home-text flex justify-center w-full h-full text-4xl home-text'>
            Welcome here again
          </h1>
          <p className='paraThree border border-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit similique architecto sed laudantium rem at deleniti quidem facere, consectetur cum pariatur earum mollitia qui sint dolorem minus obcaecati officiis? Magni?</p>
        </div>
      </Parallax>

      <Parallax  bgImage={image3} strength={600}>
        <div className='contentosed'>
          <h1 className='home-text flex justify-center w-full h-full text-4xl home-text'>
            Welcome here again
          </h1>
          <p className='paraThree'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit similique architecto sed laudantium rem at deleniti quidem facere, consectetur cum pariatur earum mollitia qui sint dolorem minus obcaecati officiis? Magni?</p>
        </div>
      </Parallax>
    </div>
  );
}

export default PagesManager;
