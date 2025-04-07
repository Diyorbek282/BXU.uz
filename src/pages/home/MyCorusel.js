import React from 'react';
import image1 from "./img/img1.jpg";
import image2 from "./img/imageslider.jpg";
import image3 from "./img/simpozium.JPG";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Fade, Zoom } from "react-reveal";
import "./carusel.css";


function MyCarousel() {
    return (
        <div className="custom-carousel-container">
            <Carousel fade indicators={false} pause={false}>
                {/* Slide 1 - Google Success Story */}
                <Carousel.Item interval={5000}>
                    <div className="carousel-split-layout">
                        {/* Image on top (mobile) or left (desktop) */}
                        <div className="carousel-image-container">
                            <Fade left duration={1000}>
                                <img
                                    className="carousel-image"
                                    src={image1}
                                    alt="Google employee"
                                />
                            </Fade>
                            <div className="left-image-gradient-overlay"></div>
                            <div className="right-image-gradient-overlay"></div>
                        </div>

                        {/* Content on bottom (mobile) or right (desktop) */}
                        <div className="carousel-content blue-gradient-bg">
                            <Zoom duration={1000} delay={300}>
                                <div className="content-wrapper">
                                    <h3 className="company-name mt-8 !text-[24px]"> Talabalarimizga davlat namunasidagi <br />
                                        diplomlar topshirildi.</h3>
                                    <p className="success-story">

                                        2023-yil 19-iyun sanasida 19 nafar,<br />
                                        2024-yil 5-avgust sanasida 40 nafar <br />
                                        magistratura mutaxasisligi muvaffaqiyatli <br />
                                        bitirganlarga QR kodli diplomlar topshirildi.


                                    </p>
                                    <div className="quote-decoration">
                                        <div className="quote-line"></div>
                                        {/*<div className="quote-icon">❝</div>*/}
                                    </div>
                                </div>
                            </Zoom>
                        </div>
                    </div>
                </Carousel.Item>

                {/* Slide 2 - Presidential Quote */}
                <Carousel.Item interval={5000}>
                    <div className="carousel-split-layout">
                        {/* Image on top (mobile) or left (desktop) */}
                        <div className="carousel-image-container">
                            <Fade left duration={1000}>
                                <img
                                    className="carousel-image"
                                    src={image2}
                                    alt="President Shavkat Mirziyoyev"
                                />
                            </Fade>
                            <div className="left-image-gradient-overlay"></div>
                            <div className="right-image-gradient-overlay"></div>
                        </div>

                        {/* Content on bottom (mobile) or right (desktop) */}
                        <div className="carousel-content blue-gradient-bg">
                            <Zoom duration={1000} delay={300}>
                                <div className="content-wrapper">
                                    <h3 className="quote-text">
                                        Ta'lim sifatini oshirish - Yangi O'zbekiston<br />
                                        taraqqiyotining yakka-yu yagona<br />
                                        to'g'ri yo'lidir
                                    </h3>
                                    <h1 className="person-name">Shavkat Mirziyoyev</h1>
                                    <p className="person-title">O'zbekiston Respublikasi Prezidenti</p>
                                </div>
                            </Zoom>
                        </div>
                    </div>
                </Carousel.Item>



                {/* Slide 3 - Presidential Quote */}
                <Carousel.Item interval={5000}>
                    <div className="carousel-split-layout">
                        {/* Image on top (mobile) or left (desktop) */}
                        <div className="carousel-image-container">
                            <Fade left duration={1000}>
                                <img
                                    className="carousel-image"
                                    src={image3}
                                    alt="President Shavkat Mirziyoyev"
                                />
                            </Fade>
                            <div className="left-image-gradient-overlay"></div>
                            <div className="right-image-gradient-overlay"></div>
                        </div>

                        {/* Content on bottom (mobile) or right (desktop) */}
                        <div className="carousel-content blue-gradient-bg">
                            <Zoom duration={1000} delay={300}>
                                <div className="content-wrapper">
                                    <h3 className="quote-text">
                                        Universitetimiz tomonidan <br/>2025-yilning 16-mart kuni

                                    </h3>
                                    <h1 className="person-name">❝ PSIXOLOGIYA FANLARI BO’YICHA  XALQARO KONFRENSIYA❝</h1>
                                    <p className="quote-text">bo’lib o’tdi.</p>
                                </div>
                            </Zoom>
                        </div>
                    </div>
                </Carousel.Item>


            </Carousel>
        </div>
    );
}

export default MyCarousel;