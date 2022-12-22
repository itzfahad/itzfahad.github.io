// This file is not generated while init.
// This file is to customize the head tag actually
// And this also solves the fab.ico error as we are tricking with browser with 
//   `<link rel="shortcut icon" href="data:;base64,iVBORw0KGgo=" />`


import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel="shortcut icon" href="data:;base64,iVBORw0KGgo=" />

        {/* For downloading google poppings font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./icofont/icofont.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}