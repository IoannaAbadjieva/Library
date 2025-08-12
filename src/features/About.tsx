import { Segment, Header, Card, Image, Rating, Container } from "semantic-ui-react";
import { reviews } from "../data/aboutReviewsData";

export default function About() {
  return (
    <Segment style={{ padding: '2em' }}>
      <Header inverted as='h2' textAlign='center'>About: Book Reviews & Reader Opinions</Header>
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <Card.Group itemsPerRow={3} stackable>
          {reviews.map(review => (
            <Card key={review.id} style={{ border: '1px solid #ccc', background: 'rgba(255,255,255,0.1)' }}>
              <Image size="small" src={review.cover}  style={{ margin:'0 auto', objectFit: 'cover' }} />
              <Card.Content>
                <Card.Header>{review.title}</Card.Header>
                <Card.Meta>Reviewed by {review.reviewer}</Card.Meta>
                <Card.Description>{review.opinion}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Rating icon='star' defaultRating={review.rating} maxRating={5} disabled />
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    </Segment>
  )
}
