import Head from "next/head";

const HtmlHead = ({ page }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>{`${page.title} | Elocyclo, take it and live it | Location de vélos éléctriques à Monreux`}</title>
    <link
      rel="stylesheet"
      type="text/css"
      href="/static/css/resetbrowser.css"
    />
    <link rel="stylesheet" type="text/css" href="/static/css/main.css" />
  </Head>
);

export default HtmlHead;
