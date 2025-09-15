import React from 'react'
import clientFinna from "../../src/assets/images/clients/finna.png";
import clientRSKM from "../../src/assets/images/clients/logo_rskm.png";

export default function Clients() {
  return (
    <section
            id="clients"
            className="bg-slate-800 pb-32 pt-36 dark:bg-slate-300"
          >
        <div className="container">
        <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                Clients
            </h4>
            <h2 className="mb-4l text-3xl font-bold text-white dark:text-dark">
                Yang pernah bekerja sama
            </h2>
            <p className="font-medium text-secondary">
                Selama perjalanan sebagai developer, aku sempat terlibat di berbagai project bersama klien dari
                perusahaan startup hingga enterprise.
            </p>
            </div>
        </div>
        <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
            <a
                href="#"
                className="mx-4 max-w-[120px] py-4 opacity-60 grayscale
            transition duration-500 hover:opacity-100 hover:grayscale-0
            lg:mx-6 xl:mx-8"
            >
                <img src={clientFinna} alt="Finna" />
            </a>
            <a
                href="#"
                className="mx-4 max-w-[120px] py-4 opacity-60 grayscale
            transition duration-500 hover:opacity-100 hover:grayscale-0
            lg:mx-6 xl:mx-8"
            >
                <img src={clientRSKM} alt="RSKM" />
            </a>
            </div>
        </div>
        </div>
    </section>
  )
}
