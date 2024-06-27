// pages/About.tsx

import { NextPage } from "next";
import styles from "./styles.module.css";
import yuvraj from "../../../public/assets/yuvraj.jpg";
import wordpress from "../../../public/assets/wordpress.svg";
import shopify from "../../../public/assets/shopify.svg";
import htmlIcon from "../../../public/assets/html-icon.svg";
import cssIcon from "../../../public/assets/css-icon.svg";
import jsIcon from "../../../public/assets/js-icon.svg";
import nodeIcon from "../../../public/assets/node-icon.svg";
import reactIcon from "../../../public/assets/react-icon.svg";
import typescriptIcon from "../../../public/assets/typescript-icon.svg";
import vueIcon from "../../../public/assets/vue-icon.svg";
import boostrapIcon from "../../../public/assets/bootstrap-icon.svg";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.aboutText}>
        <h2>About me</h2>
        <p>
          Hi there! I m Yuvraj, a website developer with a passion for creating
          custom online experiences for my clients. With a skill set including
          HTML, CSS, JavaScript, and React, I have the tools to bring any
          website vision to life.
        </p>
        <p>
          But my services go beyond just custom development I m also proficient
          in using CMS systems like WordPress and Shopify, making it easy for my
          clients to take control of their own websites and keep them up to
          date.
        </p>
        <p>
          So if you re in need of a new website or just looking to revamp your
          current online presence, I d love to chat and see how I can help. Let
          s bring your website dreams to reality together!
        </p>
        <h3>Here are my main skills:</h3>
        <div className={styles.hardSkills}>
          <div className={styles.hability}>
            <Image src={wordpress} alt="Wordpress" />
          </div>
          <div className={styles.hability}>
            <Image src={shopify} alt="Shopify" />
          </div>
          <div className={styles.hability}>
            <Image src={reactIcon} alt="React" />
          </div>
          <div className={styles.hability}>
            <Image src={typescriptIcon} alt="TypeScript" />
          </div>
          <div className={styles.hability}>
            <Image src={nodeIcon} alt="Node" />
          </div>
          <div className={styles.hability}>
            <Image src={htmlIcon} alt="HTML" />
          </div>
          <div className={styles.hability}>
            <Image src={cssIcon} alt="CSS" />
          </div>
          <div className={styles.hability}>
            <Image src={boostrapIcon} alt="Bootstrap" />
          </div>
          <div className={styles.hability}>
            <Image src={jsIcon} alt="JavaScript" />
          </div>
          <div className={styles.hability}></div>
        </div>
      </div>
      <div className={styles.aboutImage}>
        <Image src={yuvraj} alt="Yuvraj Baloriya" />
      </div>
    </div>
  );
};

export default About;
