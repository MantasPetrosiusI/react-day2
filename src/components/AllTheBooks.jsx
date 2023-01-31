import { Container, Row, Col, Card } from "react-bootstrap";
import { Component } from "react";
import books from "../data/fantasy.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row>
          {books.map((book) => {
            console.log(books.length);
            return (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
