import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const HtmlHead = ({ page }) => (
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta charSet="utf-8" />
		<title>{`${page.title} | Elocyclo, take it and live it | Location de vélos éléctriques à Monreux`}</title>
		<link rel="stylesheet" type="text/css" href="/static/css/resetbrowser.css" />
		<link rel="stylesheet" type="text/css" href="/static/css/main.css" />
	</Head>
);

HtmlHead.propTypes = {
	page: PropTypes.shape({
		title: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		path: PropTypes.string.isRequired,
	}).isRequired,
};

export default HtmlHead;
