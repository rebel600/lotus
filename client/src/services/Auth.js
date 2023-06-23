import axios from "axios";
import { BASE_API } from "../utils/Constants";

const API_URL = BASE_API + "/auth/";

const Auth = {
  login(credentials) {
    return axios.post(`${API_URL}login`, credentials);
  },
  register(credentials) {
    return axios.post(`${API_URL}register`, credentials);
  },
  logout() {
    return localStorage.removeItem("userToken");
  },
  forgotPassword(value) {
    return axios.post(`${API_URL}forgot-password`, value);
  },
  resetPassword(value, token) {
    return axios.post(`${API_URL}reset-password`, value, {
      headers: { Authorization: "Bearer " + token },
    });
  },
};

export default Auth;