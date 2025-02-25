import React, { useState, useEffect } from "react";
import {
  FaBook,
  FaRegCalendarAlt,
  FaClock,
  FaFileAlt,
  FaCheckCircle,
} from "react-icons/fa";
import "./Programs.scss";

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/programs")
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="section-programs">
      {/* программы магистра */}
      <section id="programs">
        <h1>Программы магистратуры</h1>
        <p className="program-subtext">Перечень направлений магистратуры:</p>

        <div className="program-grid">
          {programs.map((program) => (
            <div key={program.id} className="program-card">
              <div className="program-header">
                <div className="program-icon">
                  <FaBook />
                </div>
                <h2 className="program-title">{program.title}</h2>
                <p className="program-subtitle">{program.degree}</p>
              </div>

              <p className="program-text">
                <strong>Срок:</strong> {program.duration} |{" "}
                <strong>Язык:</strong> {program.language}
              </p>

              <button
                className="expand-btn"
                onClick={() => toggleExpand(program.id)}
              >
                {expandedId === program.id ? "Скрыть" : "Подробнее"}
              </button>

              {expandedId === program.id && (
                <div className="expanded-content">
                  <h3>Описание</h3>
                  <p>{program.description}</p>

                  {program.subsections && (
                    <div className="program-subsections">
                      {program.subsections.map((section, index) => (
                        <div key={index}>
                          <p>
                            <strong>{section.title}:</strong> {section.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <h3>Профильные предметы</h3>
                  <ul>
                    {program.subjects.map((subject, index) => (
                      <li key={index}>{subject}</li>
                    ))}
                  </ul>

                  <h3>Карьерные перспективы</h3>
                  <p>{program.career}</p>

                  <h3>Требования</h3>
                  <ul>
                    {program.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* доп инфо */}
      <section className="more-info">
        <div className="info-card">
          <FaClock className="info-icon" />
          <h3 className="info-title">Рабочие дни</h3>
          <p className="info-text">Понедельник-пятница, с 9:00 до 17:00</p>
        </div>

        <div className="info-card">
          <FaRegCalendarAlt className="info-icon" />
          <h3 className="info-title">Срок обучения</h3>
          <p className="info-text">
            2 года (2,5 года для дистанционного обучения)
          </p>
        </div>

        <div className="info-card">
          <FaFileAlt className="info-icon" />
          <h3 className="info-title">Документы для поступления</h3>
          <p className="info-text">
            Принимаются с 17 июля по 1 октября 2024 г.
          </p>
        </div>
      </section>

      {/* доки для поступления */}
      <section className="documents-section">
        <h4>Документы для поступления в магистратуру:</h4>
        <ul className="documents-list">
          <li>
            <FaCheckCircle className="check-icon" /> Диплом бакалавра с
            вкладышем (оригинал)
          </li>
          <li>
            <FaCheckCircle className="check-icon" /> Фото размером 3x4 (2 шт.)
          </li>
          <li>
            <FaCheckCircle className="check-icon" /> Копия паспорта (оригинал
            для просмотра)
          </li>
          <li>
            <FaCheckCircle className="check-icon" /> Личный листок по учету
            кадров
          </li>
        </ul>
      </section>

      {/* заметка иностранцам */}
      <section className="foreign-note">
        <h4>На заметку иностранным гражданам!</h4>
        <p>
          Представить перевод паспорта, диплома и его вкладыша на кыргызский
          либо на русский языки (перевод должен быть подтвержден
          сертифицированным нотариусом или переводческой фирмой).
        </p>
      </section>
    </section>
  );
};

export default Programs;
