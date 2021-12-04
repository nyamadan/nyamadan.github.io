import React from "react";
import Layout from "../components/Layout";
import Page from "../components/Page";

const Home = function Home() {
  return (
    <Page>
      <Layout>
        <section className="p-4">
          <h2>404</h2>
          <h3>This page could not be found.</h3>
        </section>
      </Layout>
    </Page>
  );
};

export default Home;
