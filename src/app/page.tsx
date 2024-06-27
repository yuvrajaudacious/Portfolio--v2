import About from "@/Component/About";
import Head from "@/Component/Head";
import Main from "@/Component/Main";
import { Layout } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Head />
      <Main />
      <About />
    </Layout>
  );
}
