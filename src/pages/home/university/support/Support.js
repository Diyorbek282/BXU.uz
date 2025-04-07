import React from "react";
import bgImage from "../../../../images/header2.jpg";
import Header from "../../../header2/Header";

function Support() {
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
    <div>
      <header class="bg-blue-700 text-white py-6 mx-8 my-4 rounded-4 shadow-md">
        <div class="container mx-auto px-4">
          <h1 class="text-3xl font-bold">
            Talabalarni qo'llab-quvvatlash markazi
          </h1>
          <p class="mt-2 text-blue-100">
            Talabalarning o'sishi va rivojlanishi uchun xizmat ko'rsatuvchi
            markaz
          </p>
        </div>
      </header>

      <main class="container mx-auto px-4 py-8">
        <section class="mb-12 bg-white p-6 rounded-lg shadow-sm">
          <p class="text-gray-700 leading-relaxed">
            Talabalar bilan ishlash bo'limi - talabalarning o'sishi va
            rivojlanishi uchun xizmat ko'rsatadigan, talabalar muvaffaqiyatga
            erishishida qo'llab-quvvatlaydigan bo'lim.
          </p>
          <p class="mt-4 text-gray-700 font-medium">
            Bizning bo'limda siz quyidagi xizmatlardan foydalanishingiz mumkin:
          </p>
        </section>

        <div class="grid md:grid-cols-3 gap-6">
          <section class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 class="text-xl font-bold text-blue-700 mb-4 flex items-center">
              <i class="fas fa-user-graduate mr-2"></i>
              Talabalar uchun xizmatlar
            </h2>
            <ul class="space-y-3">
              <li class="flex items-start">
                <i class="fas fa-file-alt text-blue-500 mt-1 mr-2"></i>
                <div>
                  <span class="font-medium">Ma'lumotnoma</span>
                  <p class="text-sm text-gray-600">
                    (harbiy xizmat va boshqa joylar uchun)
                  </p>
                  <p class="text-sm text-gray-600">ID kartani tiklash uchun</p>
                </div>
              </li>
              <li class="flex items-start">
                <i class="fas fa-book-open text-blue-500 mt-1 mr-2"></i>
                <div>
                  <span class="font-medium">Imtihonlarga tayyorlanish</span>
                  <p class="text-sm text-gray-600">
                    Talabalar muammolarini hal qilishda yordam berish
                  </p>
                </div>
              </li>
            </ul>
            <button class="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
              Batafsil ma'lumot
            </button>
          </section>
          <section class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 class="text-xl font-bold text-blue-700 mb-4 flex items-center">
              <i class="fas fa-briefcase mr-2"></i>
              Karyera markazi
            </h2>
            <ul class="space-y-3">
              <li class="flex items-start">
                <i class="fas fa-user-tie text-blue-500 mt-1 mr-2"></i>
                <div>
                  <span class="font-medium">Ishga joylash xizmati</span>
                </div>
              </li>
              <li class="flex items-start">
                <i class="fas fa-certificate text-blue-500 mt-1 mr-2"></i>
                <div>
                  <span class="font-medium">Malaka olishga joylashtirish</span>
                </div>
              </li>
            </ul>
            <button class="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
              Arizani yuborish
            </button>
          </section>

          <section class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 class="text-xl font-bold text-blue-700 mb-4 flex items-center">
              <i class="fas fa-calendar-alt mr-2"></i>
              Tadbir xizmatlari
            </h2>
            <ul class="space-y-3">
              <li class="flex items-start">
                <i class="fas fa-microphone text-blue-500 mt-1 mr-2"></i>
                <div>
                  <span class="font-medium">
                    Tadbir tashkil etish masalalari
                  </span>
                </div>
              </li>
              <li class="flex items-start">
                <i class="fas fa-plane text-blue-500 mt-1 mr-2"></i>
                <div>
                  <span class="font-medium">Sayohat tashkil etish</span>
                </div>
              </li>
            </ul>
            <button class="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
              Tadbirga yozilish
            </button>
          </section>
        </div>

        <section class="mt-12 bg-blue-700 text-white p-8 rounded-lg text-center">
          <h2 class="text-2xl font-bold mb-4">Yordam kerakmi?</h2>
          <p class="mb-6 max-w-2xl mx-auto">
            Agar sizda qo'shimcha savollar bo'lsa yoki yordam kerak bo'lsa, biz
            bilan bog'laning
          </p>
          <button class="bg-white text-blue-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-full transition-colors">
            <i class="fas fa-phone-alt mr-2"></i> Bog'lanish
          </button>
        </section>
      </main>
    </div>
      </div>
  );
}

export default Support;
