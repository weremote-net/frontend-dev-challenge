import React, { useState, useEffect } from 'react';
import '../../css/Hero.css'
import { HeroImg } from './HeroImg';
import HeroData from './HeroData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'


const Hero = ({ slides }) => {
 /*  const [currentImg, setCurrentImg] = useState(0);
  const len = slides.length;

  const nextSlide = () => {
    setCurrentImg((currentImg === len - 1) ? 0 : (currentImg + 1));
  }

  const prevSlide = () => {
    setCurrentImg((currentImg === 0) ? len - 1 : (currentImg - 1));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      ((currentImg === (len - 1)) ? setCurrentImg(0) : setCurrentImg(currentImg+1));

    }, 5000);
    return () => clearInterval(interval);
  }, [currentImg]);
 */
/*   if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  } */

  return (
    <section className='slider'>
      {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      
      {HeroImg.map((slide, index) => {
        return (
          <div 
            className={index === currentImg ? 'slide-active' : 'slide'} key={index} 
          >
            {index === currentImg && (
            <img src={slide.image} alt='healthy food' className='image' />
            )}
          <div className={currentImg === 0 ? 'text-button' : 'text-button-hidden'}>
            <HeroData 
              text1='¡Come sano, vive mejor!' 
              text2='Estarás agradecido por ese cambio en tu vida.' 
              button='¡Regístrate!' />
          </div>
          <div className={currentImg === 1 ? 'text-button' : 'text-button-hidden'}>
            <HeroData 
              text1='Brócoli, pepino, lechuga y más...' 
              text2='Agrega más verde a tus platillos.' 
              button='¡Regístrate!' />
          </div>
          <div className={currentImg === 2 ? 'text-button' : 'text-button-hidden'}>
            <HeroData 
              text1='¡Haz el bien, come bien!' 
              text2='Eres lo que comes, así que come correctamente.' 
              button='¡Regístrate!' />
          </div>
          <div className={currentImg === 3 ? 'text-button' : 'text-button-hidden'}>
            <HeroData 
              text1='¡Empieza tu cambio ahora!' 
              text2='Una buena rutina de ejercicios y una alimentación adecuada.' 
              button='¡Regístrate!' />
          </div>
          <div className={currentImg === (len - 1) ? 'text-button' : 'text-button-hidden'}>
            <HeroData 
              text1='¡Una excelente comunidad!' 
              text2='Ingresa y comienza a seguir las mejores recetas para tus platillos.' 
              button='¡Regístrate!' />
          </div>
          </div>
        );
      })} */}
      
    </section>
  )
}

export default Hero;