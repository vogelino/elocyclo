import React from "react";
import HtmlHead from "../components/HtmlHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActualitesSlider from "../components/ActualitesSlider";
import Actualites from "../components/pages/Actualites";

const currentPage = {
  title: "Actualités",
  slug: "actualites",
  path: "/actualites",
};

export default () => (
  <div className="actualites-page">
    <HtmlHead page={currentPage} />
    <Header pageName={currentPage.slug} />
    <ActualitesSlider />
    <Actualites />
    <Footer pageName={currentPage.slug} />
  </div>
);
