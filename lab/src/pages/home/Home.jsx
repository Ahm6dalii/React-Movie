import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import MovieCard from "../../components/movieCard/movieCard";
import LoadingScreen from "../../components/loading/LoadingScreen";
import { Pagination } from "react-bootstrap";

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=b932594aaa08e98c262cc502b4484e3d"
      );
      const data = response.data.results;
      setMoviesList(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const fetchSearchData = async (serString) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b932594aaa08e98c262cc502b4484e3d&query=${serString} `);
      const data = response.data.results;
      setMoviesList(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const fetchPageData = async (countNum) => {
    console.log(countNum,"-------");

    if(countNum<=0)
    {
      countNum=0
    }
    console.log(countNum,"+++++++++");
    
    setLoading(true);
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b932594aaa08e98c262cc502b4484e3d&page=${countNum}`);
      const data = response.data.results;
      setMoviesList(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <LoadingScreen/>
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center text-secondary mb-4">News Movie</h1>
      <div className="d-flex justify-content-center mb-4">
                <input
                autoFocus={!!search}
                    type="text"
                    className="form-control me-2 auto-f"
                    placeholder='Search for movies'
                    value={search}
                    onChange={(e) => {setSearch(e.target.value),fetchSearchData(search)}}
                />
                {/* <button
                    className="btn btn-primary"
                    onClick={(e) => fetchSearchData(search)}
                >
                    Search
                </button> */}
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
     <div className="d-flex justify-content-between">
        <button disabled={count==0} onClick={()=>{setCount(count<=0?0:count-1),fetchPageData(count)}} className="btn btn-outline-secondary">Prev</button>
        <button onClick={()=>{ setCount(count+1),fetchPageData(count)}} className="btn btn-outline-secondary">Next</button>
     </div>

    </div>
  );
};

export default Home;
