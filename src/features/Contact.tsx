import { useState } from "react";
import { Segment, Header, Form, Button, Container, Icon, Divider } from "semantic-ui-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(_e: any, data: { name?: string; value?: string | number }) {
    if (data.name) {
      setForm(f => ({ ...f, [data.name!]: typeof data.value === 'number' ? String(data.value) : (data.value ?? "") }));
      setSent(false);
    }
  }

  function handleSubmit() {
    setForm({ name: "", email: "", message: "" });
    setSent(true);
  }

  return (
    <>
    <Segment style={{ padding: '2em', minHeight: '80vh' }}>
      <Header as='h2' textAlign='center'>Contact Us</Header>
      <Container style={{ maxWidth: 500, margin: '0 auto' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            label='Name'
            name='name'
            value={form.name}
            onChange={handleChange}
            required
            style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#333', border: '1px solid #d4af7a' }}
          />
          <Form.Input
            label='Email'
            name='email'
            type='email'
            value={form.email}
            onChange={handleChange}
            required
            style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#333', border: '1px solid #d4af7a' }}
          />
          <Form.TextArea
            label='Message'
            name='message'
            value={form.message}
            onChange={handleChange}
            required
            style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#333', border: '1px solid #d4af7a' }}
          />
          <Button type='submit' style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ffff', border: '1px solid #d4af7a' }}>Send</Button>
        </Form>
        {sent && (
          <Segment color='green' style={{ marginTop: '1em' }}>Message sent! We'll get back to you soon.</Segment>
        )}
      </Container>
      <Divider section />
      <Header as='h3' textAlign='center'>Follow Us </Header>
      <Container textAlign='center' style={{ marginTop: '1em' }}>
        <Button icon labelPosition='left' as='a' href='#'>
          <Icon name='facebook' /> Facebook
        </Button>
        <Button icon labelPosition='left' as='a' href='#'>
          <Icon name='twitter' /> Twitter
        </Button>
        <Button icon labelPosition='left' as='a' href='#'>
          <Icon name='instagram' /> Instagram
        </Button>
        <Divider hidden />
        <p><Icon name='map marker alternate' /> 123 Library St, Booktown</p>
        <p><Icon name='mail' /> contact@library.com</p>
      </Container>
    
    </Segment>
    <Container textAlign='right' style={{ marginTop: '2em', marginBottom: '4em' }}>
      <Button onClick={() => window.scrollTo(0, 0)}>Back to Top</Button>
    </Container>
  </>
  );
}
