import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./stylesheets/Page.css";
import "./stylesheets/PageDetail.css";
import "./stylesheets/PagePembayaran.css";
import "./stylesheets/PageNewCar.css";
import "./stylesheets/LandingPage.css";
import PageAdmin from "./pages/PageAdmin";
import PageCars from "./pages/PageCars";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageDetail from "./pages/PageDetail";
import PageNewCar from "./pages/PageNewCar";
import PagePembayaran from "./pages/PagePembayaran";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageAdmin />} />
          <Route path="/pagecars" element={<PageCars />} />
          <Route path="/pagedetail/:id" element={<PageDetail />} />
          <Route path="/pagenewcar" element={<PageNewCar />} />
          <Route path="/pagepembayaran" element={<PagePembayaran />} />
          <Route path="/landingpage" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
