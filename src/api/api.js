import axios from "axios";
const BASE_URL = "http://localhost:1234/movies/";
let config = {
  headers: {
    "Content-Type": "application/json",
  },
};
export async function getAllMovies() {
  return await axios.get(BASE_URL, config).then((response) => {
    return response.data;
  });
}



