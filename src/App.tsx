import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import SingerTopAlbumsAndTopTracks from "./pages/SingerTopAlbumsAndTopTracks";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/singer-albums-tracks'
          element={<SingerTopAlbumsAndTopTracks />}
        />
      </Routes>
    </Router>
  );
};
export default App;
