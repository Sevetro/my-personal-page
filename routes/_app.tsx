import { getTranslations } from "../i18n/i18n.ts";
import { define } from "../utils.ts";

export default define.page(function App({ Component, state: { lang } }) {
  const { html } = getTranslations(lang);

  return (
    <html lang={lang}>
      <head>
        <title>Łukasz Gil Software</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={html.description} />

        <link rel="canonical" href="https://lukasz-gil.pl/" />

        <meta property="og:title" content="Łukasz Gil Software" />
        <meta property="og:description" content={html.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lukasz-gil.pl/" />
        <meta
          property="og:image"
          content="https://lukasz-gil.pl/og-image.jpg" //TODO
        />

        <meta name="theme-color" content="#121827" />

        <link rel="stylesheet" href="/styles.css" />
      </head>

      <body class="bg-(--bg-primary)">
        <Component />
      </body>
    </html>
  );
});
