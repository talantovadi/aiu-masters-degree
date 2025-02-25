import React from "react";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <section id="contacts">
      <h1>Приемная комиссия:</h1>

      <div className="contact-container">
        <h2>Международный университет Ала-Тоо</h2>

        <p>
          <strong>Адрес:</strong> ул. Анкара (Горького) 1/8, мкр Тунгуч, г.
          Бишкек, Кыргызстан
        </p>

        <p>
          <strong>Телефон:</strong>{" "}
          <a
            href="https://wa.me/996998284848"
            target="_blank"
            rel="noopener noreferrer"
          >
            +996 998 284 848 (WhatsApp)
          </a>
        </p>

        <p>
          <strong>E-mail:</strong>
        </p>
        <ul className="email-list">
          <li>
            <a href="mailto:postgraduate@alatoo.edu.kg">
              postgraduate@alatoo.edu.kg
            </a>
          </li>
          <li>
            <a href="mailto:burul.shambetova@alatoo.edu.kg">
              burul.shambetova@alatoo.edu.kg
            </a>
          </li>
          <li>
            <a href="mailto:aikokul.mamaeva@alatoo.edu.kg">
              aikokul.mamaeva@alatoo.edu.kg
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
