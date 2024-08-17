import "./App.css";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./components/register/Register";
import NotFound from "./pages/notFound/NotFound";
import Layout from "./pages/layout/Layout";
import MovieCard from "./components/movieCard/movieCard";
import MovieDetails from "./pages/movie-details/MovieDetails";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "movie", element: <MovieCard /> },
      { path: "movie/:id", element: <MovieDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
