import React, { useState } from "react";
import { BsTelephone, BsChatLeftDots } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { language } = useSelector((state) => state.language);
  const { ipAddr } = useSelector((state) => state.ipAddr);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const notyFysuccessMessageFrench = () =>
    toast.success("Merci de nous avoir contacté");

  const notyFysuccessMessageEnglish = () =>
    toast.success("Thank you for contacting us");

  const notyFysuccessMessageEspagnol = () =>
    toast.success("Gracias por ponerse en contacto con nosotros");

  const handleSubmit = (e) => {
    e.preventDefault();
    language === "anglais" && notyFysuccessMessageEnglish();
    language === "francais" && notyFysuccessMessageFrench();
    language === "espagnol" && notyFysuccessMessageEspagnol();
    setEmail("");
    setMessage("");
  };

  return language === "anglais" ? (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Us!</h1>
        <p>We are available 24/7.</p>
      </div>
      <div className="contact-main">
        <div>
          <span>
            <BsTelephone />
          </span>
          <h3>By telephone</h3>
          <p>
            Call us on:{" "}
            <a
              href={
                ipAddr === "Morocco"
                  ? "tel:+852 5162 5108"
                  : "tel:+852 5162 5108"
              }
              style={{
                color: "#333333",
              }}
            >
              {ipAddr === "Morocco" ? "tel:+852 5162 5108" : "+852 5162 5108"}
            </a>{" "}
            (The whole week, 24h/24){" "}
          </p>
        </div>
        <div>
          <span>
            <BsChatLeftDots />
          </span>
          <h3>By online chat</h3>
          <p>
            Ask all your questions by clicking on the chat button at the bottom
            left of each page.
          </p>
        </div>
        <div>
          <span>
            <AiOutlineMail />
          </span>
          <h3>By e-mail</h3>
          <p>
            Write to us on the email address:
            <br></br>
            <a
              href="mailto:support@ibytrade.com"
              style={{
                color: "#333333",
              }}
            >
              support@ibendouma.com
            </a>
          </p>
        </div>
      </div>
      <form className="contact-form">
        <div className="contact-form-input">
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <textarea
            className="area"
            placeholder="Ecrivez votre message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Send" className="send" />
      </form>
      <div className="contact-footer">
        <p>
          By using this website, you accept{" "}
          <Link to="/term-and-conditions" className="contact-link">
            the terms & conditions
          </Link>{" "}
          and{" "}
          <Link to="/privacy-policy" className="contact-link">
            he privacy policy{" "}
          </Link>
          copyright &copy; 2020-
          {new Date().getFullYear()}, ibendouma.All rights are reserved to
          {ipAddr === "Morocco" ? "Ibendouma Limited" : "Ibendouma Limited"}.
          <br></br>
          Adress: ROOMS 1318-20, HOLLYWOODPLAZA, 610 NATHAN ROAD, MONGKOK
          KOWLOON, IBENDOUMA LIMITED.
          <br />
          59 St Martin’s Lane, Suite 8, WC2N 4JS, London, United Kingdom
        </p>
      </div>
    </div>
  ) : language === "espagnol" ? (
    <div className="contact">
      <div className="contact-header">
        <h1>Contacta con nosotras!</h1>
        <p>Estamos disponibles el 24/7.</p>
      </div>
      <div className="contact-main">
        <div>
          <span>
            <BsTelephone />
          </span>
          <h3>Por teléfono</h3>
          <p>
            Llámanos:{" "}
            <a
              href={
                ipAddr === "Morocco"
                  ? "tel:+852 5162 5108"
                  : "tel:+852 5162 5108"
              }
              style={{
                color: "#333333",
              }}
            >
              {ipAddr === "Morocco" ? "+852 5162 5108" : "+852 5162 5108"}
            </a>{" "}
            (Toda la semana, 24h/24){" "}
          </p>
        </div>
        <div>
          <span>
            <BsChatLeftDots />
          </span>
          <h3>Por chat en línea</h3>
          <p>
            Haga todas sus preguntas haciendo clic en el botón de chat en la
            parte inferior izquierda de cada página.
          </p>
        </div>
        <div>
          <span>
            <AiOutlineMail />
          </span>
          <h3>Por correo electrónico</h3>
          <p>
            Escríbanos a la dirección de correo electrónico:
            <br></br>
            <a
              href="mailto:support@ibytrade.com"
              style={{
                color: "#333333",
              }}
            >
              support@ibendouma.com
            </a>
          </p>
        </div>
      </div>
      <form className="contact-form">
        <div className="contact-form-input">
          <div>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              name="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <textarea
            className="area"
            placeholder="Ecrivez votre message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Send" className="send" />
      </form>
      <div className="contact-footer">
        <p>
          Al utilizar este sitio web, usted acepta{" "}
          <Link to="/term-and-conditions" className="contact-link">
            los términos y condiciones
          </Link>{" "}
          y{" "}
          <Link to="/privacy-policy" className="contact-link">
            la política de privacidad{" "}
          </Link>
          derechos de autor &copy; 2020-
          {new Date().getFullYear()}, ibendouma.Todos los derechos están
          reservados a{" "}
          {ipAddr === "Morocco" ? "Ibendouma Limited" : "Ibendouma Limited"}.
          <br></br>
          Dirección: ROOMS 1318-20, HOLLYWOODPLAZA, 610 NATHAN ROAD, MONGKOK
          KOWLOON, IBENDOUMA LIMITED.
          <br />
          59 St Martin’s Lane, Suite 8, WC2N 4JS, London, United Kingdom
        </p>
      </div>
    </div>
  ) : (
    <div className="contact">
      <div className="contact-header">
        <h1>CONTACTEZ-NOUS</h1>
        <p>Nous sommes disponible 24/7.</p>
      </div>
      <div className="contact-main">
        <div>
          <span>
            <BsTelephone />
          </span>
          <h3>Par telephone</h3>
          <p>
            Appellez nous au:{" "}
            <a
              href={
                ipAddr === "Morocco"
                  ? "tel:+852 5162 5108"
                  : "tel:+852 5162 5108"
              }
              style={{
                color: "#333333",
              }}
            >
              {ipAddr === "Morocco" ? "+852 5162 5108" : "+852 5162 5108"}
            </a>{" "}
            (Toute la semaine, 24h/24){" "}
          </p>
        </div>
        <div>
          <span>
            <BsChatLeftDots />
          </span>
          <h3>Par chat</h3>
          <p>
            Posez-nous toutes vos questions en cliquant sur le chat en bas à
            gauche de chaque page.
          </p>
        </div>
        <div>
          <span>
            <AiOutlineMail />
          </span>
          <h3>Par mail</h3>
          <p>
            Ecrivez-nous sur l'adresse mail<br></br>
            <a
              href="mailto:support@ibytrade.com"
              style={{
                color: "#333333",
              }}
            >
              support@ibendouma.com
            </a>
          </p>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-input">
          <div>
            <label htmlFor="email" style={{ color: "gray" }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <textarea
            className="area"
            placeholder="Ecrivez votre message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Envoyer" className="send" />
      </form>
      <div className="contact-footer">
        <p>
          En utilisant ce site, vous acceptez les termes et conditions ainsi que{" "}
          <Link to="/term-and-conditions" className="contact-link">
            les termes & conditions
          </Link>{" "}
          et{" "}
          <Link to="/privacy-policy" className="contact-link">
            la politique de confidentialité{" "}
          </Link>
          copyright &copy; 2020-
          {new Date().getFullYear()}, ibendouma.
          <br />
          Tous les droits sont réservés à JBIK INTERNATIONAL CO., LIMITED
          <br />
          adresse: ROOMS 1318-20, HOLLYWOODPLAZA, 610 NATHAN ROAD, MONGKOK
          KOWLOON, IBENDOUMA LIMITED.
          <br />
          59 St Martin’s Lane, Suite 8, WC2N 4JS, London, United Kingdom
        </p>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Contact;
