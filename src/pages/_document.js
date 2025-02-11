/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href={`${process.env.NEXT_PUBLIC_ROOT}/manifest.json`} />
        <link rel="stylesheet" href={`${process.env.NEXT_PUBLIC_ROOT}/usfa-assets/_css/admin.min.css`} />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          src={`${process.env.NEXT_PUBLIC_ROOT}/usfa-assets/_js/admin.min.js?v=6.0.2`}
          async
          type="application/javascript"
        />
        <script
          src="https://kit.fontawesome.com/3864a37ec8.js?v=1.0.66"
          data-search-pseudo-elements
          type="application/javascript"
        />
      </body>
    </Html>
  );
}
