import { Segment, Grid, Image, Header, Container, Pagination, Button } from "semantic-ui-react";
import { books } from "../data/booksData";
import { authors } from "../data/authorsData";
import { series } from "../data/seriesData";
import { Link } from "react-router-dom";
import { useState } from "react";


const sortedBooks = [...books].sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());

export default function Books() {
    const [activePage, setActivePage] = useState(1);
    const booksPerPage = 6;
    const totalPages = Math.ceil(sortedBooks.length / booksPerPage);
    const startIdx = (activePage - 1) * booksPerPage;
    const paginatedBooks = sortedBooks.slice(startIdx, startIdx + booksPerPage);

    return (

        <Segment style={{ padding: '2em', minHeight: '80vh' }}>
            <Header as='h2' textAlign='center'>All Books</Header>
            <Grid stretched columns={2} stackable>
                {paginatedBooks.map((book) => (
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
            <Container textAlign='center' style={{ marginTop: '2em', marginBottom: '4em' }}>
                <Pagination
                    activePage={activePage}
                    totalPages={totalPages}
                    onPageChange={(_e, { activePage }) => setActivePage(Number(activePage))}
                    siblingRange={1}
                    boundaryRange={0}
                />
            </Container>
        </Segment>


    );
}
