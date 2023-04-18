const API_BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "b20153559d384216be71ca79a4585245";

export const searchMovies = async (query, type) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/search/${type}?api_key=${API_KEY}&query=${query}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export default searchMovies;
