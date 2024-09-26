// "use client";
// import React, { useContext, useEffect, useState } from "react";
// import Link from "next/link.js";
// import styles from "../styles/Home.module.scss";
// import ImageSlider from "../containers/ImageSlider.js";
// import RootLayout from "@/app/layout.js";
// import Head from "next/head.js";

// const Inicio = () => {
//   // Solution for hydratation errors
//   const [isLoaded, setIsLoaded] = useState(false);
//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);
//   if (!isLoaded) return null;

//   const accesorios = [
//     {
//       d1: "https://firebasestorage.googleapis.com/v0/b/contavsib-b6b5e.appspot.com/o/images%2Fbusiness-962310_1280.jpg?alt=media&token=00b8d39d-bd71-42eb-97b6-703dc972dc21",
//     },
//     {
//       d2: "https://firebasestorage.googleapis.com/v0/b/contavsib-b6b5e.appspot.com/o/images%2Fcalculator-2359760_1280.jpg?alt=media&token=82e229b9-782a-493b-bab9-0e675df71bd3",
//     },
//     {
//       d3: "https://firebasestorage.googleapis.com/v0/b/contavsib-b6b5e.appspot.com/o/images%2Ffiling-cabinet-1205044_1280.jpg?alt=media&token=48f05771-718b-4647-be4d-23d6b77bfd5f",
//     },
//   ];

//   const imagePath = [accesorios[0].d1, accesorios[1].d2, accesorios[2].d3];

//   return (
//     <RootLayout>
//       <Head>
//         <title>Inicio</title>
//       </Head>
//       <main className={styles.container}>
//         <section className={`mt-6 ${styles.presentation}`}>
//           <ImageSlider imagePaths={imagePath} enableTransition={true} />
//         </section>

//         <section className={`mb-0 ${styles.tratamientos}`}>
//           <div className={styles.area}>
//             <h3 id="#servicios">Servicios</h3>

//             <ul>
//               <li>Auditoría de finanzas públicas</li>
//               <li>Consultoría en presupuestos públicos</li>
//               <li>Análisis y planificación financiera pública</li>
//               <li>Asesoría fiscal para profesionales de la salud</li>
//               <li>Planificación financiera</li>
//             </ul>
//           </div>
//         </section>

//         <section className={`${styles.accesorios}`}>
//           <article className={styles.tipo}>
//             <h1 id="#soluciones">Soluciones</h1>
//             <ImageSlider imagePaths={imagePath} enableTransition={false} />

//             <Link href="#">Ver más</Link>
//           </article>

//           <article className={styles.tipo}>
//             <h1>Factura electrónica</h1>
//             <ImageSlider imagePaths={imagePath} enableTransition={false} />

//             <Link href="#">Ver más</Link>
//           </article>
//         </section>

//         <section className={`p-1 ${styles.eventos__municipales}`}>
//           <article
//             className={`flex justify-center items-center w-screen h-80 mx-3 p-3 mt-10 rounded-xl border-slate-500 border-solid border-2 ${styles.evento}`}
//           >
//             <h2 className="text-2xl">Eventos municipales</h2>
//           </article>
//         </section>
//       </main>
//     </RootLayout>
//   );
// };

// export default Inicio;

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link.js";
import styles from "../styles/Home.module.scss";
import ImageSlider from "../containers/ImageSlider.js";
import RootLayout from "@/app/layout.js";
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
    <RootLayout>
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
            <h3>Servicios</h3>
            <ul>
              <li>Auditoría de finanzas públicas</li>
              <li>Consultoría en presupuestos públicos</li>
              <li>Análisis y planificación financiera pública</li>
              <li>Asesoría fiscal para profesionales de la salud</li>
              <li>Planificación financiera</li>
            </ul>
          </div>
        </section>

        {/* Sección de Soluciones */}
        <section id="soluciones" className={`${styles.accesorios}`}>
          <article className={styles.tipo}>
            <h1>Soluciones</h1>
            <ImageSlider imagePaths={imagePath} enableTransition={false} />
            <Link href="#">Ver más</Link>
          </article>

          <article className={styles.tipo}>
            <h1>Factura electrónica</h1>
            <ImageSlider imagePaths={imagePath} enableTransition={false} />
            <Link href="#">Ver más</Link>
          </article>
        </section>

        <section className={`p-1 ${styles.eventos__municipales}`}>
          <article
            className={`flex justify-center items-center w-screen h-80 mx-3 p-3 mt-10 rounded-xl border-slate-500 border-solid border-2 ${styles.evento}`}
          >
            <h2 className="text-2xl">Eventos municipales</h2>
          </article>
        </section>
      </main>
    </RootLayout>
  );
};

export default Inicio;
