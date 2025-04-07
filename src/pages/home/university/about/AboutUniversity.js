import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-responsive-modal";

import Header from "../../../header2/Header";
import bgImage from "../../../../images/header2.jpg";

import Footer from "../../../footer/Footer";
import SidebarRight from "../sidebarright/SidebarRight";
import img from "../../../license/img.png";
import img2 from "../../../license/img_1.png";
import img3 from "../../../license/img_2.png";
import img4 from "../../../license/image.png";
import img5 from "../../../license/new1.png";
import img6 from "../../../license/new2.png";

function AboutUniversity(props) {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const { t } = useTranslation();

  const handleOpen = (imageUrl) => {
    setCurrentImage(imageUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-blue-50 min-h-screen">
      <div
        className="w-full h-36 xl:h-72 md:h-48 bg-cover bg-center text-center text-white relative"
        style={{
          backgroundImage: ` url(${bgImage})`,
          borderBottomRightRadius: "60px",
          borderBottomLeftRadius: "60px",
        }}
      >
        <Header />
        <div className="header_title absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">

          </h2>
        </div>
      </div>

      <div className="container mx-auto py-12 pb-32 px-4">
        <div className="flex flex-wrap">
          {/* Main Content (2/3 width) */}
          <div className="w-full xl:w-2/3 p-4 space-y-6">
            <h1 className="text-3xl font-semibold text-blue-800 border-b-2 border-blue-200 pb-2">
              BUXORO XALQARO UNIVERSITETI HAQIDA QISQACHA MA`LUMOT
            </h1>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-lg leading-relaxed text-gray-700">
                Prezidentimiz SH.M. Mirziyoyevning 2021 - yil 21-22 yanvar
                kunlari Buxoro viloyatiga tashrifi davomida va Xalq deputatlari
                viloyat Kengashining navbatdagi tashqari sessiyasida bergan
                topshiriqlari bo'yicha 4 - sonli bayonining 98 - bandiga asosan
                tashkil etilgan.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 mt-4">
                Oliygoximizda bugungi kunda 3 ta kampus umumiy hisobda 6000
                o`rinli o`quv binosi hamda 420 o`rinli talabalar yotoqxonasi
                mavjud. Bizda jami 16 ta bakalavr, 8 ta magistratura hamda 6 ta
                ta`lim shakli bo`yicha DOKTORANTURA (Psixologiya, Filologiya,
                Pedagogika fanlari bo'yicha) mavjud.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                src={img}
                alt="img"
                onClick={() => handleOpen(img)}
              />
              <img
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                src={img2}
                alt="img"
                onClick={() => handleOpen(img2)}
              />
              <img
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                src={img3}
                alt="img"
                onClick={() => handleOpen(img3)}
              />
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h5 className="text-lg font-medium text-gray-800">
                2021 yildan buyon "Raqamli ta'lim texnologiyalarini
                rivojlantirish markazi" bilan tuzilgan shartnoma asosan
                talabalarimiz hisoboti "HEMIS" platformasida olib boriladi.
                Hozir kunda 3 marotaba Magistratuta ta`limy o`nalishini bitirgan
                talabalarga diplomlar taqdim etildi.
              </h5>
            </div>

            <img
              className="w-full h-auto rounded-lg shadow-lg mt-4 cursor-pointer transition-transform duration-300 hover:scale-102 hover:shadow-xl"
              src={img4}
              alt="img"
              onClick={() => handleOpen(img4)}
            />

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-sm">
              <h5 className="text-lg font-medium text-gray-800">
                Oliygohimiz 4 yil davomida yuqori natijalarga ya'ni talabalar
                soni oshganligi, o'quv binolari ko'payganligi, talim sifati
                jahon talablariga javob bera olishi, ilmiy salohiyat 69 % ga
                yetganligi, ta'lim yo'nalishlar soni 24 ga yetganligi, oliy
                ta'limdan keyingi ta'lim xizmatlarini ko'rsatish uchun
                litsenziyaga ega bo'lganligi psixologiya bo'yicha ilmiy kengash
                tashkil qilinganligi, xalqaro ilmiy jurnallar muallifligini
                qo'lga kiritganligi tufayli 2025 yilning 28 mart kunidan boshlab
                oliygoh nomi BUXORO XALQARO UNIVERSITETI nomiga O'zbekiston
                Respublikasi Vazirlar Mahkamasining tegishli litsenziyasiga
                asosan o'zgartirildi.
              </h5>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <img
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                src={img5}
                alt="img"
                onClick={() => handleOpen(img5)}
              />
              <img
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                src={img6}
                alt="img"
                onClick={() => handleOpen(img6)}
              />
            </div>
          </div>

          {/* Sidebar Right */}
          <SidebarRight />
        </div>
      </div>

      <Footer />

      {/* Modal for displaying the image */}
      <Modal open={open} onClose={handleClose} center>
        {currentImage && (
          <img
            src={currentImage}
            alt="Zoomed License"
            className="w-full h-auto rounded-lg"
          />
        )}
      </Modal>
    </div>
  );
}

export default AboutUniversity;
