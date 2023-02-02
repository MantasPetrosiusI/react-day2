import React from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

function CommentArea(props) {
  return (
    <>
      <CommentsList id={props.asin} />
      {/*<AddComment />*/}
    </>
  );
}

export default CommentArea;

//Add a CommentArea component at the end of your SingleBook. When the user clicks on a SingleBook, this component should appear (hint: short-circuit operator!).
//CommentArea should fetch and store the comments for the selected book in its state, and contain two sub-components: CommentsList and AddComment.
