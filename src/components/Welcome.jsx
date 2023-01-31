import { Jumbotron, Button } from "react-bootstrap";

const Welcome = () => {
  return (
    <Jumbotron fluid>
      <h1>Mantas Bookshop</h1>
      <p>Example bookshop that sells fantasy genre books.</p>
      <Button bsstyle="primary">Shop Now</Button>
    </Jumbotron>
  );
};
export default Welcome;
