import { Segment, Header, Image, Rating, Container, Comment, Icon, Button } from "semantic-ui-react";
import { reviews } from "../data/aboutReviewsData";

export default function Reviews() {
    return (
        <Segment style={{ padding: '2em', minHeight: '80vh' }}>
            <Header as='h2' textAlign='center'>Book Reviews & Reader Opinions</Header>
            <Container style={{ maxWidth: 900, margin: '0 auto' }}>
                <Comment.Group>
                    {reviews.map(review => (
                        <Comment key={review.id} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 8, marginBottom: '2em', padding: '1em', border: '1px solid #ccc' }}>
                            <Comment.Avatar as={Image} src={review.cover} style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                            <Comment.Content>
                                <Comment.Author as='span' style={{ fontWeight: 'bold', fontSize: '1.1em' }}>{review.title}</Comment.Author>
                                <Comment.Metadata>
                                    <span><Icon name='user' />{review.reviewer}</span>
                                </Comment.Metadata>
                                <Comment.Text>{review.opinion}</Comment.Text>
                                <Comment.Actions>
                                    <Rating icon='star' defaultRating={review.rating} maxRating={5} disabled />
                                </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                    ))}
                </Comment.Group>
            </Container>
            <Container textAlign='right' style={{ marginTop: '2em', marginBottom: '4em' }}>
                <Button onClick={() => window.scrollTo(0, 0)}>Back to Top</Button>
            </Container>
        </Segment>
    );
}
