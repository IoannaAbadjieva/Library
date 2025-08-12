import { useState } from "react";
import { authors } from "../data/authorsData";
import { Segment, Header, Grid, Button, Container, Pagination } from "semantic-ui-react";
import { Link } from "react-router-dom";

function getInitial(name: string, type: string) {
  const parts = name.split(" ");
  if (type === "first") return parts[0][0].toUpperCase();
  if (type === "last" && parts.length > 1) return parts[parts.length - 1][0].toUpperCase();
  return parts[0][0].toUpperCase();
}

export default function Authors() {
  const [sortType, setSortType] = useState("first");
  const sortedAuthors = [...authors].sort((a, b) => {
    if (sortType === "first") {
      return a.name.localeCompare(b.name);
    } else {
      const aLast = a.name.split(" ").slice(-1)[0];
      const bLast = b.name.split(" ").slice(-1)[0];
      return aLast.localeCompare(bLast);
    }
  });
  // Get unique initials for filter buttons
  const initials = Array.from(new Set(sortedAuthors.map(a => getInitial(a.name, sortType)))).sort();
  const [filterInitial, setFilterInitial] = useState("");
  const filteredAuthors = filterInitial
    ? sortedAuthors.filter(a => getInitial(a.name, sortType) === filterInitial)
    : sortedAuthors;

  // Pagination logic
  const [activePage, setActivePage] = useState(1);
  const authorsPerPage = 6;
  const totalPages = Math.ceil(filteredAuthors.length / authorsPerPage);
  const startIdx = (activePage - 1) * authorsPerPage;
  const paginatedAuthors = filteredAuthors.slice(startIdx, startIdx + authorsPerPage);

  return (
    <>
    <Segment style={{ padding: '2em', minHeight: '80vh' }}>
      <Header as='h2' textAlign='center'>All Authors</Header>
      <Container style={{ marginBottom: '1em', display: 'flex', gap: '1em', alignItems: 'center' }}>
        <span>Sort by:</span>
        <Button.Group>
          <Button active={sortType === "first"} onClick={() => { setSortType("first"); setFilterInitial(""); }}>First Name</Button>
          <Button active={sortType === "last"} onClick={() => { setSortType("last"); setFilterInitial(""); }}>Last Name</Button>
        </Button.Group>
        <span>Filter by initial:</span>
        <Button.Group>
          {initials.map(initial => (
            <Button key={initial} active={filterInitial === initial} onClick={() => setFilterInitial(initial)}>{initial}</Button>
          ))}
          <Button onClick={() => setFilterInitial("")}>All</Button>
        </Button.Group>
      </Container>
      <Grid stretched columns={2} stackable>
        {paginatedAuthors.map(author => (
          <Grid.Column key={author.id}>
            <Segment>
              <Header as='h4'>
                <Link to={`/author/${author.id}`}>{author.name}</Link>
              </Header>
              <p>{author.bio}</p>
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
    <Container textAlign='center' style={{ marginTop: '2em', marginBottom: '4em' }} />
    </>
  );
}
