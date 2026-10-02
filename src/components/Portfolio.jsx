import React from 'react'
import portfolioMaknaJiwa from "../../src/assets/images/portfolio/maknajiwadashboard.png";
import portfolioTwitter from "../../src/assets/images/portfolio/twittersearch.png";
import portfolioWarehouse from "../../src/assets/images/portfolio/warehousegudang.png";
import portfolioFinna from "../../src/assets/images/portfolio/finnaproduk.png";
import portfolioRSKM from "../../src/assets/images/portfolio/ermrskm.jpg";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white pb-16 pt-36 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold uppercase text-primary">Portfolio</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white">Proyek Terbaru</h2>
            <p className="font-medium text-secondary">
              Koleksi proyek pengembangan perangkat lunak yang menunjukkan keahlian teknis, integrasi sistem, dan solusi arsitektur yang dapat diskalakan.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img src={portfolioRSKM} alt="RSKM" className="w-full" />
            </div>
            <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">ERM RSKM (2023-2025)</h3>
            <p className="text-base font-medium text-secondary">
              Membangun sistem rekam medis elektronik (EMR) kolaboratif dengan tim lintas fungsi di Rumah Sakit Kristen Mojowarno. Platform ini mengintegrasikan seluruh operasional rumah sakit termasuk IGD, rawat jalan, rawat inap, laboratorium, radiologi, farmasi, dan billing. Selain itu, mengimplementasikan integrasi SATUSEHAT API untuk memenuhi standar Kementerian Kesehatan.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img src={portfolioFinna} alt="Finna" className="w-full" />
            </div>
            <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">Finna (2022-2023)</h3>
            <p className="text-base font-medium text-secondary">
              Merancang dan mengembangkan sistem monitoring penjualan enterprise untuk mengoptimalkan pelacakan penjualan dan alur kerja operasional, serta menyederhanakan manajemen data dan meningkatkan akurasi pelaporan.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img src={portfolioTwitter} alt="Twitter Sentiment" className="w-full" />
            </div>
            <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">Twitter Sentiment Analysis (2022)</h3>
            <p className="text-base font-medium text-secondary">
              Mengembangkan alat analisis sentimen sebagai penugasan akhir Kampus Merdeka bersama Universitas Indonesia (AICI), mampu mencari kata kunci dan mengkategorikan sentimen menjadi positif, negatif, atau netral.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img src={portfolioWarehouse} alt="Warehouse" className="w-full" />
            </div>
            <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">Warehouse Management (2022)</h3>
            <p className="text-base font-medium text-secondary">
              Membangun solusi pelacakan stok dan distribusi untuk operasional gudang pupuk di PT Bersih Jaya, meningkatkan visibilitas inventaris dan efisiensi rantai pasok.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img src={portfolioMaknaJiwa} alt="Makna Jiwa" className="w-full" />
            </div>
            <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">Makna Jiwa (2021)</h3>
            <p className="text-base font-medium text-secondary">
              Membuat platform dukungan kesehatan mental sebagai proyek akhir program Dicoding Kampus Merdeka, dengan fokus pada fitur kesejahteraan yang ramah pengguna dan mudah diakses.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
