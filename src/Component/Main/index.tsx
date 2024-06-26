"use client";
import Head from "next/head";
import Image from "next/image";
import styles from "./styles.module.css";
import { FaLinkedin, FaGithub, FaWhatsapp, FaTelegram } from "react-icons/fa";
import logo from "../../../public/3d-web-developer-working-on-project-illustration-png.webp";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.textSection}>
          <p>
            Hello <span className={styles.wave}>👋</span>, I&apos;m
          </p>
          <h1>Yuvraj Baloriya</h1>
          <h2>Front-End Developer</h2>
          <p>1 Year of Experience</p>
          <button className={styles.contactButton}>Contact</button>
          <div className={styles.socialIcons}>
            <FaLinkedin size={30} />
            <FaGithub size={30} />
            <FaWhatsapp size={30} />
            <FaTelegram size={30} />
          </div>
        </div>
        <div className={styles.imageSection}>
          <Image src={logo} alt="Illustration" width={500} height={500} />
        </div>
      </main>
    </div>
  );
};

export default Home;
