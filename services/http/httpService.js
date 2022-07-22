import axios from "axios";

const baseHttp = axios.create({
  baseURL: process.env.BACKEND_URL,
});


baseHttp.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

baseHttp.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

export default baseHttp;
