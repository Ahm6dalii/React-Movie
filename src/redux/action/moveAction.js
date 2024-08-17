import axios from "axios"

export const movieAction=(page=1,lang='en',param='')=>(dispatch)=>{
    const apiKey='b932594aaa08e98c262cc502b4484e3d'
    const apiLink= param===''?`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=${lang}&page=${page}`:`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${param}`
    console.log(apiLink);
    
    return axios.get(apiLink)
                .then((res)=>{
                    console.log(res);                 
                     dispatch({
                        type:'MOVIE_DATA',
                        payload:res.data
                    })
                }).catch((err)=>console.log(err))
}