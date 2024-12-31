'use client';

import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Jérémy Maquaire - Développeur Web Freelance</title>
        <meta
          name="description"
          content="Développeur Web et Web Mobile Freelance, spécialisé en création de sites web et applications mobiles."
        />
        <meta
          name="keywords"
          content="développeur web Montaigut-en-Combraille, développement web freelance Montaigut-en-Combraille, développeur web mobile Montaigut-en-Combraille, création site web Montaigut-en-Combraille, développement application mobile Montaigut-en-Combraille, agence de développement web 63700, développement de sites internet Montaigut, création de sites web responsive Montaigut-en-Combraille, développeur freelance 63700, développement d'applications mobiles sur mesure, développement web HTML CSS JavaScript 63700, service web freelance Montaigut, application mobile Android iOS Montaigut-en-Combraille, web designer freelance 63700, création de site vitrine Montaigut-en-Combraille, développement e-commerce Montaigut, développeur web spécialisé en React Montaigut-en-Combraille, développement web professionnel 63700, création de site internet responsive Montaigut, consultant en développement web 63700 Montaigut-en-Combraille"
        />
        <meta property="og:title" content="Jérémy Maquaire - Développeur Web Freelance" />
        <meta
          property="og:description"
          content="Développeur Web et Web Mobile Freelance, spécialisé en création de sites web et applications mobiles."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://jeremy-dev63.fr" />
        <meta name="robots" content="index, follow" />
      </Head>

      <section className="relative flex flex-col items-center justify-center h-full bg-cover bg-left-top bg-no-repeat bg-fixed">
        <div
          className="absolute inset-0 bg-opacity-50"
          style={{ backgroundImage: "url('/bandeauSite.jpg')", opacity: 0.2 }}
        />
        <h1 className="text-nightBlue text-[5em] z-10 mx-auto max-w-7xl animate-spinIn">MAQUAIRE Jérémy</h1>
        <p className="text-[2em] italic text-yellow-600 z-10 mx-auto max-w-7xl animate-spinIn">
          Je suis développeur Web, Web Mobile en Freelance
        </p>
      </section>
    </>
  );
};

export default Home;
