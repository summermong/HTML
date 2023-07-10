import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ medium_cover_image, title, summary, genres, id }) {
  return (
    <div>
      {/* key 설정 필요 */}
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={medium_cover_image} alt={title} />
      <p>{summary.length > 200 ? `${summary.slice(0, 201)}... ` : summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}> {g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
