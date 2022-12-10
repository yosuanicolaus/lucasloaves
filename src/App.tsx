import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "./about";
import { BreadMakingClassPage } from "./bread-making-class";
import { CareersPage } from "./careers";
import { CartProvider } from "./cart";
import { ContactPage } from "./contact";
import { HomePage } from "./home";
import { Footer } from "./layout/footer";
import { Header } from "./layout/header";
import { OrderPage } from "./order";
import { PrivacyPage } from "./privacy";
import { Products } from "./products";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/bread-making-class"
              element={<BreadMakingClassPage />}
            />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
