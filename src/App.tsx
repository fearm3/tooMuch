import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import SingerTopAlbumsAndTopTracks from "./pages/SingerTopAlbumsAndTopTracks";
import { useEffect } from "react";
import { getTopArtists } from "./store/features/artist/fazlaSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./store";
import Navbar from "./components/navbar";

const App = () => {
  const dispatch = useDispatch();
  const { artists }: any = useAppSelector((state) => state.fazla);

  useEffect(() => {
    if (artists?.page) {
      dispatch(getTopArtists(artists?.page));
    }
  }, [dispatch, artists?.page]);

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
