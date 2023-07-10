import { styled } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import axios from "axios";
import "./App.css";

import boredGif from "./img/bored.gif";
import ClickGif from "./img/1.gif";
import ClickGif2 from "./img/2.gif";
import ClickGif3 from "./img/3.gif";

function App() {
  const backgroundArr = [ClickGif, ClickGif2, ClickGif3];

  const [background, setBackground] = useState(boredGif);
  const [activity, setActivity] = useState("");
  const [click, setClick] = useState(false);

  const fetchActivity = async () => {
    try {
      const response = await axios.get("https://www.boredapi.com/api/activity");
      setActivity(response.data.activity);
    } catch (e) {
      setActivity("loading...");
    }
  };

  const handleClick = () => {
    setClick(true);
    fetchActivity();
    const randomIdx = Math.floor(Math.random() * backgroundArr.length);
    setBackground(backgroundArr[randomIdx]);
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Title>
        {click ? "How about this? 💭 " : "Are you feeling bored? 🫠"}
      </Title>
      <Container>
        <Gif src={background} alt="심심한 모습" />
        <Todo>{click ? activity : "I recommend what you do"}</Todo>
        <Button onClick={handleClick}>{click ? "Again" : "Click"}</Button>
      </Container>
    </Wrapper>
  );
}

const GlobalStyle = createGlobalStyle`
body {
  background-color: #9AC5F4;
  margin: 0px;
  width: 100vw;
  height: 100vh;
  color: white;
  font-family: "UhBeemysen";
}`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100vh;
`;

const Title = styled.h2`
  width: 300px;
  display: inline;
  margin: 0px auto 30px;
  text-align: center;
  font-size: 32px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  border: none;
  border-radius: 50px;
  width: 90px;
  height: 40px;
  background-color: #a7ecee;
  font-size: 24px;
  cursor: pointer;
  color: white;
  margin: 0 auto;
  padding-bottom: 20px;
  font-family: "UhBeemysen";
  &:hover {
    transform: scale(1.1);
  }
`;

const Gif = styled.img`
  width: 300px;
  height: 300px;
  display: inline;
  margin: 0 auto;
`;

const Todo = styled.div`
  display: inline;
  margin: 20px auto 10px;
  padding: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  max-width: 280px;
  white-space: pre-line; /* 줄바꿈 처리 */
  word-wrap: break-word; /* 단어 단위 줄바꿈 */
`;

export default App;
