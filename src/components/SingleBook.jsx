import { Col, Card } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col>
        <Card
          onClick={() => {
            if (this.state.selected) {
              this.setState({ selected: false });
            } else {
              this.setState({ selected: true });
            }
          }}
          className={this.state.selected ? "border-danger" : ""}
          style={{
            width: "10rem",
            marginTop: "1rem",
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.singleBook.img}
            style={{
              width: "10rem",
              height: "10rem",
            }}
          />
          <Card.Title>{this.props.singleBook.title}</Card.Title>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
