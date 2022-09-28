import React from "react";
import FilmCard from "./FilmCard";

import { getFilms } from '../api'

const films = await getFilms()

const MyApi = () => {
    return (
        <div>
            { films.map(film => <FilmCard key={film.id} film={film}/>)}
        </div>
    )
}

export default MyApi;