import React from "react";

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './Banner.scss'

import Image from '../../assets/images/kross.png';

const Banner = (props) => {
    return (
        <div className="banner">
            <div className="banner__content">
                <h2 className="banner__title">
                    Подборки дня
                </h2>
                <a className="banner__link" href="#">
                    Все товары
                </a>
            </div>
            <div className="banner__slider">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="banner__item">
                            <div className="banner__img">
                                <img src={Image} />
                            </div>
                            <div className="banner__info banner-product">
                                <p className="banner-product__name">Nike</p>
                                <p className="banner-product__price">
                                    1 890 ₽
                                    <s className="old-price">2 890 ₽</s>
                                </p>
                                <span className="banner-product__descr">Мужские кроссовки Air Penny II NAS</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner__item">
                            <div className="banner__img">
                                <img src={Image} />
                            </div>
                            <div className="banner__info banner-product">
                                <p className="banner-product__name">Nike</p>
                                <p className="banner-product__price">
                                    1 890 ₽
                                    <s className="old-price">2 890 ₽</s>
                                </p>
                                <span className="banner-product__descr">Мужские кроссовки Air Penny II NAS</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner__item">
                            <div className="banner__img">
                                <img src={Image} />
                            </div>
                            <div className="banner__info banner-product">
                                <p className="banner-product__name">Nike</p>
                                <p className="banner-product__price">
                                    1 890 ₽
                                    <s className="old-price">2 890 ₽</s>
                                </p>
                                <span className="banner-product__descr">Мужские кроссовки Air Penny II NAS</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;