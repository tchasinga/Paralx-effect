import '../index.css'
import { Parallax } from 'react-parallax';
import image1 from '../Img/ImgField.jpg';
import image2 from '../Img/ThreeField.jpg';
import image3 from '../Img/FieldTwo.jpg';

function PagesManager(){
    return(
        <div >
          <Parallax className='w-full h-full ' bgImage={image1} strength={600}>
            <div className='content'>
            <h1 className='flex justify-center w-full h-full text-4xl'>Welcom here again</h1>
            </div>
          </Parallax>

          <Parallax className='w-full h-full ' bgImage={image2} strength={600}>
            <div className='content'>
            <h1 className='flex justify-center w-full h-full text-4xl'>Welcom here again</h1>
            </div>
          </Parallax>

          <Parallax className='w-full h-full ' bgImage={image3} strength={600}>
            <div className='content'>
            <h1 className='flex justify-center w-full h-full text-4xl'>Welcom here again</h1>
            </div>
          </Parallax>
        </div>
    );
}

export default PagesManager;