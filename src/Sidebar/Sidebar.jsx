import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";

const Sidebar = ({ isOpen }) => {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    // Создаем новый IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Устанавливаем активный раздел по ID
          }
        });
      },
      {
        threshold: 0.3, // Когда раздел на 50% виден
      }
    );

    // Настройка observer для всех разделов
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Очистка observer при размонтировании компонента
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  function clickedSection(item) {
    setActiveSection(item);
  }

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul className="menu">
        <li>
          <a
            className={activeSection === "introduction" ? "active" : ""}
            onClick={() => clickedSection("introduction")}
            href="#introduction"
          >
            1. Введение
          </a>
        </li>

        <li>
          <a
            className={activeSection === "programs" ? "active" : ""}
            onClick={() => clickedSection("programs")}
            href="#programs"
          >
            2. Программы магистратуры
          </a>
        </li>

        <li>
          <a
            className={activeSection === "advantages" ? "active" : ""}
            onClick={() => clickedSection("advantages")}
            href="#advantages"
          >
            3. Преимущества обучения
          </a>
        </li>

        <li>
          <a
            className={activeSection === "extra-curricular" ? "active" : ""}
            onClick={() => clickedSection("extra-curricular")}
            href="#extra-curricular"
          >
            4. Внеклассные возможности
          </a>
        </li>

        <li>
          <a
            className={activeSection === "gallery" ? "active" : ""}
            onClick={() => clickedSection("gallery")}
            href="#gallery"
          >
            5. Галерея
          </a>
        </li>

        <li>
          <a
            className={activeSection === "contacts" ? "active" : ""}
            onClick={() => clickedSection("contacts")}
            href="#contacts"
          >
            6. Приемная комиссия
          </a>
        </li>
      </ul>

      {/* соц сети */}
      <div className="social-icons">
        <a
          href="https://www.facebook.com/AlaTooInternationalUniversity/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/alatoo.edu.kg?igsh=YXpnZzdhOHUzc2cw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/school/alatoo-international-university/?originalSubdomain=kg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://t.me/+37SFo81Jl4RiMTU6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram />
        </a>
        <a
          href="https://www.youtube.com/@aiutv1996"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
