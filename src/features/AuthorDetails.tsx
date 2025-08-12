import { useParams, Link } from "react-router-dom";
import { authors } from "../data/authorsData";
import { books } from "../data/booksData";
import { series } from "../data/seriesData";
import { Segment, Header, Grid, Image, Container, Button } from "semantic-ui-react";


export default function AuthorDetails() {
  const { id } = useParams();
  const authorId = id ? parseInt(id) : null;
  const author = authors.find(a => a.id === authorId);
  const authorBooks = books.filter(b => b.authorId === authorId);
  if (!author) {
    return (
      <Segment style={{ background: 'transparent', padding: '2em' }}>
        <Header as='h2' textAlign='center'>Author not found</Header>
      </Segment>
    );
  }
  return (

    <Segment style={{ padding: '2em', minHeight: '80vh' }}>
      <Header as='h2' textAlign='center'>{author.name}</Header>
      <Header as='h4'>Bio:</Header>
      <p>{author.bio}</p>
      <Header as='h4'>Books by {author.name}:</Header>
      <Grid columns={2}  stackable>
        {authorBooks.map((book) => {
          const bookSeries = book.seriesId ? series.find(s => s.id === book.seriesId) : null;
          return (
            <Grid.Column key={book.id}>
              <Segment>
                <Grid stretched>
                  <Grid.Column width={6}>
                     <Image size='small' src={book.cover} style={{ height: '17rem', width: 'auto' }} />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Header as='h4'>{book.title}</Header>
                    <Container style={{ marginBottom: '0.5em' }}>
                      {book.genres.map((g, idx) => (
                        <span key={g}>
                          <Link to={`/books/genre/${encodeURIComponent(g)}`}>{g}</Link>
                          {idx < book.genres.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </Container>
                    {bookSeries && (
                      <Container style={{ marginBottom: '0.5em' }}>
                        <strong>Series:</strong> <Link to={`/series/${book.seriesId}`}>{bookSeries.name}</Link>
                      </Container>
                    )}
                    <span style={{ fontStyle: 'italic' }}>added on:</span>
                    <p>{book.dateAdded}</p>
                  </Grid.Column>
                </Grid>
                <Link to={`/book/${book.id}`}><><Button>View Details</Button></></Link>
              </Segment>
            </Grid.Column>
          );
        })}
      </Grid>
      {authorBooks.length >=2 && (
        <Container textAlign='right' style={{ marginTop: '2em', marginBottom: '4em' }}>
          <Button onClick={() => window.scrollTo(0, 0)}>Back to Top</Button>
        </Container>
      )}
    </Segment>

  );
}
