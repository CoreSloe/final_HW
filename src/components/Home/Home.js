// Home.js
import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="big-number">1</div>
      <div className="vertical-line"></div>
      <h1 className="home-title">Home</h1>
      <h2>Projects:</h2>
      <div className="vertical-line2"></div>
      <ul>
        <li>
          ReactJS. Основи - створити компонент для відображення публікації.
        </li>
        <li>
          ReactJS. Хуки - створити компоненти Contracts та Contract для роботи
          зі списком контактів.
        </li>
        <li>
          Класові компоненти Стан та життєвий цикл - створити компонент Timer.
        </li>
        <li>
          ReactJS. Поняття SPA. Навігація - створити односторінкову програму з
          навігацією між сторінками.
        </li>
        <li>
          ReactJS. Підходи до стилізації. StyledComponents. Animations -
          створити форми для входу та реєстрації.
        </li>
        <li>
          Redux - створити Redux store та зберігти в ньому дані про публікації.
        </li>
      </ul>
    </div>
  );
}

export default Home;
