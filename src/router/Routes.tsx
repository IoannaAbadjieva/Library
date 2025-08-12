import { createBrowserRouter, type RouteObject } from "react-router-dom";
import App from "../layout/App";
import AuthorDetails from "../features/AuthorDetails";
import BookDetails from "../features/BookDetails";
import Series from "../features/Series";
import SeriesFiltered from "../features/SeriesFiltered";
import Authors from "../features/Authors";
import Books from "../features/Books";
import NewBooks from "../features/home/NewBooks";
import GenreBooks from "../features/GenreBooks";
import Contact from "../features/Contact";
import Reviews from "../features/Reviews";
import AboutLibrary from "../features/AboutLibrary";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'books', element: <Books /> },
            { path: 'book/:id', element: <BookDetails /> },
            { path: 'books/genre/:genre', element: <GenreBooks /> },
            { path: 'new-books', element: <NewBooks /> },
            { path: 'authors', element: <Authors /> },
            { path: 'author/:id', element: <AuthorDetails /> },
            { path: 'series', element: <Series /> },
            { path: 'series/:id', element: <SeriesFiltered /> },
            { path: 'about-library', element: <AboutLibrary /> },
            { path: 'reviews', element: <Reviews /> },
            { path: 'contact', element: <Contact /> },
        ]
    }
];

    export const router = createBrowserRouter(routes);