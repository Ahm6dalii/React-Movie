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
import Fovorite from "./components/favirote/fovorite";

import { useState } from "react";
import ThemeContext from "./context/themeContext";
import LangContext from "./context/langContext";

let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "favorite", element: <Fovorite/> },
      { path: "movie", element: <MovieCard /> },
      { path: "movie/:id", element: <MovieDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  const storageThem =JSON.parse(localStorage.getItem("theme"))
  const storageLang =JSON.parse(localStorage.getItem("lang"))
  const [lang, setLangg] = useState(storageLang?storageLang:'en')
  const [theme, setThemee] = useState(storageThem?storageThem:"dark")
  function setTheme(myTheme){
    setThemee(myTheme);
    localStorage.setItem('theme',JSON.stringify(myTheme))
  }
  function setLang(myLang){
    setLangg(myLang);
    localStorage.setItem('lang', JSON.stringify(myLang))
  }
  return (
    <>
           <ThemeContext.Provider value={{theme, setTheme}}> 
           <LangContext.Provider value={{lang, setLang}}> 
             <RouterProvider  router={router}></RouterProvider>
             </LangContext.Provider>
             </ThemeContext.Provider>


    </>
  );
}

export default App;
