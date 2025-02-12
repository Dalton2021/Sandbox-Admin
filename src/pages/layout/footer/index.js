import HomeBtn from '@/components/HomeBtn';
import { Footer } from '@clutch-inc/usfa-ui-admin';
import { useEffect, useState } from 'react';

export default function Home() {
  return (
    <>
      <div className="mt-4">
        {/* <Footer appName="Civilian-Fatalities" version="1.0.0" /> */}
        <Footer appName="USFA-UI-Admin" version="1.0.0" />
      </div>
      <HomeBtn />
    </>
  );
}
