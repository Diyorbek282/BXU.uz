import React, {useEffect, useState} from 'react';
import Header from "../../../header2/Header.js";
import bgImage from "../../../../images/header2.jpg";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Footer from "../../../footer/Footer";

import { useTranslation } from 'react-i18next';
import {Modal} from "react-responsive-modal";
import { Link, useLocation } from 'react-router-dom';
import ApiCall, {baseUrl} from "../../../../config";
import down from "../../../newspaper/images/img.png";
import Zoom from 'react-reveal/Zoom';

function PartnerUniversity(props) {
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


    const [newspapersByYear, setNewspapersByYear] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        // Check if the page has been loaded before
        if (!localStorage.getItem('isPageLoaded')) {
            localStorage.setItem('isPageLoaded', 'true'); // Mark page as loaded
            window.location.reload(); // Reload the page only if it hasn't been loaded before
        } else {
            fetchNewspapers(); // Fetch newspapers data
        }
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    // Reset isPageLoaded flag to false when page content changes


    const fetchNewspapers = async () => {
        try {
            setLoading(true); // Set loading to true while fetching
            const response = await ApiCall('/api/v1/memorandum', 'GET', null, null, true);
            setNewspapersByYear(response.data); // Update the state with the fetched data
        } catch (error) {
            console.error("Error fetching newspapers:", error);
        } finally {
            setLoading(false); // Set loading to false once fetching is complete
        }
    };


    const handleDownload = async (item) => {
        try {
            const response = await fetch(`${baseUrl}/api/v1/file/getFile/${item?.mainPhoto?.id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/pdf",
                },
            });

            if (!response.ok) throw new Error("Failed to download file");

            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = downloadUrl;
            link.download = `${item.title}.pdf`;
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            console.error("Error downloading file:", error);
        }
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
                <h2 className="my-4 text-white text-3xl lg:text-4xl"></h2>
            </div>
            <div className="container mx-auto  py-12  pb-32">
                <div>
                    <div className=" flex flex-wrap mt-16">
                      
                        {/* Main Content (2/3 width) */}
                        <div className="w-full xl:w-2/3 mt-16">

                            <div>



                            </div>





                            <div className="flex flex-wrap justify-center  ">
                            {newspapersByYear?.map((item) => (
                                <div key={item.id} className="px-4 h-auto rounded w-full xl:w-1/2 ">
                                    <div >
                                        <div className="bg-white h-auto hover:shadow-xl rounded-xl border-[2px]">
                                            <img
                                                style={{width: "340px", height: "280px"}}
                                                className={"rounded-t-xl"}
                                                src={`${baseUrl}/api/v1/file/getFile/${item?.photos[0]?.id}`}
                                                alt={item.title || "News image"}
                                            />
                                            <h2 className="my-1 text-[18px] p-2">{item.title}</h2>
                                            <div className="p-4  gap-2 pb-2 flex items-center">
                                                <button className="flex gap-1" onClick={() => handleDownload(item)}>
                                                    <img width={22} height={20} src={down} alt="Download icon"/>
                                                    Yuklab olish
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
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

export default PartnerUniversity;
