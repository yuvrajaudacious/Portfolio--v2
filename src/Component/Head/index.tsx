// components/Navbar.tsx
import Link from "next/link";
import styles from "./styles.module.css"; // Assuming you will create a CSS module for styling
import { Button, Card } from "antd";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span> Yuvraj Baloriya/</span>
        </div>
        <Card className={styles.headcard}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="home">HOME</Link>
            </li>
            <li>
              <Link href="/About">ABOUT ME</Link>
            </li>
            <li>
              <Link href="projects">PROJECTS</Link>
            </li>
            <li>
              <Link href="contact">CONTACT</Link>
            </li>
            <li>
              <Link href="resume">
                <Button
                  className={styles.resumeButton}
                  type="primary"
                  size="large"
                >
                  Resume
                </Button>
              </Link>
            </li>
          </ul>
        </Card>
      </nav>
    </>
  );
};

export default Navbar;
