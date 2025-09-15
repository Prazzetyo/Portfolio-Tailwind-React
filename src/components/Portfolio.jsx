import React from 'react'
import portfolioMaknaJiwa from "../../src/assets/images/portfolio/maknajiwadashboard.png";
import portfolioTwitter from "../../src/assets/images/portfolio/twittersearch.png";
import portfolioWarehouse from "../../src/assets/images/portfolio/warehousegudang.png";
import portfolioFinna from "../../src/assets/images/portfolio/finnaproduk.png";
import portfolioRSKM from "../../src/assets/images/portfolio/ermrskm.jpg";

export default function Portfolio() {
  return (
    <section
            id="portfolio"
            className="bg-slate-100 pb-16 pt-36 dark:bg-slate-800"
          >
        <div className="container">
        <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                Portfolio
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white">
                Projek Terbaru
            </h2>
            <p className="font-medium text-secondary">
                Inilah beberapa karya yang saya buat dengan hati, logika, dan sedikit
                sentuhan desain. Setiap kode punya cerita. 💻✨
            </p>
            </div>
        </div>
        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
        <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
                <img src={portfolioRSKM} alt="RSKM" className="w-full" />
            </div>
            <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">
                ERM RSKM (2023-2025)
            </h3>
            <p className="text-base font-medium text-secondary">
                Projek gede ini aku kerjain bareng tim buat bikin sistem rekam medis elektronik di Rumah Sakit 
                Kristen Mojowarno. Jadi semua data pasien — dari IGD, rawat jalan, rawat inap, lab, radiologi, 
                farmasi sampai billing — nyambung jadi satu. Intinya biar dokter & perawat nggak ribet lagi, 
                pasien juga lebih cepat dilayani. 🏥💻  
                Selain itu, sistem ini juga udah diintegrasikan dengan <span className="font-semibold text-dark dark:text-white">Satu Sehat </span>  
                untuk memenuhi standar Kementerian Kesehatan. 📡✅
            </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
                <img src={portfolioFinna} alt="Finna" className="w-full" />
            </div>
            <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">
                Finna (2022-2023)
            </h3>
            <p className="text-base font-medium text-secondary">
                Buat seperti monitoring sales dan penjualannya, tujuannya biar proses bisnis mereka lebih 
                gampang dipantau dan dikelola. Jadi nggak perlu ribet manual lagi, tinggal 
                klik-klik udah beres. 🍪📊
            </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
                <img
                src={portfolioTwitter}
                alt="Twitter Sentiment"
                className="w-full"
                />
            </div>
            <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">
                Twitter Sentiment Analysis (2022)
            </h3>
            <p className="text-base font-medium text-secondary">
                Projek ini dibuat pas submission akhir di Kampus Merdeka bareng Universitas 
                Indonesia (AICI). Fungsinya simpel: cari keyword di Twitter, terus dicek 
                sentimennya—positif, negatif, atau netral. Kayak detektor mood netizen. 🤭
            </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
                <img
                src={portfolioWarehouse}
                alt="Warehouse"
                className="w-full"
                />
            </div>
            <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">
                Warehouse Management (2022)
            </h3>
            <p className="text-base font-medium text-secondary">
                Buat monitoring gudang pupuk di PT Bersih Jaya. Intinya biar stok dan distribusi pupuk bisa lebih gampang dipantau, 
                nggak ribet lagi pakai cara manual. 🚛📦
            </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
                <img
                src={portfolioMaknaJiwa}
                alt="Makna Jiwa"
                className="w-full"
                />
            </div>
            <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">
                Makna Jiwa (2021)
            </h3>
            <p className="text-base font-medium text-secondary">
                Projek ini lahir dari submission akhir di program Kampus Merdeka Dicoding. 
                Intinya bikin aplikasi yang bisa nemenin dan bantu orang lebih peduli sama 
                kesehatan mentalnya. ✨
            </p>
            </div>
        </div>
        </div>
    </section>
  )
}
