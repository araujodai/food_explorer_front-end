import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import "./styles.css";

export function CarouselCustom({ children }) {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const swiperParams = {
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: isDesktop ? true : false,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      515: {
        spaceBetween: 20,
      },
      768: {
        spaceBetween: 30,
      },
    },
    modules: [Navigation, Keyboard],
  };

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <Swiper {...swiperParams}>
        {children.map((item, index) => (
          <SwiperSlide key={index}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
  );
};
