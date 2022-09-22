import { useState, useEffect } from "react"
import ApiMovie from "./ApiMovie"
import "./App.css"
import FeaturedMovie from "./components/FeaturedMovie"
import MovieSection from "./components/MovieSection"

function App() {
  const [moviesList, setMoviesList] = useState([])
  const [featuredData, setfeaturedData] = useState(null)

  useEffect(() => {
    //la list de ts les films
    const loadAllMovies = async () => {
      let list = await ApiMovie.getHomeMovies()
      // console.log(list);
      setMoviesList(list);

      //1film à l'affiche
      let originals = list.filter((oneMovie) => oneMovie.slug === "top-rated")
      // console.log(originals);

      let chooseRandomMovie = Math.floor(
        Math.random() * (originals[0].items.results.lenght - 1)
      )
      let chosen = originals[0].items.results[chooseRandomMovie]
      // console.log(chosen);

      //info recuperer de l'api
      let chosenInfo = await ApiMovie.getMovieInfo(chosen.id, "movie")
      //console.log(chosenInfo);

   
      setfeaturedData(chosenInfo)
    
    }

    loadAllMovies()
  }, [])

  return (
    <div className="page">
      {featuredData && <FeaturedMovie films={featuredData}/>}
      <section className="lists">
        {moviesList.map((item, key) => (
          <MovieSection key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App