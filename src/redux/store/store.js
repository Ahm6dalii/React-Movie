// import { applyMiddleware, createStore} from 'redux'
// import CombineReducers from '../reducer/combinedReducer'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import { thunk } from 'redux-thunk'
// const myStore=createStore(CombineReducers,composeWithDevTools(applyMiddleware(thunk)))

import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../reducer/languageReducer";
import { movieReducer } from "../reducer/movieReducer";
import favoriteReducer from "../reducer/favoriteReducer";

const myStore =configureStore({
    reducer:{
        lang:languageReducer,
        movie:movieReducer,
        fav:favoriteReducer
    }
})

export default myStore
