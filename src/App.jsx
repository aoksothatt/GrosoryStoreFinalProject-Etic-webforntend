import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact2 from "./Pages/Contact2"
import FetchApi from "./components/FetchApi";
import Favorites from "./components/Favorites";
import Cart from "./Pages/CardPage";
import { FavoritesProvider } from "./components/FavoritesContext";
import { CartProvider } from "./components/CartContext";
import AuthProvider from "./components/AuthContext";
import { Toaster } from "react-hot-toast";
import "./app.css";
import  Contact  from "./Pages/Contact";


function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <AuthProvider>
      <FavoritesProvider>
        <CartProvider>
          <Router>
            {/* Toast Notifications */}
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
                  style: { background: "#10b981", color: "#fff" },
                  iconTheme: { primary: "#fff", secondary: "#10b981" },
                },
                error: {
                  duration: 3000,
                  style: { background: "#ef4444", color: "#fff" },
                },
              }}
            />

            {/* Navbar */}
            <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {/* Routes */}
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <FetchApi searchTerm={searchTerm} />
                    <About />
                    <Contact2/>
                    <Contact/>
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
