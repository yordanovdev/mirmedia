import axios from "axios";
import https from "https";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export default http;
