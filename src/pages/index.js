import { Header, ThemeSwitch } from '@clutch-inc/usfa-ui-admin';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <main>
        {/* <Header appName="Civilian-Fatalities-Admin" user={{ firstName: 'Test', lastName: 'User' }} /> */}
        {/* <ThemeSwitch /> */}
        <Container>
          <h1 className="fw-bolder pt-4">USFA-UI-Admin Sandbox</h1>
          <Row className="border-bottom border-0 mb-4">
            <h2>Real world examples</h2>
            <Col xs={12} md={4}>
              <ul>
                <li>Hello world</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <h3>Individual components</h3>
            <Col xs={12} md={4}>
              <p className="lead">Layout</p>
              <ul>
                <li className="mb-3">
                  <Link href="/layout/">Layout</Link>
                </li>
                <li className="mb-3">
                  <Link href="/layout/header">Header</Link>
                  <ul>
                    <li className="mb-2">
                      <Link href="/layout/theme-switch">ThemeSwitch</Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/layout/screenFit">ScreenFit</Link>
                    </li>
                  </ul>
                </li>
                <li className="mb-3">
                  <Link href="/layoutfooter">Footer</Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <p className="lead">Formax</p>
              <ul>
                <li className="mb-3">
                  <Link href="/formax/">Formax</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
