import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "895e2a24f997d162490bcfddde450c28",
    language: "ko-KR",
  },
});

export default instance;
