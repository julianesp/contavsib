"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link.js";
import styles from "../styles/Home.module.scss";
import ImageSlider from "../containers/ImageSlider.js";
import Head from "next/head.js";

const Inicio = () => {
  // Solución para errores de hidratación
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  if (!isLoaded) return null;

  const accesorios = [
    {
      d1: "https://firebasestorage.googleapis.com/v0/b/contavsib-b6b5e.appspot.com/o/images%2Fbusiness-962310_1280.jpg?alt=media&token=00b8d39d-bd71-42eb-97b6-703dc972dc21",
    },
    {
      d2: "https://firebasestorage.googleapis.com/v0/b/contavsib-b6b5e.appspot.com/o/images%2Fcalculator-2359760_1280.jpg?alt=media&token=82e229b9-782a-493b-bab9-0e675df71bd3",
    },
    {
      d3: "https://firebasestorage.googleapis.com/v0/b/contavsib-b6b5e.appspot.com/o/images%2Ffiling-cabinet-1205044_1280.jpg?alt=media&token=48f05771-718b-4647-be4d-23d6b77bfd5f",
    },
  ];

  const imagePath = [accesorios[0].d1, accesorios[1].d2, accesorios[2].d3];

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
          <ImageSlider imagePaths={imagePath} enableTransition={true} />
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
