import { Col, Card } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
    id: "",
  };
  render() {
    return (
      <>
        <Col>
          <Card
            onClick={() => {
              if (this.state.selected) {
                this.setState({ selected: false, id: "" });
              } else {
                this.setState({
                  selected: true,
                  id: this.props.singleBook.asin,
                });
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

        {this.state.selected && (
          <CommentArea asin={this.props.singleBook.asin} />
        )}
      </>
    );
  }
}

export default SingleBook;
