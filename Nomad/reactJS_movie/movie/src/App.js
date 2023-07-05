import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    // then보다 async
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false); // 이거 안 해주면 계속 LOADING 노출
  };
  // 빈 배열 -> 처음 렌더 시 딱 1번만 실행
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1> LOADING... </h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              {/* key 설정 필요 */}
              <h2>{movie.title}</h2>
              <img src={movie.medium_cover_image} alt="movieImage" />
              <p>
                {movie.summary.length > 200
                  ? `${movie.summary.slice(0, 201)}... `
                  : movie.summary}
              </p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}> {g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
