import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { inputReducer } from './inputReducer';
import { commentsReducer } from "./commentsReducer";
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    commentsReducer,
    appReducer,
})

/*
time=promt(«0,1-0,2»);
id=promt(«1640762210»);
startdate(«03.03.2022»);
starttime(«21:30»);
finishdate(«03.03.2022»);
finishtime(«21:44»);
city(«all»);
a=document.getElementsByClassName("_5f5mN");
b=document.getElementsByClassName("aOOIW");
function insta() {
if (a[0]){a[0].click()}
if (b[0]){b[0].click()}
}
*/