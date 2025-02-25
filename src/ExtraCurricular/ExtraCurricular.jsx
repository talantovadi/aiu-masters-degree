import React, { useRef } from "react";
import "./ExtraCurricular.scss";
import imageOne from "./../assets/exchange-program.jpg"
import imageTwo from "./../assets/research(2nd-img).jpg"
import imageThree from "./../assets/career.jpg"
import imageFour from "./../assets/student-club.jpg"
import imageFive from "./../assets/international-events.png"
import imageSix from "./../assets/social-events.jpg"
import imageSeven from "./../assets/sport-in-aiu.png"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const extracurricularActivities = [
  {
    title: "Академическая мобильность и международные программы",
    description:
      "Erasmus+ и Bilateral Student Exchange – возможность обучаться в зарубежных вузах. Программы двойного диплома с международными университетами.",
    image: imageOne,
  },
  {
    title: "Исследовательская деятельность и публикации",
    description:
      "Работа над научными исследованиями и участие в грантовых проектах. Возможность публикаций в международных научных журналах.",
    image: imageTwo,
  },
  {
    title: "Карьерные возможности и стажировки",
    description:
      "Программы стажировок в международных компаниях, государственных органах, НПО. Карьерный центр: тренинги, мастер-классы, помощь в подготовке резюме и интервью.",
    image: imageThree,
  },
  {
    title: "Студенческие клубы и сообщества",
    description:
      "Fin-Club – клуб для будущих финансистов и экономистов. Enactus – предпринимательские проекты и стартапы. Man-Club – менеджмент и лидерство.",
    image: imageFour,
  },
  {
    title: "Участие в международных ивентах",
    description:
      "Хакатоны, бизнес-форумы, юридические симуляции. Дебаты, круглые столы, публичные лекции с международными экспертами.",
    image: imageFive,
  },
  {
    title: "Социальные и культурные мероприятия",
    description:
      "Дни культурных обменов, фестивали и международные встречи. Организация благотворительных и волонтерских проектов.",
    image: imageSix,
  },
  {
    title: "Спортивные и киберспортивные мероприятия",
    description:
      "Футбол, баскетбол, волейбол, теннис, шахматные турниры. E-Sports клуб – турниры по киберспорту.",
    image: imageSeven,
  },
];

const Extracurricular = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += direction === "left" ? -350 : 350;
    }
  };

  return (
    <section id="extra-curricular">
      <h1 className="title">Внеклассные возможности</h1>

      <div className="scroll-container">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          <FaChevronLeft />
        </button>

        <div className="cards-container" ref={scrollRef}>
          {extracurricularActivities.map((activity, index) => (
            <div key={index} className="opportunity-card">
              <img
                src={activity.image}
                alt={activity.title}
                className="opportunity-image"
              />
              <div className="opportunity-content">
                <h2 className="opportunity-title">{activity.title}</h2>
                <p className="opportunity-description">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          <FaChevronRight />
        </button>
      </div>

    </section>
  );
};

export default Extracurricular;
