import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';
import ThemeContext from '../../context/themeContext';
import LangContext from '../../context/langContext';
import { movieAction } from '../../redux/action/moveAction';
import { getMovie } from '../../redux/reducer/movieReducer';
import { changeLang } from '../../redux/reducer/languageReducer';
function Navebar() {
  const {theme,setTheme}=useContext(ThemeContext)
  // const {lang,setLang}=useContext(LangContext)
  const lang=useSelector(state=>state.lang.language)
  const translate=useSelector(state=>state.lang.translation)
  console.log(lang);
  console.log(translate);
  
  const myFav= useSelector((state)=>state.fav.favorite);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getMovie(1,lang))
  },[lang])

  const changeCurLanguage=()=>{
dispatch(changeLang(lang=='ar'?'en':'ar'))
  }

  // console.log(myFav)
  return (
    <Navbar expand="lg" className="border-bottom  ">
      <Container>
        <NavLink className='nav-link fs-2' to="/">
        <span className='d-flex gap-1'>
          <span><i className="fa-solid fa-film"></i></span>
          <span>{translate.Logo}</span>
        </span>
      
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={`${theme=="dark"?'light':'dark'} nav-link`} to="/">{translate.home}</NavLink>
            <NavLink className={`${theme=="dark"?'light':'dark'} nav-link`} to="/favorite">{translate.favorit}<span className={`d-inline-block  fw-bolder ${theme=='light'?'text-warning':'text-success'}`}>({ myFav?.length?myFav?.length:''})</span></NavLink>
            <NavLink className={`${theme=="dark"?'light':'dark'} nav-link`} to="/login">{translate.signIn}</NavLink>
            <NavLink className={`${theme=="dark"?'light':'dark'} nav-link`} to="/register">{translate.regiter}</NavLink>
            <button className={`btn ${theme=="dark"?'btn-outline-dark':'btn-outline-light'}`} onClick={()=>setTheme(theme=='light'?'dark':'light')}>{theme}</button>
            <button className={`btn mx-3 ${theme=="dark"?'btn-outline-dark ':'btn-outline-light '}`} onClick={()=>changeCurLanguage()}>{lang}</button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navebar;