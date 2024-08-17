import { Link } from 'react-router-dom';
import './style.css';

const MovieCard = ({ movie }) => {
    return (
        <div className="card shadow ">
            <Link to={`/movie/${movie?.id}`}>
            <img  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="fixed-h card-img-top" alt={movie?.original_title
                } />
            </Link>
           
            <div className="card-body">
                <h5 className="card-title lin small">{movie.original_title
                }</h5>
                <p className="card-text">Year: {movie?.release_date
                }</p>
                <p className="card-text">Type: {movie.vote_average
                }</p>
            </div>
            {/* <button className='btn btn-outline-secondary'>Show Details</button> */}
        </div>
    );
}

export default MovieCard;
