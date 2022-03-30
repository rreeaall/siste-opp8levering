import Movies from "./components/Movies";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Actor from "./components/Actor";
import Movie from "./components/Movie";
import Actors from "./components/Actors";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Movies />} />

          <Route path="actors">
            <Route index element={<Actors />} />
            <Route path="actors" elements={<Actors />} />
          </Route>

          <Route path="movie">
            <Route index element={<Movies />} />
            <Route path=":slug" element={<Movie />} />
          </Route>

          <Route path="actor">
            <Route index element={<Actors />} />
            <Route path=":name" element={<Actor />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;