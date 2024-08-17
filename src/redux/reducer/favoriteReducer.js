import { createSlice } from "@reduxjs/toolkit";

// const INITIAL_VALUE=JSON.parse(localStorage.getItem('fav'))?JSON.parse(localStorage.getItem('fav')):[];
// export default function FavorriteReducer(state=INITIAL_VALUE,action){
//   switch(action.type){
//       case "CHANGE_FAV":
//         localStorage.setItem("fav",JSON.stringify( [ ...state , action.payload]))
//         return [ ...state , action.payload]
        
//       case "REMOVE_FAV": //send id
//         let remArr=state.filter((item)=>item.id!==action.payload)
//         localStorage.setItem("fav",JSON.stringify( remArr))
//         return remArr

//       case "REMOVE_All":
//         let remALL=[]
//         localStorage.removeItem("fav")
//         return remALL
        
//         default:
//             return state
            

//   }
// }
const initialState={
  favorite:JSON.parse(localStorage.getItem('fav'))?JSON.parse(localStorage.getItem('fav')):[]
}
const favoriteSlice=createSlice({
  name:'favorite',
  initialState,
  reducers:{
    changeFav:(state,action)=>{
      console.log(state,'state');
      
      localStorage.setItem("fav",JSON.stringify( [ ...state.favorite , action.payload]))
      state.favorite=[ ...state.favorite, action.payload]
      console.log(state.favorite,'state.favorite');
      
    },
    RemoveFav:(state,action)=>{
      let remArr=state.favorite.filter((item)=>item.id!==action.payload)
        localStorage.setItem("fav",JSON.stringify( remArr))
        state.favorite=remArr
    },
    RemoveAll:(state,action)=>{
      let remALL=[]
      localStorage.removeItem("fav")
      state.favorite=remALL
    },
  }
})

export const {changeFav,RemoveFav,RemoveAll}=favoriteSlice.actions;
export default favoriteSlice.reducer