import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useEffect, useState } from 'react';
import '@/styles/globals.css'; // required since nextjs pushes content through div#__next

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return <Component {...pageProps} />;
}
