import React, {useState} from 'react';
import Header from "../../../header2/Header.js";
import bgImage from "../../../../images/header2.jpg";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";
import img6 from "./img/img6.png";
import img7 from "./img/img7.png";
import img8 from "./img/img8.png";
import img9 from "./img/img9.png";
import img10 from "./img/img10.png";
import img11 from "./img/img11.png";
import img12 from "./img/img12.png";
import img13 from "./img/img13.png";
import img14 from "./img/img14.png";
import img15 from "./img/img15.png";
import img16 from "./img/img16.png";
import Footer from "../../../footer/Footer";

import { useTranslation } from 'react-i18next';
import {Modal} from "react-responsive-modal";
import { Link, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
function ProRectorUniversity(props) {
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

    const staffMembers = [
        {
            name: "Barotov Shuxrat Sharipovich",
            position: "Ish boshqaruvchi",
            phone: "+998 99 773 17 37",
            email: "shuxrat.barotov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
            image: img1
        },
        {
            name: "Niyazov Fazliddin Sayfitdinovich",
            position: "Rektor maslahatchisi",
            phone: "+998 90 711 96 97",
            email: "fazliddin.niyazov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
            image: img2
        },
        {
            name: "Ochilova Dildora Toshpulatovna",
            position: "Reja-moliya bo'limi boshlig'i",
            phone: "+998 88 855 20 12",
            email: "dildora.ochilova@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
            image: img3
        },
        {
            name: "Nusratov Farruxmirzo Furqat o'g'li",
            position: "Iqtisodchi",
            phone: "+998 94 217 11 12",
            email: "farruxmirzo.nusratov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
            image: img4
        },
        {
            name: "Qurbonov O'ktam Radjabovich",
            position: "O'quv va magistratura bo'limi boshlig'i",
            phone: "+998 93 809 66 05",
            email: "oktam.qurbonov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
            image: img5
        },
        {
            name: "Haydarov Shahriyor Shuxrat o'g'li",
            position: "Yoshlar bilan ishlash, ma'naviyat va ma'rifat bo'limi boshlig'i",
            phone: "+998 90 635 96 16",
            email: "shahriyor.haydarov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
            image: img6
        },
        {
            name: "Qo'yliyev Ulug'bek Ravshanovich",
            position: "Sirtqi bo'lim boshlig'i",
            phone: "+998 94 322 57 75",
            email: "ulugbek.qoyliyev@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
            image: img7
        },
        {
            name: "Usmonova Surayyo Muxitdinovna",
            position: "Ilmiy-tadqiqotlar, innovatsiyalar va ilmiy-pedagogik kadrlar tayyorlash sektori boshlig'i",
            phone: "+998 93 651 30 10",
            email: "surayyo.usmonova@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
            image: img8
        },
        {
            name: "Jo'rayev Uchqun Yusuf o'g'li",
            position: "Registrator ofisi boshlig'i",
            phone: "+998 99 708 78 04",
            email: "uchqun.jorayev@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
            image: img9
        },
        {
            name: "Normurodov Olmos Dilshod o'g'li",
            position: "Ta'lim sifatini nazorat qilish bo'limi boshlig'i o'rinbosari",
            phone: "+998 94 025 15 29",
            email: "olmos.normurodov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
            image: img10
        },
        {
            name: "Karimov Behruz Ibrohimbekovich",
            position: "Marketing va talabalar amaliyoti bo'limi boshlig'i",
            phone: "+998 90 635 56 58",
            email: "behruz.karimov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
            image: img11
        },
        {
            name: "Raxmatov Nurbek Erkinovich",
            position: "Psixologiya va xorijiy tillar fakulteti dekan o'rinbosari",
            phone: "+998 90 710 64 46",
            email: "nurbek.raxmatov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
            image: img12
        },
        {
            name: "Xalilov Bekzod Jobir o'g'li",
            position: "Oliy ta'lim jarayonlarini boshqarish (HEMIS) axborot tizimi mas'ul xodimi",
            phone: "+998 94 771 01 24",
            email: "bekzod.xalilov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
            image: img13
        },
        {
            name: "Baratova Dilafruz Sharifovna",
            position: "Psixologiya kafedrasi mudiri",
            phone: "+998 94 445 36 66",
            email: "dilafruz.baratova@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
            image: img14
        },
        {
            name: "Qurbonov Abdujalil Maxmutovich",
            position: "Filologiya kafedrasi mudiri",
            phone: "+998 93 476 06 75",
            email: "abdujalil.qurbonov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
            image: img15
        },
        {
            name: "Kurbanov Baxodir Samatovich",
            position: "Pedagogika va umumiy fanlar kafedrasi mudiri",
            phone: "+998 99 707 36 50",
            email: "baxodir.kurbanov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
            image: img16
        }
    ];
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
                    <div className=" flex flex-wrap  ">
                        {/* Main Content (2/3 width) */}

                        {/* Main Content (2/3 width) */}
                        <div className="w-full xl:w-2/3 p-2">
                            <div className="my-12">
                                <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
                                    Bo'lim boshliqlari
                                </h2>

                                {/* Staff Grid */}
                                <div className="flex flex-wrap gap-6">
                                    {staffMembers.map((member, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.9, delay: index * 0.1 }}
                                            className="bg-white rounded-xl w-64 shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                                        >
                                            <div className="h-72 w-64 overflow-hidden">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            <div className="p-2">
                                                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                                                <p className="text-gray-600 mb-4">{member.position}</p>

                                                {/* Contact Information */}
                                                <div className="space-y-2">
                                                    {member.phone && (
                                                        <div className="flex items-center text-start gap-2">
                                                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                            </svg>
                                                            <a href={`tel:${member.phone}`} className="text-gray-700 hover:text-blue-600">
                                                                {member.phone}
                                                            </a>
                                                        </div>
                                                    )}

                                                    {member.email && (
                                                        <div className="flex items-center text-start gap-2">
                                                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                            </svg>
                                                            <a href={`mailto:${member.email}`} className="text-gray-700 hover:text-blue-600">
                                                                {member.email}
                                                            </a>
                                                        </div>
                                                    )}

                                                    {member.workHours && (
                                                        <div className="flex items-center text-start gap-2">
                                                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            <span className="text-gray-700">{member.workHours}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
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

export default ProRectorUniversity;
