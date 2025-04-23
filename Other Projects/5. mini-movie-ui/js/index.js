import { movies } from "./db.js";
import inpMovie from "./addMovie.js";
import searchMovies from "./searchMovies.js";
import onLoad from "./onLoad.js";

export const $movieWrapper = document.querySelector(".movie-list");
export let featured = "";
window.addEventListener("load", () => {
  featured = onLoad();
  $movieWrapper.innerHTML = featured;
});

document
  .querySelectorAll("form")
  .forEach((form) =>
    form.addEventListener("submit", (e) => e.preventDefault())
  );

document
  .querySelector("#addMovieForm > button")
  .addEventListener("click", inpMovie);

document
  .querySelector("#search")
  .addEventListener("input", (e) => showResult(e));

document
  .querySelector("#selectGenre")
  .addEventListener("input", (e) => selectGenre(e));

document.querySelector(".search-icon").addEventListener("click", () => {
  document.querySelector(".search-icon").classList.toggle("active-s-btn");
  document.querySelector("#search").classList.toggle("active-search");
});
function showResult(e) {
  $movieWrapper.innerHTML = "";

  let query = e.target.value;
  let results = searchMovies(query, "title");

  for (let movie of results) {
    const card = `
		<div class="movie-card">
				<div class="poster-wrap">
						<img src=${movie.img} alt=${movie.title}>
				</div>
				<p>${movie.title}</p>
		</div>
				`;

    $movieWrapper.innerHTML += card;
  }
}

function selectGenre(e) {
  $movieWrapper.innerHTML = "";
  let genre = e.target.value;
  let results = searchMovies(genre, "genre");

  for (let movie of results) {
    const card = `
			<div class="movie-card">
					<div class="poster-wrap">
							<img src=${movie.img} alt=${movie.title}>
					</div>
					<p>${movie.title}</p>
			</div>
					`;

    $movieWrapper.innerHTML += card;
  }
}
