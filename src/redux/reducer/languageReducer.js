import { createSlice } from "@reduxjs/toolkit";
import { En } from "../../language/en";
import { Ar } from "../../language/ar";

const storageLang =JSON.parse(localStorage.getItem("lang"))
const storageTrans =JSON.parse(localStorage.getItem("trans"))
const translation={
    ar:Ar,
    en:En
}
const  initialState={
    language:storageLang?storageLang:'en',
    translation:storageTrans?storageTrans:translation[storageLang?storageLang:'en']
} 
const LanguageSlice=createSlice({
    name:"language",
    initialState,
    reducers:{
        changeLang:(state,action)=>{
            localStorage.setItem('lang', JSON.stringify(action.payload))
            localStorage.setItem('trans', JSON.stringify(translation[action.payload]))
            state.language=action.payload
            state.translation=translation[action.payload]
        }
    }
})

export default LanguageSlice.reducer;
export const {changeLang}=LanguageSlice.actions;