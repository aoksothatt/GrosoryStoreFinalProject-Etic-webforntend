import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import "./app.css";
import Card from "./components/Card";
import FetchApi from "./components/FetchApi";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <FetchApi />
    </>
  );
}
export default App;
