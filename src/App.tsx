import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "./about";
import { CareersPage } from "./careers";
import { ContactPage } from "./contact";
import { HomePage } from "./home";
import { Footer } from "./layout/footer";
import { Header } from "./layout/header";
import { OrderPage } from "./order";
import { Products } from "./products";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
