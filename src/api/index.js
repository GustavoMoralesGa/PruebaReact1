// import axios library
import axios from 'axios'

// define baseURL API
const api = axios.create({
    baseURL: 'https://ghibliapi.herokuapp.com',
})

// get data API 
const getFilms = async () => {
    const { data: films } = await api.get('/films')
    return films    
}

export {
    getFilms,
}