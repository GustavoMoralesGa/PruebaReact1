import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Header ({ handleSearchUpdate, searchValue, handleSortUpdate, sortValue }) {
  

  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand>Studio Ghibli Movies</Navbar.Brand>
        <InputGroup size="sm">
          <InputGroup.Text>Find your Movie by Title</InputGroup.Text>
          <Form.Control
            onChange={(e) => handleSearchUpdate(e)}
            aria-label="With textarea"
            value={ searchValue }
            />
        </InputGroup>
        <InputGroup size="sm">
          <InputGroup.Text>Sort By:</InputGroup.Text>
          <Form.Select size='sm'
            onChange={(e) => handleSortUpdate(e)}
            value={ sortValue }
          >
            <option disabled>Ordenar por</option>
            <option value="title">Title</option>
            <option value="release_date">Release Date</option>
            <option value="rt_score">Rotten Tomatoes Score</option>
            <option value="running_time">Running Time</option>
          </Form.Select>
        </InputGroup>
      </Container>
    </Navbar>
  );
}



export default Header;
