import React from "react";
import Hearder from "../../../header2/Header";
import Footer from "../../../footer/Footer";
import img1 from "./image.png";

function AssociationStudent() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Hearder />

      <main className="flex-grow container mx-auto px-4 py-8 mt-14 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
            BARAKAYEV XUMOYUN MIRZO ILXOMOVICH
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Universitet "O'zbekiston yoshlar ittifoqi" BT yetakchisi
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4">
            O'ZBEKISTON YOSHLAR ITTIFOQINING BUXORO XALQARO UNIVERSITETIDAGI
            BOSHLANG'ICH TASHKILOTINING MAQSAD VA VAZIFALARI
          </h3>

          <h5 className="text-lg text-gray-700 mb-6 leading-relaxed">
            Boshlang'ich tashkilotning asosiy maqsadi, ta'lim muassasalarida
            yoshlarning ta'lim-tarbiya olishi uchun munosib sharoit yaratib
            berishga ko'maklashish, yoshlarning huquq va manfaatlarini himoya
            qilish hamda har tomonlama barkamol shaxslar bo'lib yetishishiga
            munosib hissa qo'shishdan iborat.
          </h5>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Boshlang'ich tashkilot o'z oldiga quyidagi vazifalarni qo'yadi:
            </h3>

            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              <li className="leading-relaxed">
                yosh avlodni ona Vatanga muxabbat va sadoqat ruhida tarbiyalash,
                ularning ongiga milliy istiqlol g'oyasi, milliy qadriyatlar,
                diniy bag'rikenglik, millatlararo totuvlik va oilaviy
                qadriyatlarni chuqur singdirish;
              </li>
              <li className="leading-relaxed">
                yoshlarga O'zbekiston Respublikasi Konstitutsiyasi va
                qonunlarida belgilangan fuqarolik huquq va burchlarini
                anglatish, ularga mamlakatda amalga oshirilayotgan demokratik va
                huquqiy islohotlarni mazmun-mohiyatini tushuntirish;
              </li>
              <li className="leading-relaxed">
                oliy ta'lim muassasasi yoshlarining muammolari, ta'lim sifati,
                fanlarni o'zlashtirish darajasi, davomati, darsliklar va
                kutubxonadan foydalanish darajasini o'rganib borish, yoshlar
                murojaatlarini ko'rib chiqish va hal etishga ko'maklashish;
              </li>
              <li className="leading-relaxed">
                yoshlarning chuqur bilim olishi, chet tillarini o'rganishi va
                zamonaviy axborot kommunikatsiya texnologiyalarini puxta
                egallashi hamda ularni kasb-hunarga yo'naltirishga qaratilgan
                chora tadbirlarni amalga oshirish;
              </li>
              <li className="leading-relaxed">
                iste'dodli yoshlarni kashf etish, ularni har tomonlama
                qo'llab-quvvatlash va rag'batlantirishga qaratilgan ishlarni
                amalga oshirish, intellektual va ijodiy qobilyatlarini
                rivojlantirishga ko'maklashadigan klub va to'garaklar
                faoliyatini tashkil etish;
              </li>
              <li className="leading-relaxed">
                imkoniyati cheklangan hamda maxsus ehtiyojli yoshlarning
                inklyuziv ta'lim olishi uchun qulay sharoit yaratishga
                qaratilgan ishlarni qo'llab-quvvatlash;
              </li>
              <li className="leading-relaxed">
                notinch oila farzandlari, tarbiyasi o'g'ir va nosog'lom muhitga
                tushib qolgan yoshlarni jamiyatga ijtimoiy moslashuvi hamda
                darslarni muntazam qoldirib kelayotgan talabalarni ta'lim
                jarayoniga qaytarish, qizlar o'rtasida erta nikohlarning oldini
                olish bo'yicha tizimli ishlar olib borish;
              </li>
              <li className="leading-relaxed">
                yoshlar o'rtasida jinoyatchilik va huquqbuzarlikning oldini
                olishga qaratilgan huquqiy-tarbiyaviy ishlarni amalga oshirish;
              </li>
              <li className="leading-relaxed">
                yoshlar o'rtasida kitobxonlikni keng targ'ib qilish, ularning
                kitobga bo'lgan muhabbatini oshirish va kitobxonlik madaniyatini
                rivojlantirish;
              </li>
              <li className="leading-relaxed">
                yoshlarda "ommaviy madaniyat" niqobi ostidagi zararli illatlar,
                axborot hurujlari, diniy aqidaparastlik, missionerlik va
                ekstremistik g'oyalarga qarshi mafkuraviy immunitetni
                shakllantirish;
              </li>
              <li className="leading-relaxed">
                oliy ta'lim muassasasi yoshlar o'rtasida yoshlar turizmini
                rivojlantirish, ularni o'zlari yashayotgan hududdagi tarixiy
                obidalar, muqaddas qadamjolar, muzeylar, teatrlar, mustaqillik
                davrida barpo etilgan inshootlarga tashrifini uyushtirish;
              </li>
              <li className="leading-relaxed">
                yoshlar, ayniqsa qiz bolalar o'rtasida sportni keng targ'ib
                etish, ularning sportga bo'lgan qiziqishini qo'llab quvvatlash
                va turli sport musoboqalarida ishtirok etishi uchun zarur
                sharoitlarni yaratib berish;
              </li>
              <li className="leading-relaxed">
                yoshlarga tibbiy madaniyat, xususan, kasalliklardan himoyalanish
                yo'llarini keng tushuntirishga qaratilgan targ'ibot tadbirlarini
                tashkil etish;
              </li>
              <li className="leading-relaxed">
                yoshlar o'rtasida ekologiya atrof muhitni muhofaza qilish,
                tabiiy resurslardan oqilona foydalanishni targ'ib qilish orqali
                ularda ekologik madaniyatni yuksaltirish, ekologik
                tashabbuslarni qo'llab-quvvatlash;
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              YOSHLAR ITTIFOQIGA A'ZOLIKKA QABUL QILISH
            </h3>

            <p className="text-gray-700 mb-4">
              Yoshlar Ittifoqiga yuridik va jismoniy shaxslar ushbu Ustavda
              belgilangan tartibda a'zo bo'lishlari mumkin:
            </p>

            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              <li className="leading-relaxed">
                Ittifoqning maqsadini qo'llab-quvvatlash istagini bildirgan,14
                yoshga to'lgan va 30 yoshdan oshmagan O'zbekiston
                Respublikasining fuqarolari va O'zbekiston Respublikasida
                muntazam yashab kelayotgan fuqaroligi bo'lmagan jismoniy
                shaxslar Ittifoqning a'zosi bo'lishi mumkin.
              </li>
              <li className="leading-relaxed">
                Ittifoqning jismoniy shaxs bo'lgan a'zosi Ittifoqning rahbar
                organlariga saylangan taqdirda unga nisbatan ushbu Ustavning
                4.2. bandida ko'zda tutilgan yoshga oid cheklov qo'llanilmaydi.
              </li>
              <li className="leading-relaxed">
                Jismoniy shaxslarni Ittifoqqa a'zolikka qabul qilish va chiqish
                Ittifoq boshlang'ich tashkilotining Umumiy yig'ilishi tomonidan,
                shuningdek boshlang'ich tashkilot Kengashining yig'ilishi
                (boshlang'ich tashkilotda Kengash shakllantirilgan taqdirda)
                tomonidan amalga oshiriladi.
              </li>
              <li className="leading-relaxed">
                Jismoniy shaxslarni Boshlang'ich tashkilot tegishli rahbar
                organining a'zolikka qabul qilish va chiqish to'g'risidagi
                qarori yakuniy hisoblanadi va Ittifoqning yuqori organlari
                tomonidan tasdiqlanishi talab qilinmaydi.
              </li>
              <li className="leading-relaxed">
                Yoshlar sohasidagi nodavlat notijorat tashkilotlari va yoshlar
                sohasiga oid korxona, muassasa va tashkilotlar hamda ta'sis
                hujjatlari Ittifoqning Ustav maqsadlari, vazifalari va dasturiy
                hujjatlariga zid bo'lmagan boshqa yuridik shaxslar Ittifoqqa
                a'zo bo'lishi mumkin. Yuridik va jismoniy shaxslar Ittifoqqa
                a'zolikka qabul qilinishi uchun tegishli mazmundagi arizani
                taqdim etadilar.
              </li>
              <li className="leading-relaxed">
                Yuridik shaxslar Ittifoq a'zoligiga Ittifoqning mahalliy yoki
                hududiy kengashlari yig'ilishi qarori asosida qabul qilinadi va
                chiqariladi.
              </li>
              <li className="leading-relaxed">
                Jismoniy shaxslarning Ittifoqqa a'zoligi quyidagi hollarda bekor
                qilinishi mumkin: Ittifoq a'zosi arizasiga ko'ra;
              </li>
              <li className="leading-relaxed">
                Ittifoq a'zosining yoshi 30 yoshdan oshgach (Ittifoqning
                saylanadigan organlariga saylangan shaxslar bundan istisno);
              </li>
              <li className="leading-relaxed">
                Ittifoq a'zosi tomonidan ushbu Ustavga va O'zbekiston
                Respublikasi qonun hujjatlariga zid bo'lgan xatti-harakatlarga
                yo'l qo'yilganda;
              </li>
              <li className="leading-relaxed">
                Ittifoqning faoliyati tugatilganda.
              </li>
              <li className="leading-relaxed">
                Jismoniy shaxslarni Ittifoq a'zoligidan chiqarish to'g'risidagi
                qaror boshlang'ich tashkilotning Umumiy yig'ilishi yoki
                boshlang'ich tashkilot Kengashi tomonidan qabul qilinadi.
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* ITTIFOQ A'ZOLARINING HUQUQLARI */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              ITTIFOQ A'ZOLARINING HUQUQLARI:
            </h3>
            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              <li className="leading-relaxed">
                umumiy yig'ilishlar, konferensiyalar, Qurultoy, Ittifoqning
                rahbar organlari yig'ilishlari va Ittifoqning bosma davriy
                nashrlarida masalalarni muhokama qilish chog'ida o'z fikrini
                erkin ifoda etish;
              </li>
              <li className="leading-relaxed">
                shaxsan yoki o'z vakili orqali Ittifoqning saylanadigan
                organlari qarorlarini ishlab chiqishda ishtirok etish;
              </li>
              <li className="leading-relaxed">
                Ittifoqning saylanadigan rahbar organlari va nazorat-taftish
                organlariga saylash va saylanish;
              </li>
              <li className="leading-relaxed">
                Ittifoq organlari faoliyati to'g'risida ma'lumotlar olish,
                o'zlariga taalluqli bo'lgan masalalarni muhokama qilishda
                Ittifoq organlari faoliyatida ishtirok etish va fikr bildirish;
              </li>
              <li className="leading-relaxed">
                Ittifoq faoliyatida Ustav va Dastur doirasida ishtirok etish,
                Ittifoqning har qanday rahbar organiga ariza va takliflar bilan
                murojaat etish.
              </li>
            </ul>
          </div>

          {/* ITTIFOQ A'ZOLARINING ASOSIY MAJBURIYATLARI */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              ITTIFOQ A'ZOLARINING ASOSIY MAJBURIYATLARI:
            </h3>
            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              <li className="leading-relaxed">
                Ittifoqning Ustav maqsadlarini amalga oshirishda qatnashish;
              </li>
              <li className="leading-relaxed">
                yoshlar o'rtasida va jamiyatda Ittifoqning ta'siri va nufuzini
                oshirish;
              </li>
              <li className="leading-relaxed">
                Ittifoq rahbar organlari, boshlang'ich tashkilotlarning umumiy
                yig'ilishlari, shuningdek, Kengashi yig'ilishlari qarorlarini
                bajarish;
              </li>
              <li className="leading-relaxed">
                Ittifoqning boshlang'ich tashkiloti faoliyatida faol qatnashish.
              </li>
            </ul>
          </div>

          {/* BOSHLANG'ICH TASHKILOT FAOLIYATINING ASOSIY YO'NALISHLARI */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              BOSHLANG'ICH TASHKILOT FAOLIYATINING ASOSIY YO'NALISHLARI:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              O'zbekiston yoshlar ittifoqining Andijon davlat universitetidagi
              boshlang'ich tashkiloti o'z safiga 6119 nafar talaba-yoshlarni
              birlashtirgan bo'lib, amaldagi me'yoriy-huquqiy hujjatlarga binoan
              talaba-yoshlarni ijtimoiy himoyalash, ularning taklif va
              istaklarini o'rganish, mustaqil hayotdagi ilk qadamlarida
              ko'maklashish, o'qishdan bo'sh vaqtlarini ko'ngilli, mazmunli
              tashkil etish hamda Yoshlar ittifoqi atrofida birlashtirish bilan
              birga, ularda komil inson fazilatlarini tarbiyalash, yoshlarning
              dunyoqarashini bunyodkor g'oyalar bilan oziqlantirish,
              intellektual mulkka egalik tuyg'usini shakllantirish, tashabbus va
              yangiliklarini qo'llab-quvvatlash va talaba-yoshlarni Yoshlar
              ittifoqi atrofida birlashtirishdan iborat.
            </p>
          </div>

          {/* KENGASH TARKIBI */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              O'zbekiston yoshlar ittifoqining Buxoro xalqaro universitetidagi
              boshlang'ich tashkiloti Kengashi 13 nafar a'zodan iborat bo'lib,
              Kengash tarkibi:
            </h3>
            <ul className="space-y-3 list-decimal pl-5 text-gray-700">
              <li className="leading-relaxed">
                O'zbekiston yoshlar ittifoqi IBT Yoshlar yetakchisi
              </li>
              <li className="leading-relaxed">
                Yoshlar yetakchisining birinchi o'rinbosari
              </li>
              <li className="leading-relaxed">
                Faol va iqtidorli yoshlar bilan ishlash yo'nalishi yetakchisi
              </li>
              <li className="leading-relaxed">
                Tashabbus va yoshlar tadbirkorligi yo'nalishi yetakchisi
              </li>
              <li className="leading-relaxed">
                Ta'lim jarayoni sifatini monitoring qilish yo'nalishi yetakchisi
              </li>
              <li className="leading-relaxed">
                Muddatli harbiy xizmatni o'tab, o'qishga qabul qilingan
                talabalar bilan ishlash yo'nalishi yetakchisi
              </li>
              <li className="leading-relaxed">
                Yoshlar yetakchisining ma'naviy ma'rifiy ishlar bo'yicha
                o'rinbosari
              </li>
              <li className="leading-relaxed">
                Ma'naviy-ma'rifiy ishlar va yoshlar turizmi yo'nalishi
                yetakchisi
              </li>
              <li className="leading-relaxed">
                Sport, salomatlik yo'nalishi yetakchisi
              </li>
              <li className="leading-relaxed">
                Ijtimoiy himoyaga muhtoj va imkoniyat cheklangan talabalar bilan
                ishlash yo'nalishi yetakchisi
              </li>
              <li className="leading-relaxed">
                Tashkiliy-nazorat va kadrlar yo'nalishi yetakchisi
              </li>
              <li className="leading-relaxed">
                Matbuot kotibi, yoshlar media guruhi rahbari
              </li>
              <li className="leading-relaxed">
                Talabalar murojaatlari bilan ishlash yo'nalishi yetakchisi
                jamoatchilik asosida faoliyat ko'rsatmoqda.
              </li>
            </ul>
          </div>

          {/* TO'GARAKLAR VA KLUBLAR */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              O'zbekiston yoshlar ittifoqining Buxoro xalqaro universitetidagi
              boshlang'ich tashkiloti qoshida quyidagi to'garak hamda klublar
              tashkil etilgan:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-5 text-gray-700">
              <li className="leading-relaxed">
                "Vatan posbonlar" jamoat tuzilmasi
              </li>
              <li className="leading-relaxed">
                "Xumo" talabalar teatr-studiyasi
              </li>
              <li className="leading-relaxed">"Zakovat" intellectual klubi</li>
              <li className="leading-relaxed">"Quvnoqlar va zukkolar" klubi</li>
              <li className="leading-relaxed">
                "BXU press today" jurnalistlar kulubi
              </li>
              <li className="leading-relaxed">"Munozara" klubi</li>
              <li className="leading-relaxed">"Yosh ijodkorlar" to'garagi</li>
              <li className="leading-relaxed">"Chempionlar" klubi</li>
              <li className="leading-relaxed">"Siyosatchilar" to'garagi</li>
              <li className="leading-relaxed">
                "Tafakkur" intellektual to'garagi
              </li>
            </ul>
          </div>

          {/* LEADER PROFILE */}
          <div className="text-center mb-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">
              O'zbekiston yoshlar ittifoqi
            </h2>
            <div className="flex justify-center mb-4">
              <img
                src={img1}
                alt="O'zbekiston yoshlar ittifoqi"
                className="object-cover rounded-xl border-4 border-blue-200"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-2">
              ERGASHEV OMONILLO LUTFILLO O'G'LI
            </h3>
            <h5 className="text-lg text-gray-600 mb-6">
              Universitet "O'zbekiston yoshlar ittifoqi" BT yetakchisi
            </h5>

            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              O'ZBEKISTON YOSHLAR ITTIFOQINING ANDIJON DAVLAT UNIVERSITETIDAGI
              BOSHLANG'ICH TASHKILOTINING MAQSAD VA VAZIFALARI
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Boshlang'ich tashkilotning asosiy maqsadi, ta'lim muassasalarida
              yoshlarning ta'lim-tarbiya olishi uchun munosib sharoit yaratib
              berishga ko'maklashish, yoshlarning huquq va manfaatlarini himoya
              qilish hamda har tomonlama barkamol shaxslar bo'lib yetishishiga
              munosib hissa qo'shishdan iborat.
            </p>

            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Boshlang'ich tashkilot o'z oldiga quyidagi vazifalarni qo'yadi:
            </h3>
            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              <li className="leading-relaxed">
                yosh avlodni ona Vatanga muxabbat va sadoqat ruhida tarbiyalash,
                ularning ongiga milliy istiqlol g'oyasi, milliy qadriyatlar,
                diniy bag'rikenglik, millatlararo totuvlik va oilaviy
                qadriyatlarni chuqur singdirish;
              </li>
              <li className="leading-relaxed">
                yoshlarga O'zbekiston Respublikasi Konstitutsiyasi va
                qonunlarida belgilangan fuqarolik huquq va burchlarini
                anglatish, ularga mamlakatda amalga oshirilayotgan demokratik va
                huquqiy islohotlarni mazmun-mohiyatini tushuntirish
              </li>
              <li className="leading-relaxed">
                oliy ta'lim muassasasi yoshlarining muammolari, ta'lim sifati,
                fanlarni o'zlashtirish darajasi, davomati, darsliklar va
                kutubxonadan foydalanish darajasini o'rganib borish, yoshlar
                murojaatlarini ko'rib chiqish va hal etishga ko'maklashish;
              </li>
              <li className="leading-relaxed">
                yoshlarning chuqur bilim olishi, chet tillarini o'rganishi va
                zamonaviy axborot kommunikatsiya texnologiyalarini puxta
                egallashi hamda ularni kasb-hunarga yo'naltirishga qaratilgan
                chora tadbirlarni amalga oshirish;
              </li>
              <li className="leading-relaxed">
                iste'dodli yoshlarni kashf etish, ularni har tomonlama
                qo'llab-quvvatlash va rag'batlantirishga qaratilgan ishlarni
                amalga oshirish, intellektual va ijodiy qobilyatlarini
                rivojlantirishga ko'maklashadigan klub va to'garaklar
                faolivatini tashkil etish
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AssociationStudent;
