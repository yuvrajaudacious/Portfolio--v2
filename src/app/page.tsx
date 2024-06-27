import About from "@/Component/About";
import Contact from "@/Component/Contact";
import Head from "@/Component/Head";
import Main from "@/Component/Main";
import Project from "@/Component/Project";
import { Layout } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Head />
      <Main />
      <About />
      <Project />
      <Contact />
    </Layout>
  );
}
