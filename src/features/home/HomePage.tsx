import {  Link } from "react-router-dom";
import {   Button, Icon, Segment } from "semantic-ui-react";


export default function HomePage() {

  return (
    <Segment  className="masthead" vertical>
      <Link to="/new-books" className="arrow-link">
        <Button  inverted icon labelPosition="right">
          To the library
          <Icon name="arrow right" />
        </Button>
      </Link>
    </Segment>
  );
}
