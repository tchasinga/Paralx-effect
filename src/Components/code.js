// import React, { useEffect } from 'react';
// import '../index.css';
// import { Parallax } from 'react-parallax';
// import image1 from '../Img/ImgField.jpg';
// import image2 from '../Img/ThreeField.jpg';
// import image3 from '../Img/FieldTwo.jpg';
// import ScrollReveal from 'scrollreveal';

// function PagesManager() {
//   useEffect(() => {
//     const options = {
//       origin: 'bottom',
//       distance: '30px',
//       duration: 2000,
//       reset: true,
//       opacity: 0, // Starting opacity
//     };

//     const sr = ScrollReveal(options);

//     sr.reveal('.home-text', {
//       delay: 400,
//       origin: 'bottom',
//       opacity: 1, // Ending opacity
//     });

//     sr.reveal('.button, .paraOne, .paraTwo, .paraThree', {
//       delay: 400,
//       origin: 'bottom',
//       opacity: 1,
//     });
//   }, []);

//   return (
//     <div>
//       <Parallax className='w-full h-full' bgImage={image1} strength={600}>
//         <div className='content'>
//           <h1 className='flex justify-center w-full h-full text-4xl home-text'>
//             Welcome here again
//           </h1>
//         </div>
//       </Parallax>

//       <Parallax className='w-full h-full' bgImage={image2} strength={600}>
//         <div className='content'>
//           <h1 className='flex justify-center w-full h-full text-4xl home-text'>
//             Welcome here again
//           </h1>
//         </div>
//       </Parallax>

//       <Parallax className='w-full h-full' bgImage={image3} strength={600}>
//         <div className='content'>
//           <h1 className='flex justify-center w-full h-full text-4xl home-text'>
//             Welcome here again
//           </h1>
//         </div>
//       </Parallax>
//     </div>
//   );
// }

// export default PagesManager;
