import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { Card } from "../Card";

import "./styles.css";

export function CarouselCustom({ children }) {

  const cards = [
    {id: 1, image: "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" , name: "Salada Ravanello" , price: "49.97" },
    {id: 2, image: "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" , name: "Strogonof" , price: "19.97" },
    {id: 3, image: "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" , name: "Macarronada" , price: "39.97" },
    {id: 4, image: "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" , name: "Feijoada" , price: "59.97" },
    {id: 5, image: "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" , name: "Salada Ceasar" , price: "29.97" },
    {id: 6, image: "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" , name: "Lasanha" , price: "19.99" },
    {id: 7, image: "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" , name: "Torta" , price: "9.99" }
  ]

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const swiperParams = {
    slidesPerView: 2,
    spaceBetween: 16,
    navigation: isDesktop ? true : false,
    // rewind: true,
    loop: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      515: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 27,
      },
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
    modules: [Navigation, Keyboard],
  };

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 768);
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
