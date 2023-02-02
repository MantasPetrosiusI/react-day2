import { Container, Row, Col, Card } from "react-bootstrap";
import { Component } from "react";
import books from "../data/fantasy.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="row-cols-3 row-cols-md-6 row-cols-lg-9">
          {books.map((book) => {
            return (
              <Col key={book.asin}>
                <Card
                  style={{
                    width: "10rem",
                    marginTop: "1rem",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={book.img}
                    style={{
                      width: "10rem",
                      height: "10rem",
                    }}
                  />
                </Card>
                <Card.Title>{book.title}</Card.Title>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
