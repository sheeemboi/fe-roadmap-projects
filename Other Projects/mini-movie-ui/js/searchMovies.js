import { movies } from "./db.js";
import { featured, $movieWrapper } from "./index.js";

export default function searchMovies(query, prop) {
    if (query === "" | query === "all") {
        document.querySelector(".main-header").textContent = `Featured Movies`;
        $movieWrapper.innerHTML = featured;

        return [];
    } else {
        document.querySelector(".main-header").textContent = `Results for: ${query}`;
        return movies.filter((movie) => {
          return movie[prop].toUpperCase().includes(query.toUpperCase());
      });
    }
  };