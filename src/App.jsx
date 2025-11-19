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
import React, { useState } from "react";
<<<<<<< HEAD
import Contact2 from "./Pages/Contact2";
=======
import AuthProvider from "./components/AuthContext";
>>>>>>> 108b4828a22d5343cb53d686ad6be646830c70ac

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <AuthProvider>
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
                  marginTop: "35px",
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
<<<<<<< HEAD
              },
            }}
          />
          <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <FetchApi searchTerm={searchTerm} />
                  <About />
                  <Contact2/>
                </>
              }
=======
              }}
>>>>>>> 108b4828a22d5343cb53d686ad6be646830c70ac
            />
            <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <FetchApi searchTerm={searchTerm} />
                    <About />
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
    </AuthProvider>
  );
}

export default App;
