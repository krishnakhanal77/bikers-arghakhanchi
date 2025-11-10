import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import LandingPage from "./pages/LandingPage";
import Services from "./pages/Services";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/service" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
