import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,300;1,900&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="favicon.png" type="image/png" />          
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#f5b83f" />
          <meta
            name="description"
            content="Conheça o EloGames: é a solução que vai organizar e agilizar sua vida, além de oferecer benefícios promoções e conteúdos personalizados, para você dentro de um único espaço."
          />
          <meta
            name="keywords"
            content="Elo, EloGames"
          />
          <meta name="author" content="Palamar" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="EloGames" />
          <meta
            property="og:description"
            content="Conheça o EloGames: é a solução que vai organizar e agilizar sua vida, além de oferecer benefícios promoções e conteúdos personalizados, para você dentro de um único espaço."
          />
          <meta
            property="og:image"
            content="https://elogames.vercel.app/images/console.svg"
          />
          <meta property="og:url" content="https://elogames.vercel.app/" />
          <meta property="og:site_name" content="EloGames" />
          <meta property="og:locale" content="pt_BR" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}