import { Segment, Header, Container, Button, Icon, Divider } from "semantic-ui-react";

export default function AboutLibrary() {
  return (
    <Segment style={{ padding: '2em', minHeight: '80vh' }}>
      <Header  as='h2' textAlign='center'>About Our Library</Header>
      <Container text>
        <p>
          Welcome to our library, a haven for book lovers and seekers of knowledge. Our shelves are filled with stories that inspire, educate, and entertain. Whether you are a lifelong reader or just beginning your literary journey, our library is designed to be a welcoming space for everyone.
        </p>
        <p>
          We believe in the power of books to connect people, spark imagination, and foster lifelong learning. Our collection spans genres, eras, and cultures, offering something for every taste. From timeless classics to the latest bestsellers, you will find a world of discovery within our walls.
        </p>
        <p>
          For those who love books, our library is more than a building—it's a community. Join us for events, book clubs, and quiet moments of reflection. Follow us on social media to stay updated and connect with fellow readers:
        </p>
        <Divider section />
        <Container textAlign='center' style={{ marginTop: '1em' }}>
        <Button  icon labelPosition='left' as='a' href='#'>
          <Icon name='facebook' /> Facebook
        </Button>
        <Button  icon labelPosition='left' as='a' href='#'>
          <Icon name='twitter' /> Twitter
        </Button>
        <Button  icon labelPosition='left' as='a' href='#'>
          <Icon name='instagram' /> Instagram
        </Button>
        </Container>
      </Container>
    </Segment>
  );
}
