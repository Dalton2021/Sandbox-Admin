import { Control, Formax } from '@clutch-inc/usfa-ui-admin';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import HomeBtn from '@/components/HomeBtn';

export default function Home() {
  const methods = useForm({
    defaultValues: { username: '', age: '', password: '' },
    resolver: zodResolver(),
  });

  return (
    <>
      <main>
        <Formax {...{ methods }} onSubmit={(data) => console.log('Submitted', data)}>
          {/* <Formax.Control name="test" label="Control" /> */}
          <Formax.Control name="username" label="Username" />
          {/* <Control name="username" label="Username" /> */}
          <Button type="submit" className="mt-3">
            Submit
          </Button>
        </Formax>
        <HomeBtn />
      </main>
    </>
  );
}
