import axios from 'axios'
const axiosBase=axios.create({
    baseURL: 'http://localhost:7700/api'
})
export default axiosBase;