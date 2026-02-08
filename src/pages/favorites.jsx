import "../css/Favorites.css"
import { useMovieContext } from "../contexts/movieContexts";
import MovieCard from "../components/MovieCard";
function  Favorites() {
    const { favorites } = useMovieContext();
    if (favorites) {
       
        return (
             <div className="favorites">
                <h2>Your Favorite Movies</h2>
                <div className="movies-grid">
            {favorites.map((movie) => (
             <MovieCard movie={movie} key={movie.id} />
            ))} 
        </div>
        </div>
        );
    }
     return <div className="favorites-empty ">
            <h2>You have no favorite movies yet.</h2>
            <p>Start adding movies to your favorites to see them listed here!</p>
        </div>
        
}
export default Favorites;