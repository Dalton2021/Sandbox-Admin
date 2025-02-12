import HomeBtn from '@/components/HomeBtn';
import { Layout } from '@clutch-inc/usfa-ui-admin';
import { Col, Row } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Layout
        appName="Civilian-Fatalities-Admin"
        user={{ firstName: 'Test', lastName: 'User' }}
        version="1.0.0"
        title="Civilian-Fatalities">
        <Row>
          <Col>
            <strong>Content</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit. A fuga error
            illo beatae libero ab impedit quibusdam, ullam, dolorum odio quaerat, adipisci dignissimos
            accusamus quidem at assumenda quisquam laborum ducimus.
          </Col>
        </Row>
        <div className="my-4">
          <HomeBtn hideContainer />
        </div>
      </Layout>
    </>
  );
}
