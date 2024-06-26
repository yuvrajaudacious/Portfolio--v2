"use client";
import Head from "next/head";
import Image from "next/image";
import styles from "./styles.module.css";
import { useSpring, animated } from "@react-spring/web";
import { FaLinkedin, FaGithub, FaWhatsapp, FaTelegram } from "react-icons/fa";

export default function Home() {
  const [props, set] = useSpring(() => ({
    transform: "scale(1)",
    config: { tension: 300, friction: 10 },
  }));

  const handleMouseEnter = () => set({ transform: "scale(1.05)" });
  const handleMouseLeave = () => set({ transform: "scale(1)" });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.textSection}>
          <p>
            Hello <span className={styles.wave}>👋</span>, I'm
          </p>
          <h1>Yuvraj Baloriya</h1>
          <h2>Front-End Developer</h2>
          <p>1 Years of Experience</p>
          <button className={styles.contactButton}>Contact</button>
          <div className={styles.socialIcons}>
            <FaLinkedin size={30} />
            <FaGithub size={30} />
            <FaWhatsapp size={30} />
            <FaTelegram size={30} />
          </div>
        </div>
        <animated.div
          className={styles.imageSection}
          style={props}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://www.shutterstock.com/shutterstock/videos/1106757235/thumb/1.jpg?ip=x480" // Ensure you have an image in the public directory
            alt="Illustration"
            width={500}
            height={500}
          />
        </animated.div>
      </main>
    </div>
  );
}
