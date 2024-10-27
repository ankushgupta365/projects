import axios from "axios";

export const BASE_URL = "http://localhost:8801/api"
export const PRODUCTION_URL= "https://emailapi.idolcu.in/api"


let TOKEN;
const getToken = ()=>{
    if(localStorage.getItem("adminuseremailservice")){
        TOKEN = JSON.parse(localStorage.getItem("adminuseremailservice"))?.accestoken
}
}
getToken()

export const publicRequest = axios.create({
    baseURL: BASE_URL
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})