import React from 'react'
import clientFinna from "../assets/images/clients/finna.png";
import clientRSKM from "../assets/images/clients/logo_rskm.png";

export default function Clients() {
  return (
    <section
      id="clients"
      className="bg-white pb-32 pt-36 dark:bg-dark"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
              Clients
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white">
              Yang pernah bekerja sama
            </h2>
            <p className="font-medium text-secondary">
              Selama perjalanan sebagai developer, aku sempat terlibat di berbagai project bersama klien dari
              perusahaan startup hingga enterprise.
            </p>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div
              className="max-w-[140px] p-4 opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <img src={clientFinna} alt="Finna" className="w-full object-contain" />
            </div>
            <div
              className="max-w-[140px] p-4 opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <img src={clientRSKM} alt="RSKM" className="w-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
