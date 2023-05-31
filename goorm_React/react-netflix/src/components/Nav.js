import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    navigate(`/search?q=${event.target.value}`);
  };

  return (
    <nav className={`nav ${show && "nav__black"} `}>
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/640px-Netflix_2015_logo.svg.png"
        className="nav__logo"
        onClick={() => window.location.reload()}
      />
      <input
        className="nav__input"
        type="text"
        placeholder="영화를 검색해주세요."
        value={searchValue}
        onChange={handleChange}
      />
      <img
        alt="User logged"
        src="https://pbs.twimg.com/media/FPOMFrwaQAAOWSc?format=jpg&name=medium"
        className="nav__user"
      />
    </nav>
  );
}
