import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
//import AllTheBooks from "./components/AllTheBooks";
import BookList from "../src/components/BookList";
import scifi from "../src/data/scifi.json";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <BookList genreName={scifi} />
      {/*<AllTheBooks />*/}
      <MyFooter />
    </div>
  );
}

export default App;
