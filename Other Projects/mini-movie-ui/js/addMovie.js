import { movies } from "./db.js";

function Movie(title, genre, director, year, runtime) {
	this.title = title;
	this.genre = genre;
	this.director = director;
	this.year = +year;
	this.runtime = +runtime;
}

export default function inpMovie() {
	let inpTitle = document.querySelector("#title").value;
	let inpGenre = document.querySelector("#genre").value;
		let inpDirector = document.querySelector("#director").value;
		let inpYear = document.querySelector("#year").value;
		let inpRuntime = document.querySelector("#runtime").value;
		
		let newMovie = new Movie(inpTitle, inpGenre, inpDirector, inpYear, inpRuntime)
		movies.push(newMovie);
}