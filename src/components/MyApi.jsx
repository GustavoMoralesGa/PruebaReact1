import React from "react";
import FilmCard from "./FilmCard";
import { getFilms } from '../api'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const films = await getFilms()

const parseFilms = (films, searchTerm, sortValue) => {
    const matchesMovie = (value, search) => {
        if (search) {
            const normalizedValue = value.toLowerCase();
            const normalizedSearchValue = search.toLowerCase();
            const indexFound = normalizedValue.indexOf(normalizedSearchValue);
            return indexFound > -1;
        }
        return true;
    }
    const sortMovies = (a, b, key) => {
        const aKey = a[key]
        const bKey = b[key]
        if (a === b) return 0;
        return (aKey > bKey) ? 1 : -1;
    }
    return films.filter(film => matchesMovie(film.title, searchTerm)).sort((a, b) => sortMovies(a, b, sortValue))
}

const MyApi = ({ searchValue, sortValue }) => {
    return (
        <div>
            <Container fluid>
                <Row>
                    { parseFilms(films, searchValue, sortValue).map(film => <FilmCard key={film.id} film={film}/>)}
                </Row>
            </Container>
        </div>
    )
}

export default MyApi;