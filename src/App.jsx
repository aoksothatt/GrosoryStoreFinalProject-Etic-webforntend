import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import "./app.css";
import Contact from "./Pages/Contact";
import FetchApi from "./components/FetchApi";
import { FavoritesProvider } from "./components/FavoritesContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "./components/Favorites";
import Login from "./components/Login";
function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <FetchApi />
                <Contact />
              </>
            }
          />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
