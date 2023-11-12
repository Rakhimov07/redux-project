import axios from "axios";
import { getItem } from "../helpers";

axios.defaults.baseURL = 'https://api.realworld.io/api'

axios.interceptors.request.use(config => {
    const token = getItem('token')
    const authoraztion = token ? `Token ${token}`:''
    config.headers.Authorization = authoraztion

    return config
})

export default axios