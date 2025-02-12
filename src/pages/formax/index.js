import { Formax } from '@clutch-inc/usfa-ui-admin';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { zodResolver } from '@hookform/resolvers/zod';
import HomeBtn from '@/components/HomeBtn';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

export default function Home() {
  const validationSchema = z.object({
    username: z
      .string()
      .min(3, { message: 'Username must be at least 3 characters' })
      .nonempty({ message: 'Username is required' }),
  });

  const methods = useForm({
    defaultValues: {
      username: '',
    },
    resolver: zodResolver(validationSchema),
  });

  return (
    <>
      <Container className="mt-4">
        <h1>Formax tests</h1>
        <Row className="mt-4">
          <Col>
            <h2>Control</h2>
            <Formax {...{ methods }} onSubmit={(data) => alert(`Submitted username: ${data.username}`)}>
              <Formax.Control name="username" label="Username" required />
              <Button type="submit" className="mt-3">
                Submit
              </Button>
            </Formax>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2>Control</h2>
            <Formax {...{ methods }} onSubmit={(data) => alert(`Submitted username: ${data.username}`)}>
              <Formax.Control name="username" label="Username" required />
              <Button type="submit" className="mt-3">
                Submit
              </Button>
            </Formax>
          </Col>
        </Row>
        <HomeBtn hideContainer />
      </Container>
    </>
  );
}
