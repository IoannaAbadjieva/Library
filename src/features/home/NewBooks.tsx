import { Button, Header, Segment, Container, Icon, Grid, Image } from "semantic-ui-react";
import { books } from "../../data/booksData";
import { authors } from "../../data/authorsData";
import { series } from "../../data/seriesData";
import { Link } from "react-router-dom";


const newBooks = [...books]
    .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
    .slice(0, 4);

export default function NewBooks() {
    return (
        <Segment style={{ padding: '2em' , minHeight: '80vh' }}>
            <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Header as='h2' textAlign='center'>New Arrivals</Header>
                <Link to="/books" className="arrow-link">
                    <Button style={{ background: 'transparent', color: 'white' }} icon labelPosition="right">
                            More Books
                            <Icon name="arrow right" />
                        </Button>
                    </Link>
                </Container>
                <Grid columns={2} stackable>
                    {newBooks.map((book) => (
                        <Grid.Column key={book.id} >
                            <Segment>
                                <Grid stretched>
                                    <Grid.Column width={6}>
                                        <Image size='small' src={book.cover} style={{ height: '17rem', width: 'auto' }} />
                                    </Grid.Column>
                                    <Grid.Column width={10}>
                                        <Header as='h4'>{book.title}</Header>
                                        <Container style={{ display: 'inline-block' }}>
                                            {book.genres.map((genre, idx) => (
                                                <span key={genre}>
                                                    <Link to={`/books/genre/${encodeURIComponent(genre)}`}>{genre}</Link>
                                                    {idx < book.genres.length - 1 ? ', ' : ''}
                                                </span>
                                            ))}
                                        </Container>
                                        <span style={{ fontStyle: 'italic' }}>author:</span>
                                        <Link to={`/author/${book.authorId}`}>
                                            <p>{authors.find(a => a.id === book.authorId)?.name ?? "Unknown Author"}</p>
                                        </Link>
                                        {book.seriesId && (
                                            <>
                                                <span style={{ fontStyle: 'italic' }}>series:</span>
                                                <Link to={`/series/${book.seriesId}`}>
                                                    <p>{series.find(s => s.id === book.seriesId)?.name ?? "Unknown Series"}</p>
                                                </Link>
                                            </>
                                        )}
                                        <span style={{ fontStyle: 'italic' }}>added on:</span>
                                        <p>{book.dateAdded}</p>

                                    </Grid.Column>
                                </Grid>
                                <Link to={`/book/${book.id}`}><Button >View Details</Button></Link>
                            </Segment>
                        </Grid.Column>
                    ))}
                </Grid>
                <Container textAlign='right' style={{ marginTop: '2em', marginBottom: '4em' }}>
                    <Button  onClick={() => window.scrollTo(0, 0)}>Back to Top</Button>
                </Container>
            </Segment>

    );

}
