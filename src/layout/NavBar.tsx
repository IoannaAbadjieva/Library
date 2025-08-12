
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, Image, Input } from "semantic-ui-react";

import { reviews } from "../data/aboutReviewsData";
import { books } from "../data/booksData";
import { authors } from "../data/authorsData";
import { series } from "../data/seriesData";




export default function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSearch(searchTerm: string) {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return;

    // Book title
    const book = books.find(b => b.title.toLowerCase().includes(q));
    if (book) {
      navigate(`/book/${book.id}`);
      return;
    }
    // Author
    const author = authors.find(a => a.name.toLowerCase().includes(q));
    if (author) {
      navigate(`/author/${author.id}`);
      return;
    }
    // Series
    const serie = series.find(s => s.name.toLowerCase().includes(q));
    if (serie) {
      navigate(`/series/${serie.id}`);
      return;
    }
    // Genre
    const allGenres = Array.from(new Set(books.flatMap(b => b.genres)));
    const genre = allGenres.find(g => g.toLowerCase().includes(q));
    if (genre) {
      navigate(`/books/genre/${encodeURIComponent(genre)}`);
      return;
    }
    // Book in reviews
    const reviewBook = reviews.find(r => r.title.toLowerCase().includes(q));
    if (reviewBook) {
      navigate(`/reviews`);
      return;
    }
    // Not found: go to search page with query
    navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
  }

  return (
    <Menu fixed="top" inverted>
      <Menu.Item as={NavLink} to="/" exact>
        <Image size="mini" src="/books.jpg" alt="Logo" />
      </Menu.Item>
      <Menu.Item as={NavLink} to="/new-books" >
        New Arrivals
      </Menu.Item>
      <Menu.Item as={NavLink} to="/books">
        Books
      </Menu.Item>
      <Menu.Item as={NavLink} to="/series">
        Series
      </Menu.Item>
      <Menu.Item as={NavLink} to="/authors">
        Authors
      </Menu.Item>
      <Menu.Item as={NavLink} to="/about-library">
        About Library
      </Menu.Item>
      <Menu.Item as={NavLink} to="/reviews">
        Reviews
      </Menu.Item>
      <Menu.Item position="right">
        <Menu.Item>
          <Input
            icon="search"
            placeholder="Search Library..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter" && searchTerm.trim()) {
                handleSearch(searchTerm);
                setSearchTerm("");
              }
            }}
          />
        </Menu.Item>
        <Menu.Item as={NavLink} to="/contact">
          Contact
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );
}
