import React from "react";
import "./Introduction.scss";
import {FaBars} from "react-icons/fa"

const Introduction = ({ handleSidebarClick }) => {
  return (
      <section id="introduction">
        <FaBars onClick={handleSidebarClick} className="menu-icon"/>
        <h1>Магистратура в Международном университете Ала-Тоо</h1>
        <h2>Введение</h2>
        <p>
          Магистратура Университета Ала-Тоо помогает студентам углубить знания,
          развить навыки и продвинуться в карьере. Программы обучения
          соответствуют современным требованиям, а преподаватели с международным
          опытом обучают актуальным методам.
        </p>
        <p>
          Студенты получают как теоретические, так и практические знания, что
          помогает им стать конкурентоспособными специалистами. Университет
          также предлагает доступ к лабораториям, международным проектам и
          стажировкам, а также помогает развить лидерские качества и критическое
          мышление.
        </p>

        <div className="video-aiu">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/KBV3xnIlSwE?si=Mav-gWtFQnbCJOOQ&amp;start=60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </section>

      

  );
};

export default Introduction;
