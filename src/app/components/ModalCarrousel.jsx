"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl'; 
import Modal from 'react-modal';
import Slider from 'react-slick';

Modal.setAppElement('body');

const ModalCarrousel = ({ images }) => {
  const t = useTranslations("Caroussel");

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const NextArrow = ({ onClick }) => (
    <div className="absolute -bottom-12 right-5 cursor-pointer text-white" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className=' fill-white size-7'>
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
      </svg>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="absolute -bottom-12 left-5 cursor-pointer text-white" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className=' fill-white size-7'>
       <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
      </svg>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <a onClick={openModal} style={{ cursor: 'pointer', color: '#67348b' }}>
        {t('img')}
      </a>
      
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Carrousel d'images"
        className='bg-[#000] top-[50%] left-[50%] right-[auto] bottom-[auto] mr-[0%] mb-12 transform-[translate(-50%, -50%)] w-[100%] h-[100%]'
      >
        <button onClick={closeModal} className=' w-full flex justify-end py-3 pr-5'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className=' fill-white size-7'>
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
            </svg>
        </button>

        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img 
                src={image} 
                alt={`Image ${index}`} 
                className='w-[80%] max-h-[80vh] object-cover object-top mx-auto text-[#67348b]' 
              />
            </div>
          ))}
        </Slider>
      </Modal>
    </div>
  );
};

export default ModalCarrousel;
