import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem('token')
  
  return axios.create({
    //update base url to API url
    baseURL: "http://localhost:5000/",
    headers: { Authorization: token }
  })
}


export default axiosWithAuth;