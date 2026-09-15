import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nazarene from "./pages/NazareneWebsite";
import Branding from "./pages/BrandingWebsite";
import BrandingApp from "./pages/BrandingApp";
import Resume from "./pages/Resume";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nazarene" element={<Nazarene />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/branding-app" element={<BrandingApp />} />
        <Route path="/mobile-app" element={<BrandingApp />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
