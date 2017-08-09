import React from 'react';
import HtmlHead from '../components/HtmlHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InscriptionSlider from '../components/InscriptionSlider';
import Inscription from '../components/pages/Inscription';

const currentPage = {
	title: 'Inscription',
	slug: 'inscription',
	path: '/inscription',
};

export default () => (
	<div className="apropos-page">
		<HtmlHead page={currentPage} />
		<Header pageName={currentPage.slug} />
		<InscriptionSlider />
		<Inscription />
		<Footer pageName={currentPage.slug} />
	</div>
);
