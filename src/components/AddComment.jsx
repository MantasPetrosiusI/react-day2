import { Form, Button } from "react-bootstrap";
import { Component } from "react";

class AddComment extends Component {
  state = {
    comment: {
      author: "",
      rate: "",
      comment: "",
      _id: "",
    },
  };

  addComment = async () => {
    try {
      let res = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2Q0OGU3MzczODAwMTUzNzQzOTkiLCJpYXQiOjE2NzUzNDcxNTYsImV4cCI6MTY3NjU1Njc1Nn0.Ig7YLpPWUEKUot6PBSiJ8vk_Om_GdOn097xyNau9C9U",
          },
        }
      );
      if (res.ok) {
        this.setState({
          comment: {
            author: "",
            rate: "",
            comment: "",
            _id: "",
          },
        });
      } else {
        console.log("Problem with adding comment");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            this.addComment();
          }}
        >
          <Form.Group>
            <Form.Label>Your email</Form.Label>
            <Form.Control
              type="email"
              required
              placeholder="Insert your email here"
              value={this.state.comment.author}
              onChange={(e) => {
                this.setState({
                  comment: {
                    ...this.state.comment,
                    author: e.target.value,
                  },
                });
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              required
              placeholder="Insert your rating here"
              value={this.state.comment.rate}
              onChange={(e) => {
                console.log("invalid input!", e.target.value);
                this.setState({
                  comment: {
                    ...this.state.comment,
                    rate: e.target.value,
                  },
                });
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Comment</Form.Label>
            <Form.Control
              type="text"
              value={this.state.comment.comment}
              onChange={(e) => {
                this.setState({
                  comment: {
                    ...this.state.comment,
                    comment: e.target.value,
                  },
                });
              }}
            ></Form.Control>
          </Form.Group>

          <Button variant="info" type="submit">
            Add Comment
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
