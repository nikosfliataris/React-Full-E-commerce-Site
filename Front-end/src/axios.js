import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-fliataris-e-shop.cloudfunctions.net/api",
});
export default instance;
