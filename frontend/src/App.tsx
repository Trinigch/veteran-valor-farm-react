import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Apply from "./pages/Apply";
import GiveMN from "./pages/GiveMN";
import Mission from "./pages/Mission";
import ContactUs from "./pages/ContactUs";

function Layout() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <>
      <Header isHome={isHome} />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* APPLY */}
        <Route path="/apply" element={<Apply />} />

         {/* GIVE MN / DONATE */}
        <Route path="/give-mn" element={<GiveMN />} />

     {/* mission */}
        <Route path="/mission" element={<Mission />} />
     
     {/* Contact Us */}
    <Route     path="/ContactUs" element={<ContactUs />}  />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;