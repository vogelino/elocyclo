import React from 'react';
import HtmlHead from '../components/HtmlHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AproposSlider from '../components/AproposSlider';
import Apropos from '../components/pages/Apropos';

const currentPage = {
	title: 'À propos',
	slug: 'apropos',
	path: '/apropos',
};

export default () => (
	<div className="home-page">
		<HtmlHead page={currentPage} />
		<Header pageName={currentPage.slug} />
		<AproposSlider />
		<Apropos />
		<Footer pageName={currentPage.slug} />
	</div>
);
