import React from 'react';
import HtmlHead from '../components/HtmlHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSlider from '../components/ContactSlider';
import Contact from '../components/pages/Contact';

const currentPage = {
	title: 'Contact',
	slug: 'contact',
	path: '/contact',
};

export default () => (
	<div className="actualites-page">
		<HtmlHead page={currentPage} />
		<Header pageName={currentPage.slug} />
		<ContactSlider />
		<Contact />
		<Footer pageName={currentPage.slug} />
	</div>
);
