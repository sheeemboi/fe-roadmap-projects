import { movies } from "./db.js";

export default function onLoad() {
  let arr = [];
  for (let x = 0; x < 5; x++) {
    let randMov = Math.floor(Math.random() * movies.length);
    const isDupe = arr.some((value) => value === randMov);
    if (isDupe) randMov++;
    arr.push(randMov);
  }

  let movArr = []
  for (let val in arr) {
    let thisMovie = arr[val];
    const card = `
      <div class="movie-card">
          <div class="poster-wrap">
              <img src=${movies[thisMovie].img} alt=${movies[thisMovie].title}>
          </div>
          <p>${movies[thisMovie].title}</p>
      </div>
          `;
    movArr.push(card);
  }
  let featured = movArr.join("")

  return featured;
}
