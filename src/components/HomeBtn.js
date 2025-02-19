import Link from 'next/link';
import { Container } from 'react-bootstrap';

const HomeBtn = ({ hideContainer = false }) => {
  return !hideContainer ? (
    <Container fluid>
      <Link href="/" className="btn btn-primary my-5">
        Home
      </Link>
    </Container>
  ) : (
    <Link href="/" className="btn btn-primary my-5">
      Home
    </Link>
  );
};

export default HomeBtn;
