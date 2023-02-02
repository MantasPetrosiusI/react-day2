import { Component } from "react";
import { ListGroup, Spinner, Alert } from "react-bootstrap";

class CommentsList extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };
  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2Q0OGU3MzczODAwMTUzNzQzOTkiLCJpYXQiOjE2NzUzNDcxNTYsImV4cCI6MTY3NjU1Njc1Nn0.Ig7YLpPWUEKUot6PBSiJ8vk_Om_GdOn097xyNau9C9U",
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        this.setState({
          comments: data,
          isLoading: false,
        });
        console.log(this.state.comments);
      } else {
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };
  componentDidMount() {
    this.fetchComments();
  }
  render() {
    return (
      <>
        {this.state.isLoading && <Spinner animation="border" variant="info" />}
        {this.state.isError && <Alert variant="danger">Error occured!</Alert>}
        <ListGroup as="ol">
          <ListGroup.Item as="li">
            <div className="ms-2 me-auto text-align-center justify-content-between d-flex d-wrap">
              <div className="font-italic">Author</div>
              <div className="font-weight-bold">Rating</div>
              <div>Coment</div>
            </div>
          </ListGroup.Item>
          {this.state.comments.map((comment) => {
            return (
              <ListGroup.Item as="li" key={comment._id}>
                <div className="ms-2 me-auto text-align-center justify-content-between d-flex d-wrap">
                  <div className="font-italic">{comment.author}</div>
                  <div className="font-weight-bold">{comment.rate}</div>
                  <div>{comment.comment}</div>
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </>
    );
  }
}
export default CommentsList;
