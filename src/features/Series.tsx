import React from "react";
import { Segment, Header, Grid, Container, Pagination } from "semantic-ui-react";

import { series } from "../data/seriesData";
import { books } from "../data/booksData";
import { authors } from "../data/authorsData";
import { Link } from "react-router-dom";

const sortedSeries = [...series].sort((a, b) => a.name.localeCompare(b.name));

export default function Series() {
  const [activePage, setActivePage] = React.useState(1);
  const seriesPerPage = 6;
  const totalPages = Math.ceil(sortedSeries.length / seriesPerPage);
  const startIdx = (activePage - 1) * seriesPerPage;
  const paginatedSeries = sortedSeries.slice(startIdx, startIdx + seriesPerPage);

  return (

  <Segment style={{  padding: '2em', minHeight: '80vh' }}>
        <Header as='h2' textAlign='center'>All Series</Header>
        <Grid stretched columns={2}  stackable>
          {paginatedSeries.map(serie => {
            const serieBooks = books.filter(book => book.seriesId === serie.id);
            // Get unique author ids for the series
            const authorIds = Array.from(new Set(serieBooks.map(book => book.authorId)));
            const authorLinks = authorIds.map(id => {
              const author = authors.find(a => a.id === id);
              return author ? (
                <Link key={id} to={`/author/${id}`} >{author.name}</Link>
              ) : null;
            });
            return (
              <Grid.Column key={serie.id}>
                <Segment>
                  <Header as='h4'>
                    <Link to={`/series/${serie.id}`}>{serie.name}</Link>
                  </Header>
                  <Container style={{ marginBottom: '0.5em' }}>
                    <span style={{ fontStyle: 'italic' }}>author(s):</span> {authorLinks}
                  </Container>
                  <Header as='h5'>Books in this series:</Header>
                  <Container style={{ display: 'inline-block' }}>
                    {serieBooks.length === 0 ? (
                      <span>No books in this series.</span>
                    ) : (
                      serieBooks.map((book, idx) => (
                        <span key={book.id}>
                          <Link to={`/book/${book.id}`} >{book.title}</Link>
                          {idx < serieBooks.length - 1 ? ', ' : ''}
                        </span>
                      ))
                    )}
                  </Container>
                </Segment>
              </Grid.Column>
            );
          })}
        </Grid>
        <Container textAlign='center' style={{ marginTop: '2em' ,marginBottom: '4em' }}>
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
