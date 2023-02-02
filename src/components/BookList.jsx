import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Search a book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.genreName
            .filter((book) =>
              book.title
                .toLowerCase()
                .includes(this.state.searchQuery.toLowerCase())
            )
            .map((book) => (
              <Col xs={12} md={4} key={book.asin}>
                <SingleBook singleBook={book} />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

export default BookList;
