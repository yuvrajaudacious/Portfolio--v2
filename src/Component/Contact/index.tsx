"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Card } from "antd";
import {
  MailOutlined,
  PhoneFilled,
  PhoneOutlined,
  PhoneTwoTone,
} from "@ant-design/icons";
import instaicon from "../../../public/assets/instagram.svg";
export default function Contact() {
  interface ContactForm {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    additionalDetails: string;
  }

  const [showSuccessCard, setShowSuccessCard] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "9305e71b-eb91-4f23-8274-b47122e0785f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccessCard(true);
        form.reset();
      } else {
        console.error("Form submission failed", data);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  useEffect(() => {
    if (showSuccessCard) {
      const timeoutId = setTimeout(() => {
        setShowSuccessCard(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [showSuccessCard]);

  return (
    <div className={styles.container}>
      <div className={styles.contactTitle}>
        <h1>Contact</h1>
        <p>
          Ready to get started on your project?<br></br> Contact me now for a
          Free consultation.
        </p>
      </div>{" "}
      <div className={styles.flex}>
        <div className={styles.formContainer}>
          {showSuccessCard ? (
            <div className={styles.successCard}>
              <h2>Thank You for your message. It has been sent!</h2>
              <p>I will contact you soon.</p>
              <p>
                Contact us via email:{" "}
                <a href="mailto:yuvrajbaloriya@gmail.com">
                  yuvrajbaloriya@gmail.com
                </a>
              </p>
            </div>
          ) : (
            <div className={styles.formCard}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                  ></textarea>
                </div>

                <div className={styles.formGroup}>
                  <button className={styles.btn} type="submit">
                    Send Message
                  </button>
                </div>
              </form>
              <Card>
                
              </Card>
            </div>
          )}
        </div>
        <div className={styles.contactInfo}>
          <p className={styles.title}>Contact Us</p>
          <div className={styles.card2} >
            <p>
              <PhoneOutlined className={styles.phoneicon} /> +91(7987772828)
            </p>
            <p>
              <MailOutlined />
              yuvrajbaloriya55@gmail.com
            </p>
            <img src={instaicon}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
