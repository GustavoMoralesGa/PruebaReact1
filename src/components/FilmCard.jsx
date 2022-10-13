import Card from 'react-bootstrap/Card';

const FilmCard = ({film}) => {

    return (
        <Card style={{ width: '22rem' }} className='py-2 px-2 text-center' >
            <Card.Img variant="top" src={film.movie_banner} />
            <Card.Body>
                <Card.Title>{film.title}</Card.Title>
                <Card.Text>{film.original_title}</Card.Text>
                <Card.Text>Release: {film.release_date}</Card.Text>
                <Card.Text>{film.description}</Card.Text>
             </Card.Body>
        </Card>
    )
}

export default FilmCard;