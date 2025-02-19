// import dynamic from 'next/dynamic';
import { Formax } from '@clutch-inc/usfa-ui-admin';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { zodResolver } from '@hookform/resolvers/zod';
import HomeBtn from '@/components/HomeBtn';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

export default function Home() {
  const validationSchema = z.object({
    username: z.string().min(3, { message: 'Username must be at least 3 characters' }),
    check: z.string().min(3, { message: 'Please select an option.' }),
    password: z.string().min(3, { message: 'Password must be at least 3 characters' }),
    email: z.string().email({ message: 'Please enter a valid email' }),
    number: z
      .number()
      .min(3, { message: 'Are you younger than a 3 year old?' })
      .max(100, { message: 'Be realistic in your age' })
      .positive({ message: 'Number must be positive' }),
    textarea: z.string().min(3, { message: 'Textarea must be at least 3 characters' }),
    select: z.number().min(1, { message: 'Please select an option.' }),
    multiSelect: z
      .string()
      .transform((val) => (Number.isNaN(val) ? val : Number(val)))
      .array()
      .min(2, { message: 'Select at least 2 options' }),
    datepicker: z
      .any()
      .refine((val) => val, { message: 'Date is required' }) // Ensure value is not undefined or null
      .transform((value) => value.toISOString()), // Convert Moment.js to ISO string
    rangeDatepicker: z
      .any()
      .refine((val) => val, { message: 'Date range cannot be empty' }) // Ensure value is not undefined or null
      .transform((val) => val.map((value) => value.toISOString())),
    richText: z.string().min(3, { message: 'Rich text must be at least 3 characters long' }),
  });

  const methods = useForm({
    defaultValues: {
      username: '',
      check: '',
      password: '',
      email: '',
      number: '',
      textarea: 'hello this is a test text default value',
    },
    resolver: zodResolver(validationSchema),
  });

  return (
    <>
      <Container className="mt-4">
        <h1>Formax tests</h1>
        <Row className="mt-3 border rounded p-5">
          <Col>
            <Formax {...{ methods }} onSubmit={(data) => alert(`Submitted: ${JSON.stringify(data)}`)}>
              <Row>
                <Col xs={12} md={6}>
                  <Formax.Control groupClassName="mb-4" name="username" label="Username" required />
                </Col>
                <Col xs={12} md={6}>
                  <Formax.Control
                    type="password"
                    groupClassName="mb-4"
                    name="password"
                    label="Password"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={5}>
                  <Formax.Control type="email" groupClassName="mb-4" name="email" label="Email" required />
                </Col>
                <Col xs={12} md={2}>
                  <Formax.Control type="number" groupClassName="mb-4" name="number" label="Age" required />
                </Col>
                <Col xs={12} md={5}>
                  <p className="form-label">Check</p>
                  <Formax.Check
                    type="radio"
                    name="check"
                    label="jake"
                    value="jake"
                    title="checkJake"
                    id="checkJake"
                  />
                  <Formax.Check
                    type="radio"
                    name="check"
                    label="gerald"
                    value="gerald"
                    title="checkGerald"
                    id="checkGerald"
                  />
                </Col>
              </Row>
              <Formax.Control
                type="textarea"
                rows={5}
                groupClassName="mb-4"
                name="textarea"
                label="Textarea"
                required
              />
              <Formax.Select
                name="select"
                groupClassName="mb-4"
                label="Select"
                required
                optionPlaceholder="-- Please select a user (placeholder value) --"
                options={[
                  {
                    value: '3',
                    label: 'Jane',
                  },
                  {
                    value: '4',
                    label: 'Doe',
                  },
                  {
                    value: '5',
                    label: 'John',
                  },
                  {
                    value: '6',
                    label: 'Smith',
                  },
                  {
                    value: '7',
                    label: 'Earl',
                  },
                ]}
              />
              <Formax.Select
                multi
                name="multiSelect"
                groupClassName="mb-4"
                label="Multi Select"
                required
                options={[
                  {
                    label: <span>manager</span>,
                    title: 'manager',
                    options: [
                      {
                        value: '1',
                        label: 'Lucy',
                      },
                      {
                        value: '2',
                        label: 'John',
                      },
                    ],
                  },
                  {
                    label: <span>developer</span>,
                    title: 'developer',
                    options: [
                      {
                        value: '3',
                        label: 'Jane',
                      },
                      {
                        value: '4',
                        label: 'Doe',
                      },
                    ],
                  },
                  {
                    value: '5',
                    label: 'Ungrouped person',
                  },
                ]}
              />
              <Row>
                <Col xs={12} md={6}>
                  <Formax.DatePicker
                    name="datepicker"
                    placeholder="Please enter a date..."
                    label="Datepicker"
                    groupClassName="mb-4"
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Formax.DatePicker
                    type="range"
                    name="rangeDatepicker"
                    placeholder="Please select a date range..."
                    label="Range Datepicker"
                    groupClassName="mb-4"
                  />
                </Col>
              </Row>
              <Formax.RichText name="richText" label="Rich text" />
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
