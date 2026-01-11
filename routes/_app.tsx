import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Łukasz Gil Software</title>

        <meta
          name="description"
          content="Łukasz Gil Tailormade Software . Tworzę szybkie strony, aplikacje webowe i rozwiązania backendowe."
        />

        <link rel="canonical" href="https://twojadomena.pl/" />

        <meta
          property="og:title"
          content="Łukasz Kowalski – Fullstack Developer"
        />
        <meta
          property="og:description"
          content="Tworzę nowoczesne aplikacje webowe i wydajne strony internetowe."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://twojadomena.pl/" />
        <meta
          property="og:image"
          content="https://twojadomena.pl/og-image.jpg"
        />

        <meta name="theme-color" content="#121827" />

        <link rel="stylesheet" href="assets/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
