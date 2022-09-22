import React from "react"
import "./FeaturedMovie.css"

function FeaturedMovie({ films }) {
  //console.log("FILM", films);

  return (
    <section className="featured">
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-name">{films.title}</div>
          <div className="featured-info">
            <div className="featured-points">{films.vote_average}</div>
            <div className="featured-year">{films.release_date}</div>
          </div>
          <div>
            {films.overview}
          </div>
          <div className="featured-button">
<a href="/" className="featured-watchbutton">Lecture</a>
<a href="/" className="featured-mylistbutton">+ Ma Liste</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovie
