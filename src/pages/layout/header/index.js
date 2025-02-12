import HomeBtn from '@/components/HomeBtn';
import { Header } from '@clutch-inc/usfa-ui-admin';

export default function Home() {
  return (
    <>
      <>
        <Header appName="Civilian-Fatalities-Admin" user={{ firstName: 'Test', lastName: 'User' }} />
        <HomeBtn />
      </>
    </>
  );
}
