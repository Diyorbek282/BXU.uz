import React, {useState} from 'react';
import Header from "../../../header2/Header.js";
import bgImage from "../../../../images/header2.jpg";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.png";
import pattern1 from "./img/pattern1.png";
import Zoom from "react-reveal/Zoom";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Footer from "../../../footer/Footer";
import newImg from "./img/new.jpg"

import { useTranslation } from 'react-i18next';
import ser1 from "../../images/pri.jpg";
import ser2 from "../../images/ser.png";
import ser3 from "../../images/ser1.png";
import {Modal} from "react-responsive-modal";
import { Link, useLocation } from 'react-router-dom';

function RectorUniversity(props) {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const location = useLocation();
    const handleImageClick = (image) => {
        setCurrentImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div
            className="w-full   h-36 xl:h-72 md:h-48 bg-[#DCDCDC] bg-cover bg-center text-center text-black"
            style={{
                backgroundImage: `url(${bgImage})`,
                borderBottomRightRadius: "60px",
                borderBottomLeftRadius: "60px",
            }}
        >
            <Header />
            <div className="header_title">
                <h2 className="my-4 text-white text-3xl lg:text-4xl">{t('rektorat.title')}</h2>
            </div>
            <div className="container mx-auto  py-12 pb-32">
                <div>
                    <div className=" flex flex-wrap mt-8 ">
                        {/* Main Content (2/3 width) */}
                        <div className="w-full xl:w-2/3 p-2">


                            <div className=" ">
                                <section id="founder" className="justify-center">
                                    <div className="text-center">
                                        <h6 className="section-title bg-white text-center px-3 text-lg md:text-xl">
                                            {t('rektorat.header')}

                                        </h6>
                                        <h1 className="text-xl md:text-xl lg:text-2xl xl:text-3xl">
                                            {t('rektorat.rector')}
                                        </h1>
                                    </div>
                                    <Zoom>
                                        <div className={"mx-auto justify-center"}>

                                            <img
                                                style={{width:'560px'}}
                                                className="img-fluid rounded mx-auto  h-72"
                                                src={img1}
                                                alt="Rektor"
                                            />
                                        </div>
                                    </Zoom>
                                    <div className="container mx-auto px-4">
                                        <div className="flex flex-wrap items-center">

                                            <div className="w-full text-black text-start">
                                                <Zoom>
                                                    <p className="text-xl md:text-2xl lg:text-3xl">

                                                        {t('rektorat.text')}

                                                    </p>
                                                </Zoom>
                                                <div className={" text-start "}>
                                                    <div className="flex-wrap flex gap-2 justify-center ">

                                                        <div
                                                            className="border-double mb-2 text-start border-5 border-[#004C88] hover:border-white  text-[#004C88]  rounded-lg hover:bg-[#004C88] hover:text-white">
                                                            <div className={"px-2"}>
                                                                <div className="flex items-baseline gap-1 justify-start">
                                                                    <i className="fa-solid fa-envelope"></i>

                                                                    <p className="font-semibold p-0 m-0"> {t('rektorat.contact1')}</p>
                                                                </div>
                                                                <div className={"m-0 "}>
                                                                    <p className="text-start font-medium m-0">buxpxti@gmail.com</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div
                                                            className="border-double mb-2 text-start border-5 border-[#004C88] hover:border-white  text-[#004C88]  rounded-lg hover:bg-[#004C88] hover:text-white">
                                                            <div className={"px-2"}>
                                                                <div className="flex items-baseline gap-1 justify-start">
                                                                    <i className="fa-solid fa-phone"></i>
                                                                    <p className="font-semibold p-0 m-0"> {t('rektorat.contact2')}</p>
                                                                </div>
                                                                <div className={"m-0 "}>
                                                                    <p className="text-start font-medium m-0">+998 55 309-99-99</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div
                                                            className="border-double mb-2 text-start border-5 border-[#004C88] hover:border-white  text-[#004C88]  rounded-lg hover:bg-[#004C88] hover:text-white">
                                                            <div className={"px-2"}>
                                                                <div className="flex items-baseline gap-1 justify-start">
                                                                    <i className="fa-solid fa-calendar"></i>
                                                                    <p className="font-semibold p-0 m-0">
                                                                        <p className="font-semibold p-0 m-0"> {t('rektorat.contact3')}</p>
                                                                    </p>
                                                                </div>
                                                                <div className={"m-0 "}>
                                                                    <p className="text-start font-medium m-0 text-[14]">
                                                                        {t('rektor.info')}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>



                                                    </div>

                                                </div>
                                                <div>
                                                    <p className={"text-[18px] mt-4"}>
                                                        Baratov Sharif Ramazanovich
                                                        Buxoro xalqaro universiteti rektori
                                                        1960-yil 22-martda Oʼzbekiston Respublikasi,
                                                        Buxoro viloyati, Kogon tumani Talicha qishlogʼida tugʼilgan.
                                                        U 1977-yilda Kogon tumanidagi 7-umumtaʼlim maktabini,
                                                        1983-yilda esa Buxoro davlat pedagogika institutini imtiyozli
                                                        diplom bilan tugatib, shu institutning Psixologiya kafedrasi
                                                        oʼqituvchisi sifatida ishga qabul qilingan.
                                                    </p>
                                                    <Zoom>
                                                        <div className={"flex justify-center m-auto w-full"}>
                                                            <div className={"flex flex-wrap gap-2 w-full m-auto justify-center"}>
                                                                <img onClick={() => handleImageClick(ser1)} style={{width: "200px", height: "100px"}}
                                                                     src={ser1} alt={""}/>
                                                                <img onClick={() => handleImageClick(ser2)} style={{width: "200px", height: "100px"}}
                                                                     src={ser2} alt={""}/>
                                                                <img onClick={() => handleImageClick(ser3)} style={{width: "200px", height: "100px"}}
                                                                     src={ser3} alt={""}/>
                                                            </div>
                                                        </div>
                                                    </Zoom>
                                                    <p className={"text-[18px] mt-4"}>
                                                        1985-1987-yillarda Moskvadagi Umumiy va pedagogik
                                                        psixologiya institutining ilmiy tadqiqotchisi, 1987-1990-yillarda
                                                        shu institutning aspiranturasida oʼqib, 1990 yilda nomzodlik
                                                        dissertatsiyasini himoya qilgan
                                                        1991-2021-yillarda Buxoro davlat universitetida
                                                        Psixologiya kafedrasi oʼqituvchisi, kafedra mudiri, fakulьtet
                                                        dekani, ilmiy ishlar prorektori lavozimlarida samarali faoliyat
                                                        koʼrsatgan. Shu orada bir muddat (2002-2006 y.y) viloyat
                                                        hokimining tavsiyasiga koʼra, Respublika Maʼnaviyat va maʼrifat
                                                        markazi Buxoro viloyat boʼlimi rahbari lavozimida ham ishlagan.
                                                    </p>
                                                    <p className={"text-[18px] mt-4"}>
                                                        2021-yildan hozirgi kunga kadar Buxoro xalqaro
                                                        universiteti taʼsischisi va rektori sifatida faoliyat yuritib
                                                        kelmoqda.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </section>




                            </div>
                        </div>

                        <div className="w-full xl:w-1/3 px-8 mt-20">
                            <div className="bg-gradient-to-b from-blue-800 to-blue-900 rounded-lg shadow-xl p-6 border border-blue-700">
                                <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-blue-600">
                                   Foydali havolalar
                                    <span className="block w-12 h-1 bg-blue-400 mt-2 rounded-full"></span>
                                </h2>

                                <ul className="space-y-3">
                                    {/* University Section */}
                                    <li>
                                        <p className="font-bold text-white text-lg mb-2 flex items-center">
                                            <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                                            {t('university.title')}
                                        </p>
                                        <ul className="ml-5 space-y-2 border-l-2 border-blue-700 pl-4">
                                            <li>
                                                <Link
                                                    to="/university/about"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/about'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Learn more about our university"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.about.title')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/university/rector-appeal"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/rector-appeal'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Read the rector's message"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.about.rectorAddress')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/university/aim"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/aim'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Our mission and vision"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.about.goals')}
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    to="/university/aim"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/aim'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Our mission and vision"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.about.qualitySystem')}
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    to="/university/aim"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/aim'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Our mission and vision"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.about.facts')}
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    to="/university/aim"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/aim'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Our mission and vision"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.about.codeOfConduct')}
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>

                                    {/* Rector Office Section */}
                                    <li className="mt-5">
                                        <p className="font-bold text-white text-lg mb-2 flex items-center">
                                            <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                                            {t('university.rectorOffice.title')}
                                        </p>
                                        <ul className="ml-5 space-y-2 border-l-2 border-blue-700 pl-4">
                                            <li>
                                                <Link
                                                    to="/university/rector"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/rector'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="About our rector"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.rectorOffice.rector')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/university/prorector"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/prorector'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Meet our vice rectors"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.rectorOffice.viceRectors')}
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* Staff Section */}
                                    <li className="mt-5">
                                        <p className="font-bold text-white text-lg mb-2 flex items-center">
                                            <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                                            {t('university.rectorOffice.staff')}
                                        </p>
                                        <ul className="ml-5 space-y-2 border-l-2 border-blue-700 pl-4">
                                            <li>
                                                <Link
                                                    to="/university/head"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/head'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Department heads information"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.rectorOffice.departmentHeads')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/university/professors"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/professors'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Our teaching staff"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.rectorOffice.professors')}
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* Infrastructure Section */}
                                    <li className="mt-5">
                                        <p className="font-bold text-white text-lg mb-2 flex items-center">
                                            <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                                            {t('university.infrastructure.title')}
                                        </p>
                                        <ul className="ml-5 space-y-2 border-l-2 border-blue-700 pl-4">
                                            <li>
                                                <Link
                                                    to="/university/data-center"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/data-center'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Our technical facilities"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.infrastructure.dataCenter')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/university/campuses"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/campuses'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="University buildings and locations"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.infrastructure.buildings')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/university/dormitory"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/dormitory'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Student accommodation"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.infrastructure.dormitory')}
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>


                            </div>
                        </div>




                    </div>
                </div>


           </div>

            <Modal open={open} onClose={handleClose} center>
                {currentImage && (
                    <img
                        src={currentImage}
                        alt="Zoomed License"
                        style={{ width: "100%", height: "auto" }}
                    />
                )}
            </Modal>
            <Footer/>
        </div>
    )
        ;
}

export default RectorUniversity;
