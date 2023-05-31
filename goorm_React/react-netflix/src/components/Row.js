import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import MovieModal from "./MovieModal";

export default function Row({ isLargeRow, title, id, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
  };

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie); //객체 안에 영화 정보를 넣어줬음
  };

  return (
    <section className="row">
      <h2>{title}</h2> {/* App Row에 있는 title. prop로 받아왔음 */}
      <div className="slider">
        <div className="slider__arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          >
            {"<"}
          </span>{" "}
          {/* 그냥 <>만 쓰면 태그인줄 알고 오류 발생 */}
        </div>

        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
              // 함수 호출 시 어떤 영화를 눌렀는지 알아야 하기 때문
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            {">"}
          </span>
        </div>
      </div>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
      {/* modalOpen이 true면 MovieModal이 보여지는데 이 안에는 movieSelected의 정보가 들어 있음 */}
    </section>
  );
}
