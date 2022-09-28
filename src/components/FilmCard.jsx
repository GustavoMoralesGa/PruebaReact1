import Card from 'react-bootstrap/Card';

const FilmCard = ({film}) => {

    return (
        
        // <h1>{film.title}</h1>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={film.movie_banner} />
            <Card.Body>
                <Card.Title>{film.title}</Card.Title>
                <Card.Text>{film.description}</Card.Text>
             </Card.Body>
        </Card>


    )
}

export default FilmCard;