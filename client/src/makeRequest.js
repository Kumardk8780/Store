import  axios  from "axios";

const url = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_API_TOKEN;

export const makeRequest = axios.create({
    baseURL: url,
    headers: {
        Authorization: "bearer " + token,
    },
});