import React from "react";
import Calender from "./Calender";
import Events from "./Events";
import JobPosting from "./JobPosting";

function AnaSayfa() {
  return (
    <div className="items-center justify-center ">
      <header className="font-bold md:text-l lg:text-xl xl:text-2xl 2xl:text-4xl bg-gradient-to-r from-gray-500 to-black text-center text-white w-full">
        AnaSayfa
      </header>
      <div className=" flex flex-col items-center justify-center pt-12 ">
        <div className="flex flex-direction  2xl:pr-[550px]  ">
          {/* Card yapılarının ve Takvimin olduğu bölüm */}
          <div className="2xl:pl-48 xl:pr-48 lg:pr-4 ">
            <div className=" flex flex-col  ">
              <div>
                <div className="flex flex-col pl-24 pr-24 ">
                  <Calender />
                </div>
              </div>
              <div className="">
                <div className=" pt-96 md:ml-8  ">
                  <Events />
                  <div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Duyurular ve Haberler Div Bölümü */}
          <div className="  md:w-24 md:h-48 md:pl-2 md:pr-48  md:text-center lg:pr-64  xl:pr-48 xl:pl-12   ">
            <h3 className=" text-center justify-center text-2xl font-bold mb-6 md:font-bold md:text-[20px] md:w-96">
              Duyurular ve Haberler
            </h3>
            <div
              className="max-h-[400px]  2xl:max-h-[460px]  2xl:w-[700px] 2xl:h-[360px] 2xl:pr-48 xl:w-[600px] xl:h-[700px] mr-4 lg:w-[400px] lg:h-[280px]  md:w-80 md:h-[330px] "
              style={{ overflowY: "scroll" }}
            >
              {/* Duyurular ve Haberler Buraya yazılacak*/}
              <div className="bg-gray-100 p-4 mb-4 rounded-2xl">
                <h2 className="text-lg font-bold">Yeni Özellik Eklendi</h2>
                <p>
                  Uygulamamızda şimdi daha hızlı ve kullanışlı bir arayüz
                  bulunmakta.
                </p>
              </div>
              <div className="bg-gray-100 p-4 mb-4 rounded-2xl">
                <h2 className="text-lg font-bold">Önemli Güncelleme</h2>
                <p>
                  Yeni güncelleme ile hatalar düzeltildi ve performans
                  iyileştirmeleri yapıldı.
                </p>
              </div>
              <div className="bg-gray-100 p-4 mb-4 rounded-2xl">
                <h2 className="text-lg font-bold">Yeni Kampanya Başladı</h2>
                <p>
                  Şimdi alışverişlerinizde %20 indirim fırsatını kaçırmayın.
                </p>
              </div>
              <div className="bg-gray-100 p-4 mb-4 rounded-2xl">
                <h2 className="text-lg font-bold">Yeni Kampanya Başladı</h2>
                <p>
                  Şimdi alışverişlerinizde %20 indirim fırsatını kaçırmayın.
                </p>
              </div>
              <div className="bg-gray-100 p-4 mb-4 rounded-2xl">
                <h2 className="text-lg font-bold">Yeni Kampanya Başladı</h2>
                <p>
                  Şimdi alışverişlerinizde %20 indirim fırsatını kaçırmayın.
                </p>
              </div>
              <div className="bg-gray-100 p-4 mb-4 rounded-2xl">
                <h2 className="text-lg font-bold">Yeni Kampanya Başladı</h2>
                <p>
                  Şimdi alışverişlerinizde %20 indirim fırsatını kaçırmayın.
                </p>
              </div>
              <div className="bg-gray-100 p-4 mb-4 rounded-2xl">
                <h2 className="text-lg font-bold">Yeni Kampanya Başladı</h2>
                <p>
                  Şimdi alışverişlerinizde %20 indirim fırsatını kaçırmayın.
                </p>
              </div>
              <div className="bg-gray-100 p-4 mb-4 rounded-2xl">
                <h2 className="text-lg font-bold">Yeni Kampanya Başladı</h2>
                <p>
                  Şimdi alışverişlerinizde %20 indirim fırsatını kaçırmayın.
                </p>
              </div>
              <div className="bg-gray-100 p-4 mb-4 rounded-2xl">
                <h2 className="text-lg font-bold">Yeni Kampanya Başladı</h2>
                <p>
                  Şimdi alışverişlerinizde %20 indirim fırsatını kaçırmayın.
                </p>
              </div>
            </div>
            {/* Buraya iş ilanları açık pozisyonlar cartı gelecek */}
            <div className=" justify-center">
              <JobPosting />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnaSayfa;
