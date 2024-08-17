export const changeFavorite=(payload)=>{
    console.log(payload);
    
return{
    type:"CHANGE_FAV",
    payload
}
}
export const removeFavorite=(payload)=>{
    console.log(payload);
    
return{
    type:"REMOVE_FAV",
    payload
}
}
export const removeAllFavorite=(payload)=>{
    console.log(payload);
    
return{
    type:"REMOVE_All",
    payload
}
}