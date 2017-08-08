import React from 'react';
import HtmlHead from '../components/HtmlHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Home from '../components/pages/Home';

const currentPage = {
	title: 'Accueil',
	slug: 'home',
	path: '/',
};

export default () => (
	<div className="home-page">
		<HtmlHead page={currentPage} />
		<Header pageName={currentPage.slug} />
		<Slider />
		<Home />
		<Footer pageName={currentPage.slug} />
	</div>
);
