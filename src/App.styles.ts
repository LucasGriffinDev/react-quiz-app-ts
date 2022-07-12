import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/mar28mar.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}
* {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  p {
    color: #fff;
    font-size: 1.5rem;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: Fascinate Inline, Roboto;
    background-image: linear-gradient(90deg, #fff, #c1b7b5);
    font-weight: 700;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
  button {
    cursor: pointer;
    margin: 10px;
    border: 6px solid #6f6f6f;
    font-size: 2rem;
    box-shadow: 5px 10px #888888;
    border-radius: 10px;
    padding: 10px 25px;
  }
`;
