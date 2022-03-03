import type { NextPage } from "next";
import Head from "next/head";

import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { ContentSections } from "../components/ContentSections";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>EloGames</title>
      </Head>
      <Hero />
      <Features />
      <ContentSections />      
    </>
  );
};

export default Home;
