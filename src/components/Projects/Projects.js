import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Projects.css";

import project1 from "../../image/project1.jpg";
import project2 from "../../image/project2.jpg";
import project3_1 from "../../image/project3_1.jpg";
import project3_2 from "../../image/project3_2.jpg";
import project4_1 from "../../image/project4_1.jpg";
import project4_2 from "../../image/project4_2.jpg";
import project4_3 from "../../image/project4_3.jpg";
import project4_4 from "../../image/project4_4.jpg";
import project5_1 from "../../image/project5_1.jpg";
import project5_2 from "../../image/project5_2.jpg";
import project6_1 from "../../image/project6_1.jpg";
import project6_2 from "../../image/project6_2.jpg";

function Projects() {
  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <div className="projects-container">
        <div className="big-number">2</div>
        <div className="vertical-line"></div>
        <h1 className="projects-title">Projects</h1>
        <div className="project">
          <h2>ReactJS. Основи</h2>
          <img
            src={project1}
            alt="Project 1"
            className="project-image project1"
          />
          <p>
            Опис: У цьому проекті ви створюєте функціональний компонент для
            відображення публікацій, схожих на ті, які можна побачити на
            соціальних мережах, таких як Twitter або Facebook.
          </p>
          <p>Використані технології: ReactJS</p>
        </div>

        <div className="project">
          <h2>ReactJS. Хуки</h2>
          <img
            src={project2}
            alt="Project 2"
            className="project-image project2"
          />
          <p>
            Опис: У цьому завданні ви створюєте компонент Contracts, який
            управляє станом та логікою, і компонент Contract, який відображає
            інформацію про контакти. Додатково ви додаєте можливість пошуку
            контактів за прізвищем та відображення іконок статі. Фільтрація
            контактів за ім'ям, прізвищем та номером також доступна.
          </p>
          <p>Використані технології: ReactJS</p>
        </div>

        <div className="project">
          <h2>Класові компоненти Стан та життєвий цикл</h2>
          <img
            src={project3_1}
            alt="Project 3.1"
            className="project-image project3-1"
          />
          <img
            src={project3_2}
            alt="Project 3.2"
            className="project-image project3-2"
          />
          <p>
            Опис: У цьому завданні створюється компонент Timer, який може бути
            використаний для зворотнього відліку часу. Компонент має кнопки для
            старту та паузи, можливість автоматичного запуску. Таймер також
            оновлюється з вказаним інтервалом і має анімацію зменшення довжини
            полоски.
          </p>
          <p>Використані технології: ReactJS</p>
        </div>

        <div className="project">
          <h2>ReactJS. Поняття SPA. Навігація</h2>
          <img
            src={project4_1}
            alt="Project 4.1"
            className="project-image project4-1"
          />
          <img
            src={project4_2}
            alt="Project 4.2"
            className="project-image project4-2"
          />
          <img
            src={project4_3}
            alt="Project 4.3"
            className="project-image project4-3"
          />
          <img
            src={project4_4}
            alt="Project 4.4"
            className="project-image project4-4"
          />
          <p>
            Опис: В цьому завданні створюється простий односторінковий додаток
            (SPA) з навігацією між різними сторінками. Реалізовані головна
            сторінка, сторінка публікацій, сторінка з фотографіями та сторінка з
            контактами. Навігація здійснюється через меню.
          </p>
          <p>Використані технології: ReactJS, React Router</p>
        </div>

        <div className="project">
          <h2>ReactJS. Підходи до стилізації. StyledComponents. Animations</h2>
          <img
            src={project5_1}
            alt="Project 5.1"
            className="project-image project5-1"
          />
          <img
            src={project5_2}
            alt="Project 5.2"
            className="project-image project5-2"
          />
          <p>
            Опис: У цьому проекті створюється форма входу та реєстрації в
            додатку, використовуючи підходи до стилізації, такі як Styled
            Components. Форми мають валідацію полів, зміну кольору бордера при
            наборі даних, і вони взаємодіють з локальним сховищем для
            запам'ятовування даних та автоматичного підтягування їх при
            наступному вході.
          </p>
          <p>
            Використані технології: ReactJS, React Router, Styled Components
          </p>
        </div>

        <div className="project">
          <h2>Redux</h2>
          <img
            src={project6_1}
            alt="Project 6.1"
            className="project-image project6-1"
          />
          <img
            src={project6_2}
            alt="Project 6.2"
            className="project-image project6-2"
          />
          <p>
            Опис: У цьому завданні створюється Redux store, де зберігаються дані
            про публікації з фейковими даними. Реалізована форма для введення
            даних про публікацію, а також кнопки для лайків, коментарів та
            перепостів, які збільшують або зменшують значення при натисканні.
          </p>
          <p>Використані технології: ReactJS, Redux</p>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Projects;
