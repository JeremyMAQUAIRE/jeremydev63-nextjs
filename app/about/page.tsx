'use client';

import React from 'react';
import Head from 'next/head';
import { ArrowRight } from 'react-feather';
import Image from 'next/image';
import logo from '../../public/logo.png';

const Aboutpage = () => {
  return (
    <>
      <Head>
        <title>À propos de Jérémy Maquaire - Développeur Web Freelance</title>
        <meta
          name="description"
          content="Jérémy Maquaire, Développeur Web Freelance à Montaigut-en-Combraille, propose des solutions web innovantes, créatives et performantes pour les entreprises."
        />
        <meta
          name="keywords"
          content="développeur web freelance, Jérémy Maquaire, développeur full stack, création de site web, solutions web Montaigut-en-Combraille, développement web à distance, développement mobile, création de sites responsive, applications web personnalisées, développeur freelance 63700, entreprise de développement web, création de sites e-commerce, développement d'applications mobiles, solutions web innovantes, optimisation SEO, conception de sites web sur mesure, services freelance Montaigut, consultant en développement web, création d'applications web, développement web front-end, développement back-end Montaigut"
        />
        <meta property="og:title" content="À propos de Jérémy Maquaire - Développeur Web Freelance" />
        <meta
          property="og:description"
          content="Jérémy Maquaire, Développeur Web Freelance à Montaigut-en-Combraille, propose des solutions web innovantes, créatives et performantes pour les entreprises."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://jeremy-dev63.fr/about" />
        <meta name="robots" content="index, follow" />
      </Head>

      <section className="mx-auto max-w-6xl px-4">
        <div>
          <h1 className="relative text-center text-[32px] font-bold uppercase text-primary mt-2 mb-5 pb-3">
            À propos de Jérémy Maquaire
            <span className="absolute block w-[40px] h-[3px] bg-[#C0A360] bottom-0 left-1/2 transform -translate-x-1/2" />
            <span className="absolute block w-[120px] h-[1px] bg-[#ddd] bottom-1 left-1/2 transform -translate-x-1/2" />
          </h1>
          <p className="text-justify text-lg text-nightBlue">
            Je valorise la créativité et la collaboration pour concevoir des solutions innovantes. Passionné par le
            développement, je crée des expériences web intuitives et accessibles en utilisant les dernières
            technologies.
          </p>
          <p className="text-justify text-lg text-nightBlue">
            Membre d&apos;un club de tennis, je pratique régulièrement et participe à l&apos;animation de mon village
            via une association festive.
          </p>
        </div>
        <div className="flex items-center justify-center gap-5 mt-10">
          <Image
            src={logo}
            alt="Logo de l'entreprise Jérémy Maquaire - Développeur Web Freelance"
            className="aboutPage_meta_logo_icon"
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-5">
            <h3 className="text-gray-600 text-2xl text-center">Développeur Full Stack</h3>
            <p className="italic text-nightBlue text-center text-base">
              J&apos;ai créé mon entreprise pour concrétiser ma passion pour la technique et offrir des solutions
              innovantes aux entreprises.
            </p>
            <div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 ml-10">
                  <ArrowRight className="text-yellow-600" />
                  <strong className="font-semibold">Téléphone:</strong>
                  <span>07.68.50 40.95</span>
                </li>
                <li className="flex items-center gap-2 ml-10">
                  <ArrowRight className="text-yellow-600" />
                  <strong className="font-semibold">Mail:</strong>
                  <span>info@jeremy-dev63.fr</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 ml-10">
                  <ArrowRight className="text-yellow-600" />
                  <strong className="font-semibold">Ville:</strong>
                  <span>Montaigut-en-Combraille, 63</span>
                </li>
                <li className="flex items-center gap-2 ml-10">
                  <ArrowRight className="text-yellow-600" />
                  <strong className="font-semibold">Freelance:</strong>
                  <span>A distance et sur site</span>
                </li>
              </ul>
            </div>
            <p className="italic text-nightBlue text-xl">
              Mon entreprise me permet de réaliser mes projets personnels, de collaborer avec des clients variés et de
              relever de nouveaux défis chaque jour. C&apos;est une source d&apos;épanouissement et
              d&apos;accomplissement professionnel.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutpage;
