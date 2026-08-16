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