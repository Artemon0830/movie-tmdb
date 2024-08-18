import {createContext, useContext} from "react";
let defaultValue={
    theme:'lightTheme',
    toggle:()=>{}
}
 const MyContext=createContext<StoreModel>(defaultValue);
const useAppContext=()=>useContext(MyContext);
export {MyContext,useAppContext,defaultValue}