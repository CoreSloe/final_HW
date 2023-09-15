import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

import { CSSTransition } from "react-transition-group";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Дані форми:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <div className="contact-container">
        <h1 className="contact-title">About me</h1>
        <div className="big-number">5</div>
        <div className="vertical-line"></div>
        <p>
          Мене звати Олесь. Я є Frontend-розробник, і це моя сторінка портфоліо,
          де я ділюся своїми професійними досягненнями та роботами.
        </p>

        <p>
          <strong>Email</strong>
        </p>
        <p>CoreSloe92@gmail.com</p>
        <h2>Місцезнаходження</h2>
        <p>
          Я базуюсь у м. Вараш, Україна але готовий до співпраці з клієнтами з
          усього світу.
        </p>

        <h2>Форма зворотнього зв'язку</h2>
        <p>
          Я завжди радий отримати відгуки, пропозиції або запити щодо співпраці.
          Ви можете використовувати цю форму, щоб надіслати мені повідомлення:
        </p>

        {/* Форма зворотнього зв'язку */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
        <div className="social-links-container">
          <p>
            <a href="[Посилання на Facebook]" className="social-link">
              <FaFacebook /> Facebook
            </a>
          </p>
          <p>
            <a href="[Посилання на LinkedIn]" className="social-link">
              <FaLinkedin /> LinkedIn
            </a>
          </p>
          <p>
            <a href="[Посилання на Instagram]" className="social-link">
              <FaInstagram /> Instagram
            </a>
          </p>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Contact;
