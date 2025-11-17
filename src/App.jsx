import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import "./app.css";
import Contact from "./Pages/Contact";
import FetchApi from "./components/FetchApi";
import { FavoritesProvider } from "./components/FavoritesContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "./components/Favorites";
import { CartProvider } from "./components/CartContext";
import { Toaster } from "react-hot-toast";
import Cart from "./Pages/CardPage";
import About from "./Pages/About";
function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <Router>
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 3000,
              style: {
                background: "#363636",
                color: "#fff",
                fontSize: "14px",
                borderRadius: "8px",
                padding: "12px 20px",
              },
              success: {
                duration: 3000,
                style: {
                  background: "#10b981",
                  color: "#fff",
                },
                iconTheme: {
                  primary: "#fff",
                  secondary: "#10b981",
                },
              },
              error: {
                duration: 3000,
                style: {
                  background: "#ef4444",
                  color: "#fff",
                },
              },
            }}
          />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <FetchApi/>
                  <About/>
                  <Contact />
                </>
              }
            />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </FavoritesProvider>
  );
}

export default App;
