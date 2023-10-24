import axios from "axios";

export const endPointBack = axios.create({
    baseURL: "http://localhost:3045/api/"
})