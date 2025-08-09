"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link.js";
import styles from "../styles/Home.module.scss";
import ImageSlider from "../containers/ImageSlider.js";
import Head from "next/head.js";

// Array constante fuera del componente para evitar recreaciones
const IMAGE_TEXTS = [
  "Auditoría Integral",
  "Consultoría Presupuestal",
  "Análisis Financiero",
  "Asesoría Fiscal",
  "Gestión Contable",
];

const Inicio = () => {
  // Solución para errores de hidratación
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Todos los useEffect deben ir antes de cualquier return condicional
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isLoaded && isPlaying && !isTransitioning) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === IMAGE_TEXTS.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isLoaded, isPlaying, isTransitioning]);

  if (!isLoaded) return null;

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? IMAGE_TEXTS.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 250);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === IMAGE_TEXTS.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 250);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <main className={styles.container}>
        {/* Botones de navegación */}
        <nav>
          <ul>
            {/* Enlaces con navegación suave */}
            <li>
              <Link href="#servicios" scroll={false}>
                Ir a Servicios
              </Link>
            </li>
            <li>
              <Link href="#soluciones" scroll={false}>
                Ir a Soluciones
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sección de Presentación */}
        <section className={`mt-6 ${styles.presentation}`}>
          <div className={styles.carouselContainer}>
            {/* Controles Play/Pause */}
            <div className={styles.playControls}>
              <button
                onClick={togglePlayPause}
                className={styles.playPauseBtn}
                disabled={isTransitioning}
              >
                {isPlaying ? "⏸️" : "▶️"}
              </button>
            </div>

            {/* Imagen actual */}
            <div
              className={`${styles.imagePlaceholder} ${
                isTransitioning ? styles.transitioning : ""
              }`}
            >
              {IMAGE_TEXTS[currentImageIndex]}
            </div>

            {/* Botones de navegación */}
            <button
              onClick={handlePrevious}
              className={`${styles.navButton} ${styles.prevButton} `}
              disabled={isTransitioning}
            >
              <p>‹</p>
            </button>
            <button
              onClick={handleNext}
              className={`${styles.navButton} ${styles.nextButton}`}
              disabled={isTransitioning}
            >
              <p>›</p>
            </button>

            {/* Indicadores */}
            <div className={styles.indicators}>
              {IMAGE_TEXTS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setCurrentImageIndex(index);
                        setIsTransitioning(false);
                      }, 2500);
                    }
                  }}
                  className={`${styles.indicator} ${
                    index === currentImageIndex ? styles.active : ""
                  }`}
                  disabled={isTransitioning}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Servicios */}
        <section id="servicios" className={`mb-0 ${styles.tratamientos}`}>
          <div className={styles.area}>
            <h3>Servicios Profesionales de Contaduría</h3>
            <ul>
              <li>Auditoría integral de finanzas públicas y privadas</li>
              <li>Consultoría especializada en presupuestos públicos</li>
              <li>Análisis y planificación financiera estratégica</li>
              <li>Asesoría fiscal y tributaria especializada</li>
              <li>Gestión contable y administrativa empresarial</li>
              <li>Implementación de sistemas de control interno</li>
              <li>Asesoría en cumplimiento normativo y regulatorio</li>
              <li>Consultoria en optimización de procesos financieros</li>
            </ul>
          </div>
        </section>

        {/* Sección de Soluciones */}
        <section id="soluciones" className={`${styles.accesorios}`}>
          <article className={styles.tipo}>
            <h1>Soluciones Contables Integrales</h1>
            {/* <ImageSlider imagePaths={imagePath} enableTransition={false} /> */}
            <p>
              Ofrecemos soluciones contables completas adaptadas a las
              necesidades específicas de cada cliente, desde pequeñas empresas
              hasta entidades públicas de gran envergadura.
            </p>
            <Link href="#">Conocer más</Link>
          </article>

          <article className={styles.tipo}>
            <h1>Facturación Electrónica</h1>
            {/* <ImageSlider imagePaths={imagePath} enableTransition={false} /> */}
            <p>
              Implementamos sistemas de facturación electrónica que cumplen con
              todas las normativas tributarias, optimizando sus procesos
              administrativos y financieros.
            </p>
            <Link href="#">Ver detalles</Link>
          </article>

          <article className={styles.tipo}>
            <h1>Auditoría Especializada</h1>
            {/* <ImageSlider imagePaths={imagePath} enableTransition={false} /> */}
            <p>
              Servicios de auditoría externa e interna con enfoque en finanzas
              públicas, cumplimiento normativo y optimización de recursos
              financieros.
            </p>
            <Link href="#">Solicitar auditoría</Link>
          </article>
        </section>

        <section className={`p-1 ${styles.eventos__municipales}`}>
          <article
            className={`flex justify-center items-center w-screen h-80 mx-3 p-3 mt-10 ${styles.evento}`}
          >
            <div>
              <h2>Capacitaciones y Eventos Profesionales</h2>
              <p
                style={{
                  marginTop: "1rem",
                  fontSize: "1.1rem",
                  color: "var(--medium-gray)",
                }}
              >
                Participamos en eventos especializados en contaduría pública y
                finanzas municipales. Ofrecemos capacitaciones continuas para
                mantenernos actualizados en las últimas normativas.
              </p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Inicio;
