import React, { useEffect, useState } from "react";
import Header from "../../../header2/Header.js";
import bgImage from "../../../../images/header2.jpg";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Footer from "../../../footer/Footer";

import { useTranslation } from "react-i18next";
import { Modal } from "react-responsive-modal";
import { Link, useLocation } from "react-router-dom";
import ApiCall, { baseUrl } from "../../../../config";
import down from "../../../newspaper/images/img.png";
import Zoom from "react-reveal/Zoom";
import SidebarRight from "../sidebarright/SidebarRight.js";

import img1 from "./img/476642320_593580813504539_1321905366275359440_n.jpg";
import img2 from "./img/476643881_593580486837905_8404113133019912825_n.jpg";
import img3 from "./img/476998484_593580810171206_6837146833743752723_n.jpg";
import img4 from "./img/477574308_593580800171207_8792399455945935525_n.jpg";
import img5 from "./img/477861453_593580783504542_1490787179038922409_n.jpg";
import img6 from "./img/image1.png";
import img7 from "./img/image2.png";
import img8 from "./img/image3.png";
import img9 from "./img/image4.png";
import img10 from "./img/image5.png";
import img11 from "./img/image6.png";
import img12 from "./img/image7.png";
import img13 from "./img/image8.png";
import img14 from "./img/image9.png";
import img15 from "./img/image10.png";
import img16 from "./img/image11.png";
import img17 from "./img/image12.png";
import img18 from "./img/image13.png";
import img19 from "./img/1.jpg";
import img20 from "./img/2.jpg";
import img21 from "./img/3.jpg";
import img22 from "./img/4.jpg";
import img23 from "./img/5.jpg";
import img24 from "./img/6.jpg";
import img25 from "./img/7.jpg";

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
  const [loading, setLoading] = useState(true);

  // Image gallery data
  const galleryImages = [
    { id: 1, src: img1, title: "Memorandum imzolash marosimi 2023" },
    { id: 2, src: img2, title: "Universitetlar hamkorligi shartnomasi" },
    { id: 3, src: img3, title: "Xalqaro hamkorlik" },
    { id: 4, src: img4, title: "Ta'lim almashinuvi dasturi" },
    { id: 5, src: img5, title: "Akademik hamkorlik shartnomasi" },
  ];

  useEffect(() => {
    if (!localStorage.getItem("isPageLoaded")) {
      localStorage.setItem("isPageLoaded", "true");
      window.location.reload();
    } else {
      fetchNewspapers();
    }
  }, []);

  const fetchNewspapers = async () => {
    try {
      setLoading(true);
      const response = await ApiCall(
        "/api/v1/memorandum",
        "GET",
        null,
        null,
        true
      );
      setNewspapersByYear(response.data);
    } catch (error) {
      console.error("Error fetching newspapers:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (item) => {
    try {
      const response = await fetch(
        `${baseUrl}/api/v1/file/getFile/${item?.mainPhoto?.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/pdf",
          },
        }
      );

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
      className="w-full h-36 xl:h-72 md:h-48 bg-[#DCDCDC] bg-cover bg-center text-center text-black"
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
      <div className="container mx-auto py-12 pb-32">
        <div>
          <div className="flex flex-wrap mt-16">
            {/* Main Content (2/3 width) */}
            <div className="w-full xl:w-2/3 mt-16">
              {/* Buxoro Conference */}
              <div className="mb-12 px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-600">
                  Xalqaro Konferensiya 2025
                </h1>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold mb-4 text-center text-blue-800">
                    Buxoro psixologiya va xorijiy tillar instituti tomonidan
                    2025 yilning 16-mart kuni "PSIXOLOGIYA FANLARI BO'YICHA
                    XALQARO KONFRENSIYA" bo'lib o'tdi.
                  </h2>

                  <p className="text-lg mb-4">
                    Ushbu konfrensiyada O'zbekiston Respublikasida faoliyat olib
                    borayotgan malakali mutaxasislar, ilmiy darajalarga ega
                    bo'lgan professor-o'qituvchilar (DSc, PhD) o'z chiqishlarida
                    Psixologiya fanida so'ngi ilmiy yangiliklar, takliflar va
                    kelgusida dolzarb mavzular haqida ma'ruzalar o'qishdi.
                  </p>
                  <p className="text-lg mb-4">
                    Konfrensiyada xorij olimlari ham o'z chiqishlarida,
                    Psixologiya fanlari o'sishida O'zbekiston psixolog olimlari
                    hissalari haqida, qolaversa xalqaro universitetlar bilan
                    doimiy hamkorlik masalalari bo'yicha o'z takliflarini
                    bildirishdi.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <img
                      src={img7}
                      alt="Buxoro Konferensiya 2025"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <img
                      src={img8}
                      alt="Buxoro Konferensiya 2025"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <img
                      src={img9}
                      alt="Buxoro Konferensiya 2025"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <img
                      src={img10}
                      alt="Buxoro Konferensiya 2025"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <img
                      src={img11}
                      alt="Buxoro Konferensiya 2025"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                </div>
                {/* Turkiya ankara */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
                      Xalqaro Hamkorlik: Anqara Yildirim Boyazid Universiteti
                      bilan
                    </h2>
                    <p className="text-lg text-gray-600">
                      Turkiya va O'zbekiston universitetlari o'rtasidagi
                      strategik hamkorlik
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Text Content */}
                    <div className="md:w-1/2">
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">
                          Professor Qosimov Ali Asqarxonning Tashrifi
                        </h3>
                        <p className="text-lg mb-4">
                          Turkiyaning Anqara Yildirim Boyazid universiteti
                          professori, xalqaro hamkorlik bo'yicha yetakchi
                          mutaxassis Qosimov Ali Asqarxon Aslamxon o'g'li Buxoro
                          xalqaro universitetiga tashrif buyurdi.
                        </p>
                        <p className="text-lg mb-4">
                          Mehmon universitetimizda yaratilgan zamonaviy
                          sharoitlar bilan tanishdi va "Psixologiya"
                          magistratura mutaxassisligi talabalariga "Din
                          psixologiyasi" mavzusida maxsus ma'ruza qildi.
                        </p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">
                          Imzolangan Kelishuvlar
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            Strategik hamkorlik memorandumi
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            O'qituvchilar almashinuvi dasturi
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            Qo'shma ilmiy tadqiqotlar olib borish
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Image Gallery */}
                    <div className="md:w-1/2">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="col-span-2">
                          <img
                            src={img19}
                            alt="Professor Qosimov Ali Asqarxon ma'ruza paytida"
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                          />
                          <p className="text-sm text-gray-500 mt-1 text-center">
                            Professor Qosimov talabalar bilan suhbat
                          </p>
                        </div>
                        <div>
                          <img
                            src={img20}
                            alt="Universitetlararo kelishuv imzolash"
                            className="w-full h-40 object-cover rounded-lg shadow-md"
                          />
                        </div>
                        <div>
                          <img
                            src={img21}
                            alt="Hamkorlik muzokaralari"
                            className="w-full h-40 object-cover rounded-lg shadow-md"
                          />
                        </div>
                        <div>
                          <img
                            src={img22}
                            alt="Tadbir davomida suratlar"
                            className="w-full h-40 object-cover rounded-lg shadow-md"
                          />
                        </div>
                        <div>
                          <img
                            src={img23}
                            alt="Psixologiya bo'limi bilan uchrashuv"
                            className="w-full h-40 object-cover rounded-lg shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">
                      Kelajakdagi Hamkorlik Rejalari
                    </h3>
                    <p className="text-gray-700">
                      Ikki universitet o'rtasida qo'shma magistratura
                      dasturlarini ishlab chiqish, xalqaro konferensiyalar
                      tashkil etish va ilmiy jurnallar chop etish
                      rejalashtirilmoqda.
                    </p>
                  </div>
                </div>
              </div>
              {/* Conference Information Section */}
              <div className="mb-12 px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-600">
                  Xalqaro Konferensiya 2024
                </h1>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-2xl font-semibold mb-4 text-center text-blue-800">
                    2024 yilda Samarqand Davlat Universitetida nufuzli xalqaro
                    konferensiya bo'lib o'tdi.
                  </p>

                  <p className="text-lg mb-4">
                    Ushbu konferensiyada dunyoning 40 dan ortiq mamlakatlarining
                    oliygohlaridan tashrif buyurgan psixolog olimlarining
                    ma'ruzalari tinglandi.
                  </p>

                  <p className="text-lg mb-4">
                    Ushbu ma'ruzalarda so'nggi yillarda psixologiya sohasidagi
                    ilmiy yangiliklar, tajribalar, jurnallar va kitoblar haqida
                    ma'lumotlar bilan bo'lishildi.
                  </p>

                  <p className="text-lg mb-4">
                    O'zbekistonlik psixolog olimlar ham konferensiyada ishtirok
                    etishdi. Ushbu konferensiyadan ko'zlangan asosiy maqsad
                    O'zbekistonda psixologiyaning rivojlanishi va jamiyatimizga
                    yetuk mutaxassislar tayyorlash borasida bir nechta xalqaro
                    memorandumlar imzolandi.
                  </p>
                  <img
                    src={img6}
                    alt="Conference"
                    className="w-full h-auto mt-4 rounded-lg shadow-md"
                  />
                </div>

                {/* Turkia memorandum */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold mb-4 text-center text-blue-800">
                    BUXORO XALQARO UNIVERSITETI rektori boshchiligidagi
                    delegatsiya Turkiyaning eng nufuzli oliy ta’lim muassasalari
                    bilan xalqaro hamkorlik yo’llarini ochish bo’yicha xalqaro
                    konferensiya bo'lib o'tdi.
                  </h2>
                  <p className="text-lg mb-4">
                    Ushbu tashrifda bir necha xalqaro aloqalar yo’lga qo’yildi.
                  </p>
                  <p className="text-lg mb-4">
                    Masalan Turkiyaning oliygohlarida BUXORO XALQARO
                    UNIVERSITETI professor-o’qituvchilarinning malaka oshirish
                    amaliyoti qolaversa Xalqaro kredit-modul talablariga ko’ra
                    talaba almashinuvi va qo’shma dasturga oid loyihalar
                    to’g’risida tegishli hujjatlar imzolandi.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <img
                      src={img11}
                      alt="Buxoro Konferensiya 2025"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <img
                      src={img12}
                      alt="Buxoro Konferensiya 2025"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <img
                      src={img13}
                      alt="Buxoro Konferensiya 2025"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <img
                      src={img14}
                      alt="Buxoro Konferensiya 2025"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <img
                      src={img15}
                      alt="Buxoro Konferensiya 2025"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                </div>

                {/* Kazak memorandum */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold mb-4 text-center text-blue-800">
                    BUXORO XALQARO UNIVERSITETI rektori boshchiligidagi
                    delegatsiya Qozoqistonning eng nufuzli oliy ta’lim
                    muassasalari bilan xalqaro hamkorlik yo’llarini ochish
                    bo’yicha xalqaro konferensiya bo'lib o'tdi.
                  </h2>
                  <p className="text-lg mb-4">
                    Ushbu tashrifda bir necha xalqaro aloqalar yo’lga qo’yildi.
                  </p>
                  <p className="text-lg mb-4">
                    Masalan Qozoqistonning oliygohlarida BUXORO XALQARO
                    UNIVERSITETI professor-o’qituvchilarinning malaka oshirish
                    amaliyoti qolaversa Xalqaro kredit-modul talablariga ko’ra
                    talaba almashinuvi va qo’shma dasturga oid loyihalar
                    to’g’risida tegishli hujjatlar imzolandi.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <img
                      src={img16}
                      alt="Buxoro Konferensiya 2025"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <img
                      src={img17}
                      alt="Buxoro Konferensiya 2025"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <img
                      src={img18}
                      alt="Buxoro Konferensiya 2025"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Image Gallery Section */}
              <div className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-600">
                  Memorandumlarimiz
                </h1>
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
                  Hamkorlik fotolavhalari
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                  {galleryImages.map((image) => (
                    <div
                      key={image.id}
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                      onClick={() => handleImageClick(image.src)}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-800">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents Section */}
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
                  Memorandum hujjatlari
                </h2>

                <div className="flex flex-wrap justify-center">
                  {newspapersByYear?.map((item) => (
                    <div
                      key={item.id}
                      className="px-4 h-auto rounded w-full xl:w-1/2 mb-6"
                    >
                      <div className="bg-white h-auto hover:shadow-xl rounded-xl border-[2px] transition-all duration-300">
                        <img
                          style={{
                            width: "100%",
                            height: "180px",
                            objectFit: "cover",
                          }}
                          className="rounded-t-xl"
                          src={`${baseUrl}/api/v1/file/getFile/${item?.photos[0]?.id}`}
                          alt={item.title || "News image"}
                        />
                        <h2 className="my-1 text-[18px] p-2 font-medium">
                          {item.title}
                        </h2>
                        <div className="p-4 gap-2 pb-2 flex items-center">
                          <button
                            className="flex gap-1 items-center text-blue-600 hover:text-blue-800 transition-colors"
                            onClick={() => handleDownload(item)}
                          >
                            <img
                              width={22}
                              height={20}
                              src={down}
                              alt="Download icon"
                              className="mr-1"
                            />
                            Yuklab olish
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <SidebarRight />
          </div>
        </div>
      </div>

      <Modal open={open} onClose={handleClose} center>
        {currentImage && (
          <img
            src={currentImage}
            alt="Zoomed"
            className="w-full h-auto max-h-[90vh] object-contain"
          />
        )}
      </Modal>
      <Footer />
    </div>
  );
}

export default PartnerUniversity;
