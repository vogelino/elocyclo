import React from 'react';
import HtmlHead from '../components/HtmlHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StationsSlider from '../components/StationsSlider';
import Stations from '../components/pages/Stations';

const currentPage = {
	title: 'Les Stations',
	slug: 'stations',
	path: '/stations',
};

export default () => (
	<div className="stations-page">
		<HtmlHead page={currentPage} />
		<Header pageName={currentPage.slug} />
		<StationsSlider />
		<Stations />
		<Footer pageName={currentPage.slug} />
	</div>
);
