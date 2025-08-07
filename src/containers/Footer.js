"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import face from "../../public/assets/redes/facebook.png";
import ins from "../../public/assets/redes/instagram.png";
import tik from "../../public/assets/redes/tiktok.png";
import wha from "../../public/assets/redes/whatsapp.png";

import arrow from "../../public/next.png";
import phone from "../../public/phone.png";
import styles from "../styles/Footer.module.scss";
import RootLayout from "@/app/layout";

const Contacto = () => {
  const [menuOption, setMenuOptions] = useState(false);
  const switchOptions = () => {
    setMenuOptions(!menuOption);
  };

  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Información de la empresa */}
        <section className={styles.companyInfo}>
          <div className={styles.logo}>
            <h2>ContaVsib</h2>
            <p className={styles.tagline}>Servicios Contables Profesionales</p>
          </div>
          
          <div className={styles.description}>
            <p>
              Firma especializada en contaduría pública, auditoría y consultoría 
              financiera con más de 15 años de experiencia en el mercado colombiano.
            </p>
          </div>

          <div className={styles.certifications}>
            <p><strong>Certificaciones:</strong></p>
            <ul>
              <li>Contador Público - Tarjeta Profesional No. 45821-T</li>
              <li>Certificación ISO 9001:2015</li>
              <li>Miembro activo CTCP Colombia</li>
            </ul>
          </div>
        </section>

        {/* Información de contacto */}
        <section className={styles.contactInfo}>
          <h3>Información de Contacto</h3>
          <div className={styles.contactDetails}>
            <div className={styles.address}>
              <h4>Dirección Principal</h4>
              <p>Calle 15 #12-45, Centro</p>
              <p>Colón - Putumayo, Colombia</p>
              <p>Código Postal: 861020</p>
            </div>
            
            <div className={styles.phones}>
              <h4>Teléfonos</h4>
              <p>Oficina: +57 (8) 429-5847</p>
              <p>Móvil: +57 317-450-3604</p>
              <p>WhatsApp: +57 313-862-7818</p>
            </div>

            <div className={styles.email}>
              <h4>Correos Electrónicos</h4>
              <p>info@contavsib.com.co</p>
              <p>gerencia@contavsib.com.co</p>
              <p>auditoria@contavsib.com.co</p>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className={styles.services}>
          <h3>Nuestros Servicios</h3>
          <ul>
            <li>Auditoría Externa e Interna</li>
            <li>Declaración de Renta</li>
            <li>Consultoría Tributaria</li>
            <li>Facturación Electrónica</li>
            <li>Contabilidad Empresarial</li>
            <li>Revisoría Fiscal</li>
            <li>NIIF y Estándares</li>
            <li>Capacitaciones Empresariales</li>
          </ul>
        </section>

        {/* Horarios y legal */}
        <section className={styles.legalInfo}>
          <h3>Información Legal</h3>
          <div className={styles.businessInfo}>
            <p><strong>Razón Social:</strong> ContaVsib S.A.S.</p>
            <p><strong>NIT:</strong> 900.456.789-1</p>
            <p><strong>Registro Mercantil:</strong> 00-123456-07</p>
            <p><strong>Cámara de Comercio:</strong> Putumayo</p>
          </div>

          <div className={styles.schedule}>
            <h4>Horarios de Atención</h4>
            <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
            <p>Sábados: 8:00 AM - 12:00 PM</p>
            <p>Domingos: Previa cita</p>
            <p>Emergencias contables: 24/7</p>
          </div>

          <div className={styles.regulations}>
            <p><strong>Regulado por:</strong></p>
            <ul>
              <li>Junta Central de Contadores (JCC)</li>
              <li>DIAN - Dirección de Impuestos</li>
              <li>Superintendencia de Sociedades</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Redes sociales */}
      <section className={styles.socialSection}>
        <div className={styles.socialToggle} onClick={switchOptions}>
          <Image alt="Links to navigation" src={arrow} priority />
          <span>Síguenos en redes sociales</span>
        </div>
        
        <div className={`${styles.redes} ${menuOption ? styles.open : styles.closed}`}>
          <ul>
            <li>
              <Link href="https://www.facebook.com/profile.php?id=100085485673809" target="_blank" rel="noreferrer" passHref>
                <Image alt="Facebook" src={face} priority />
                <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/alexriob/" target="_blank" rel="noreferrer" passHref>
                <Image alt="Instagram" src={ins} priority />
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link href="https://wa.me/573174503604" target="_blank" rel="noreferrer" passHref>
                <Image alt="WhatsApp" src={wha} priority />
                <span>WhatsApp</span>
              </Link>
            </li>
            <li className={styles.tiktok}>
              <Link href="https://www.tiktok.com/@julii1295?_t=8n2OQ52Q4aD&_r=1" target="_blank" rel="noreferrer" passHref>
                <Image alt="TikTok" src={tik} priority />
                <span>TikTok</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Copyright y legal */}
      <section className={styles.copyright}>
        <div className={styles.copyrightContent}>
          <p>&copy; 2024 ContaVsib S.A.S. Todos los derechos reservados.</p>
          <div className={styles.legalLinks}>
            <Link href="/politica-privacidad">Política de Privacidad</Link>
            <Link href="/terminos-servicio">Términos de Servicio</Link>
            <Link href="/codigo-etica">Código de Ética</Link>
            <Link href="/politica-calidad">Política de Calidad</Link>
          </div>
          <p className={styles.disclaimer}>
            Información sujeta a verificación. ContaVsib S.A.S. se reserva el derecho de 
            actualizar la información sin previo aviso.
          </p>
        </div>
        
        <div className={styles.credits}>
          <p>
            <a href="https://www.flaticon.es/iconos-gratis/facebook" title="facebook iconos" target="_blank" rel="noreferrer">
              Iconos creados por Freepik - Flaticon
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Contacto;
