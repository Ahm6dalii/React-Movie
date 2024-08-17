import { Link } from 'react-router-dom';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFavorite, removeFavorite } from '../../redux/action/FavoriteAction';
import { useState } from 'react';
import { changeFav, RemoveFav } from '../../redux/reducer/favoriteReducer';

const MovieCard = ({ movie }) => {

    const dispatch = useDispatch()
let [isClick,setCliked] =useState(false)
    const myFav= useSelector((state)=>state.fav.favorite);
    // console.log(myFav,'dddd');
   
   
   
    const handleFavorite=(data) =>{
        console.log(data);
        
    //  const newFav= myFav==undefined?data:[...myFav.favItem,data]
     dispatch(changeFav(data))
    //  const favArr=[...myFav.favItem]
    //  const remove=favArr.filter((item)=>item.id!=data.id)
    //  console.log(newFav);
    //  isClick?dispatch(changeFavorite(remove)):dispatch(changeFavorite(newFav));
    }

    const handleRemove=(id)=>{
        dispatch(RemoveFav(id))
    }

    const addOrRemove= myFav?.find((item)=>item.id=== movie.id)
    
    return (
        <div className="card shadow   position-relative">
            <Link to={`/movie/${movie?.id}`}>
            <img  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="fixed-h card-img-top" alt={movie?.original_title
                } />
            </Link>
                <p className={`card-text my-1 text-white avg ${movie.vote_average>7?'bg-danger':' bg-warning'}`}>{Math.floor(movie.vote_average) }</p>
           
            <div className="card-body position-relative">
                <h5 className="card-title lin small">name: {movie.original_name }</h5>
                <p className="card-text my-1 text-success">Year: {movie?.first_air_date}</p>
                   <div className='position-absolute tp-bt text-warning'>
            <i className='position-absolute top-0  mx-2 '  onClick={addOrRemove?()=> {handleRemove(movie.id)}:()=> {handleFavorite(movie)} } class={` ${addOrRemove? 'text-warning fa-solid':'fa-regular'} fa-star fa-xl`}></i>

            </div>
            </div>
            {/* <button className='btn btn-outline-secondary'>Show Details</button> */}
         

        </div>
    );
}

export default MovieCard;
