import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../movieCard/movieCard';
import { RemoveAll } from '../../redux/reducer/favoriteReducer';

export default function Fovorite() {
    const dispatch = useDispatch()
    const translate=useSelector(state=>state.lang.translation)

        const myFav= useSelector((state)=>state.fav.favorite);
        console.log(myFav);
        const handleRemoveAll=()=>{
            dispatch(RemoveAll())
        }
        
  return <>
  <div className='container'>
  <div className='d-flex justify-content-between align-items-center'>
  <h3 className='py-3 fs-1 title'>{translate.whisTitle  }</h3>
<button onClick={handleRemoveAll} className='btn btn-outline-danger'>Remove All</button>
  </div>

    <div className="row">
            {myFav.map((movie, key) => (
              <div className="col-md-3 mb-4" key={key}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
   {myFav.length==0&& <div className='text-center fs-4'>No items in wish</div>}

  </div>
    </>
}
 