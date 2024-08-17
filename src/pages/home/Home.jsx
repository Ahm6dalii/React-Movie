import { useContext, useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import MovieCard from "../../components/movieCard/movieCard";
import LoadingScreen from "../../components/loading/LoadingScreen";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeFavorite } from "../../redux/action/FavoriteAction";
import { movieAction } from "../../redux/action/moveAction";
import LangContext from "../../context/langContext";
import { getMovie } from "../../redux/reducer/movieReducer";

const Home = () => {
  const {lang,setLang}=useContext(LangContext)
  const [moviesList, setMoviesList] = useState([]);
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(1);
  const dispatch = useDispatch()
  const translate=useSelector(state=>state.lang.translation)


 const myFav= useSelector((state)=>state.fav.favorite);
 console.log(myFav);
 
 const Movie= useSelector((state)=>state.movie.movie.results);
 console.log(Movie);



 const handleFavorite=(data) =>{
  const newFav=[...myFav.favItem,data]
   dispatch(changeFavorite(data))
 }
 

  
  const fetchPageData = (page)=>{
    console.log(page);
    
    dispatch(getMovie({page}))
  }
  const fetchSearchData =(searchSt)=>{
    // console.log(count,lang,searchSt);
    let page=count
    let param=searchSt

    dispatch(getMovie({page,lang,param}))
  }

  useEffect(() => {
    // fetchData();
    dispatch(getMovie(1))
  }, []);
  useEffect(() => {
    setMoviesList(Movie?Movie:[]);
  },[Movie])

  if (false) {
    return <LoadingScreen/>
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center text-secondary mb-4 title">{translate.homeTitle}</h1>
      <div className="d-flex justify-content-center mb-4">
                <input
                autoFocus={!!search}
                    type="text"
                    className="form-control me-2 auto-f"
                    placeholder='Search for movies'
                    value={search}
                    onChange={(e) => {setSearch(e.target.value),fetchSearchData(search)}}
                />
            </div>
             <div>
        {moviesList.length > 0 ? (
          <div className="row">
            {moviesList.map((movie, key) => (
              <div className="col-md-3 mb-4" key={key}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">
            No movies found whih this name.
          </p>
        )}
      </div>
      <i className="i"></i>
     <div className="d-flex justify-content-between">
        <button disabled={count==0} onClick={()=>{setCount(count<=0?0:count-1),fetchPageData(count)}} className="btn btn-outline-secondary">{translate.prev}</button>
        <button onClick={()=>{ setCount(count+1),fetchPageData(count+1)}} className="btn btn-outline-secondary">{translate.next}</button>
     </div>

    </div>
  );
};

export default Home;


  
  // let  fetchData = async () => {
  // let setLoading(true);}
  //   try {
  //     const response = await axios.get(
  //       "https://api.themoviedb.org/3/movie/popular?api_key=b932594aaa08e98c262cc502b4484e3d"
  //     );
  //     const data = response.data.results;
  //     setMoviesList(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // const fetchSearchData = async (serString) => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b932594aaa08e98c262cc502b4484e3d&query=${serString} `);
  //     const data = response.data.results;
  //     setMoviesList(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // const fetchPageData = async (countNum) => {
  //   console.log(countNum,"-------");

  //   if(countNum<=0)
  //   {
  //     countNum=0
  //   }
  //   console.log(countNum,"+++++++++");
    
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b932594aaa08e98c262cc502b4484e3d&page=${countNum}`);
  //     const data = response.data.results;
  //     setMoviesList(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  