import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const initialState={
    movie:[]
}

export const getMovie=createAsyncThunk('movie\getMovie',async({page=1,lang='en',param=''})=>{
    console.log(param,'param');
    console.log(page,lang,'param');
    const apiKey='b932594aaa08e98c262cc502b4484e3d'
    const apiLink= param===''?`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=${lang}&page=${page}`:`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${param}`
    console.log(apiLink);
    return axios.get(apiLink)
    .then((res)=>{
                   return res.data
                }).catch((err)=>console.log(err))
})

let movieSlice=createSlice({
    name:'movie',
    initialState,
    extraReducers:(bulider)=>{
        bulider.addCase(getMovie.fulfilled,(state,action)=>{
            state.movie=action.payload
        })
    }
})

export let movieReducer=movieSlice.reducer

                    // export const MovieReducer=(state=INITIAL_VALUE,action)=>{
                    // switch (action.type) {
                    //     case 'MOVIE_DATA':
                    //  return {
                    //       ...state,
                    //      movie:action.payload
                    //             }
                    
                    //     default:
                    //         return state
                    // }
                    
                    // }