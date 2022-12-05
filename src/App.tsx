import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "./about";
import { CareersPage } from "./careers";
import { ContactPage } from "./contact";
import { HomePage } from "./home";
import { OrderPage } from "./order";

function App() {
  return (
    <div className="flex-grow">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
