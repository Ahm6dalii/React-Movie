import { combineReducers } from "redux"
import FavorriteReducer from "./favoriteReducer"
import { MovieReducer } from "./movieReducer"
export default  combineReducers ({
    myFav:FavorriteReducer,
    myMovie:MovieReducer
})