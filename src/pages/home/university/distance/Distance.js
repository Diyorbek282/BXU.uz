import React from "react";
import Header from "../../../header2/Header";
import Footer from "../../../footer/Footer";

function Distance() {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-14">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-6">
              Masofaviy Ta'lim Tizimi
            </h1>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Buxoro Xalqaro Universitetida Masofaviy Ta'lim
              </h2>
              <p className="text-lg mb-4">
                Buxoro Xalqaro Universitetida bugungi kunda zamon talablariga
                ko'ra masofaviy ta'lim ham yo'lga qo'yilgan. Bu esa korxona va
                tashkilotlarda ishlaydigan talabgorlar uchun juda ham qulay.
              </p>
              <p className="text-lg mb-4">
                Masofaviy ta'lim bo'yicha universitetda barcha shart-sharoitlar
                yaratilgan bo'lib, qolaversa professor-o'qituvchilarning
                videoyozuv darslari juda yuqori sifatda olingan.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Mavjud Masofaviy Ta'lim Yo'nalishlari
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Milliy g'oya, ma'naviyat asoslari va huquq ta'limi
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Psixologiya
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Iqtisodiyot
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Boshlang'ich ta'lim
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Maktabgacha ta'lim
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  O'zbek tili va adabiyoti
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Logistika (transport va boshqa sohalar bo'yicha)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Ona tili va adabiyoti
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Matematika
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Qo'shimcha ma'lumot:
              </h3>
              <p className="text-blue-900">
                Masofaviy ta'lim dasturiga yozilish uchun universitetning rasmiy
                veb-sayti yoki talabalar ishlari bo'limiga murojaat qilishingiz
                mumkin.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Distance;
