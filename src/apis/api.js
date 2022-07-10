
import axios from "axios";

const instance = axios.create({
  baseURL: "https://run.mocky.io/",
});

export default {
 
  getApiData: () =>
    instance({
      method: "GET",
      url: "/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17",
    }),

 
};
