import React from "react";
import "./Advantages.scss";

const advantages = [
  {
    id: 1,
    title: "Ведущие преподаватели и международные эксперты",
    description:
      "Преподаватели являются передовыми специалистами в своих областях. Опыт работы в международных компаниях, дипломатии, IT, бизнесе и праве. Приглашенные лекторы из зарубежных университетов и организаций.",
  },
  {
    id: 2,
    title: "Современный и практико-ориентированный подход",
    description:
      "Сочетание теоретического обучения и реальных кейсов. Практические занятия, разбор бизнес-кейсов, симуляции судебных процессов и стартап-проекты. Использование цифровых инструментов, лабораторий и современных методик обучения.",
  },
  {
    id: 3,
    title: "Международное признание и академическая мобильность",
    description:
      "Возможность участвовать в программах обмена (Erasmus+, Bilateral Student Exchange). Программы двойного диплома с зарубежными вузами. Диплом признается международными компаниями и академическими институтами.",
  },
  {
    id: 4,
    title: "Карьерные перспективы и трудоустройство",
    description:
      "Прямое сотрудничество с международными компаниями, госорганами и НПО. Центр карьеры: подготовка к собеседованиям, резюме, стажировки. Высокий процент трудоустройства выпускников в престижные организации.",
  },
  {
    id: 5,
    title: "Исследования, инновации и гранты",
    description:
      "Участие в научных конференциях и грантовых исследованиях. Возможность публикации в международных журналах. Доступ к исследовательским лабораториям и передовым технологиям.",
  },
  {
    id: 7,
    title: "Гибкость и удобные форматы обучения",
    description:
      "Очное, дистанционное и гибридное обучение. Возможность совмещать учебу и работу благодаря вечерним и онлайн-курсам.",
  },
  {
    id: 8,
    title: "Финансовая поддержка и стипендии",
    description:
      "Гранты и скидки до 100% для отличников и активных студентов. Финансирование научных исследований и студенческих стартапов.",
  },
];

const Advantages = () => {
  return (
    <section id="advantages">
      <h1 className="section-title">Преимущества обучения</h1>
      <p className="section-description">
        Почему стоит выбрать магистратуру в Международном университете Ала-Тоо?
      </p>

      <div className="advantages-list">
        {advantages.map((adv, index) => (
          <div key={adv.id} className="advantage-item">
            <div className="advantage-number">#{index + 1}</div>
            <div className="advantage-content">
              <h3>{adv.title}</h3>
              <p>{adv.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
