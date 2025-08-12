import { useParams, Link } from "react-router-dom";
import { books } from "../data/booksData";
import { authors } from "../data/authorsData";
import { series } from "../data/seriesData";
import { Segment, Header, Grid, Image, Container } from "semantic-ui-react";

export default function BookDetails() {
  const { id } = useParams();
  const bookId = id ? parseInt(id) : null;
  const book = books.find(b => b.id === bookId);
  if (!book) {
    return (
      <Segment style={{ background: 'transparent', padding: '2em' }}>
        <Header as='h2' textAlign='center'>Book not found</Header>
      </Segment>
    );
  }
  const author = authors.find(a => a.id === book.authorId);
  const bookSeries = book.seriesId ? series.find(s => s.id === book.seriesId) : null;
  return (
    <Segment style={{  padding: '2em', minHeight: '80vh' }}>
      <Header as='h2' textAlign='center'>{book.title}</Header>
      <Grid columns={2} stackable>
        <Grid.Column width={6}>
          <Image size='medium' src={book.cover} style={{ maxWidth: '100%', height: 'auto' }} />
        </Grid.Column>

        <Grid.Column width={10}>
          <Container style={{ marginTop: '1em' }}>
            <span style={{ fontStyle: 'italic', marginRight: '0.5em' }}>author:</span>
            <Link to={`/author/${book.authorId}`}>
              <span>{author ? author.name : "Unknown Author"}</span>
            </Link>
          </Container>
          {bookSeries && (
            <Container style={{ marginTop: '1em' }}>
              <span style={{ fontStyle: 'italic', marginRight: '0.5em' }}>series:</span>
              <Link to={`/series/${book.seriesId}`}>
                <span>{bookSeries.name}</span>
              </Link>
            </Container>
          )}
          <Container style={{  marginTop: '1em' }}>
            <span style={{ fontStyle: 'italic', marginRight: '0.5em' }}>genres:</span>
            <Container style={{ display: 'inline-block' }}>
              {book.genres.map((genre, idx) => (
                <span  key={genre}>
                  <Link to={`/books/genre/${encodeURIComponent(genre)}`}>{genre}</Link>
                  {idx < book.genres.length - 1 ? ', ' : ''}
                </span>
              ))}
            </Container>
          <Container style={{ marginTop: '1em' }}>
            <span style={{ fontStyle: 'italic', marginRight: '0.5em' }}>year of publishing:</span>
            <span>{book.year}</span>
          </Container>
          <Container style={{ marginTop: '1em' }}>
            <span style={{ fontStyle: 'italic', marginRight: '0.5em' }}>added on:</span>
            <span>{book.dateAdded}</span>
          </Container>
          </Container>
          <Container style={{ marginTop: '1em' }}>
            <span style={{ fontStyle: 'italic', marginRight: '0.5em' }}>description:</span>
            <span>{book.description}</span>
          </Container>
        </Grid.Column>

      </Grid>
    </Segment>
  );
}
