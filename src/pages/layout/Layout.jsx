import { Outlet } from "react-router-dom";
import Navebar from './../../components/navebar/Navebar';
import Footer from './../../components/footer/Footer';
import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import LangContext from "../../context/langContext";
import { useSelector } from "react-redux";


export default function Layout() {

  const {theme,setTheme}=useContext(ThemeContext)
  // const {lang,setLang}=useContext(LangContext)
  const lang=useSelector(state=>state.lang.language)
  // console.log(lang);
  
  return (
    <>
    {/* className={`${theme=="dark"?'bg-dark text-light':'bg-light text-dark'}`} */}
    <div className={`${theme=="dark"?'light':'dark'}`} dir={lang=='ar'?'rtl':'ltr'} >
      <Navebar  />
      <div className=" mvh-70 px-2 sm:px-10 md:px-15 lg-px20 mx-auto pb-[160px] py-2 text-slate-900  dark:bg-gray-900 dark:text-slate-100">
        <Outlet />
      </div>
      <Footer />

    </div>
    </>
  );
}
