import { useParams } from "react-router-dom";
import { books } from "../data/booksData";
import { authors } from "../data/authorsData";
import { series } from "../data/seriesData";
import { Segment, Header, Grid, Image, Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function SeriesFiltered() {
    const { id } = useParams();
    const serieId = id ? parseInt(id) : null;
    const serie = series.find(s => s.id === serieId);
    const filteredBooks = books.filter(book => book.seriesId === serieId);

    return (
        <Segment style={{ padding: '2em', minHeight: '80vh' }}>
            <Header as='h2' textAlign='center'>Books in Series: {serie ? serie.name : 'Unknown Series'}</Header>
            <Grid columns={2} stretched stackable>
                {filteredBooks.map((book) => {
                    const author = authors.find(a => a.id === book.authorId);
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
                                        <span style={{ fontStyle: 'italic' }}>author:</span>
                                        <Link to={`/author/${book.authorId}`}>
                                            <p>{author ? author.name : "Unknown Author"}</p>
                                        </Link>
                                        <span style={{ fontStyle: 'italic' }}>added on:</span>
                                        <p>{book.dateAdded}</p>
                                    </Grid.Column>
                                </Grid>
                                <Link to={`/book/${book.id}`}><Button >View Details</Button></Link>
                            </Segment>
                        </Grid.Column>
                    );
                })}
            </Grid>
            {filteredBooks.length >= 4 && (
                <Container textAlign='right' style={{ marginTop: '2em', marginBottom: '4em' }}>
                    <Button onClick={() => window.scrollTo(0, 0)}>Back to Top</Button>
                </Container>
            )}

        </Segment>
    );
}
