import React from "react";
import { Container } from "@mui/material";

import { useSelector } from "react-redux";

const PrivacyPolicy = () => {
  const { language } = useSelector((state) => state.language);
  return language === "anglais" ? (
    <Container
      sx={{
        textAlign: "center",
        background: "rgba(244, 244, 244, 0.8)",
        marginTop: "20px",
        borderRadius: "5px",
        paddingBottom: "10px",
      }}
      maxWidth="lg"
    >
      <h1
        style={{
          fontFamily: "Montserrat",
          fontWeight: 400,
          paddingTop: "20px",
          color: "#878484",
        }}
      >
        Privacy Policy
      </h1>
      <p
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        This site is the property of the company – IBENDOUMA LTD. We are
        committed to respecting your right to privacy and recognizing the
        importance of protecting the Personal Information that you provide to
        us. This Privacy Policy describes how the Company collects and uses
        personal information that you provide to us through the Websites and by
        telephone or email. This Privacy Policy also describes the choices
        available to you regarding the use of personal information you provide
        to us, and the actions you can take to access that information and
        request that the Company correct or delete it.
      </p>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          1-Consent :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          By using the Company's web sites, you acknowledge that you have read
          this Privacy Policy and you consent to the practices described at the
          moment with respect to the Company's collection, use ,store, share and
          disclosure of the Personal data provided by you to us. We reserve the
          right to change this Privacy Policy in accordance with the present
          terms at any time, which is why we encourage you to visit this page
          often, review this Privacy Policy frequently, and remain informed
          about any changes to it. If, after review, you still have questions
          about any term of this Privacy Policy, please contact the Company
          using the contact details provided at the end of those terms.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          2-Personal Data Collection and Use Personal data :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Information that can identify you as an individual, such as your name,
          address, telephone number, email address, or other information, is
          strictly confidential. On each of the Company's websites that collect
          personal information, the data stored is necessary for the proper
          functioning of the service or functionality requested. We access
          personal information when you register with us, communicate with us,
          when you submit an order with us, and when you visit our websites or
          the websites of some of our partners.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          3-Registration :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          When you register with us on this site, you first complete the on-line
          registration form, which requires you to create a username and
          password. During registration, you are also required to provide
          Personal data, which may include name, billing address, telephone
          number, email address and the last 4 digits and expiration’s date of
          the credit card. We use this personal data so that we may contact you
          about the services and products on the website you’re interested in
          and to facilitate the completion of an order.
        </p>
      </div>
      <div
        id="cookie-privacy"
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          4-Cookies :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The Company uses both session ID cookies and persistent cookies as
          part of its interaction with your browser. A cookie is an alphanumeric
          identifier (a file) that the Company's web sites transfer to your
          computer's hard drive through a web browser to enable its systems to
          recognize your browser for record-keeping purposes. A session ID
          cookie expires when you close your browser, while a persistent cookie
          remains on your hard drive for an extended period of time. Understand
          that we use cookies to make it easier for you to navigate through our
          websites and to offer you the most pleasant service. By how you
          configure your browser, you may control how cookies are processed by
          your system. However, if you decline the use of cookies you may
          encounter some lags and not be able to use certain features on this
          site and you may be required to reenter the information required to
          complete an order during new or interrupted browser sessions.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          5-Customer Service :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          We will communicate with you in response to your demands, to provide
          the products and services you request, and to manage your account. We
          will communicate with you by e-mail, live chat or telephone, in
          accordance with your wishes.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          6- Sharing and disclosure of information :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The Company does not plan to sell or rent any of the information
          collected to third parties for any purpose, but it does share the
          information with third parties as described below:
          <br></br>
          <br></br> Financial institutions, payment service providers which in
          connection with our payment services; Persons and institutions that
          are allowed to request your personal data under applicable laws and
          regulations through a court order, or other legal process, such as
          supervisory bodies, regulators or law enforcement bodies…
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          7-Change to this statement :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The Company will update this Privacy Policy from time to time, each
          time revising the last updated date at the top of the Privacy Policy
          and indicating the nature of the revisions in the statement. The
          Company will notify customers of material changes to this statement by
          placing a prominent notice on its website..
        </p>
      </div>
    </Container>
  ) : language === "espagnol" ? (
    <Container
      sx={{
        textAlign: "center",
        background: "rgba(244, 244, 244, 0.8)",
        marginTop: "20px",
        borderRadius: "5px",
        paddingBottom: "10px",
      }}
      maxWidth="lg"
    >
      <h1
        style={{
          fontFamily: "Montserrat",
          fontWeight: 400,
          paddingTop: "20px",
          color: "#878484",
        }}
      >
        Política de privacidad
      </h1>
      <p
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        Este sitio es propiedad de la empresa – IBENDOUMA LTD. Estamos
        comprometidos a respetar su derecho a la privacidad y a reconocer la
        importancia de proteger la información personal que usted proporciona a
        a nosotros. Esta Política de privacidad describe cómo la Compañía
        recopila y utiliza información personal que nos proporciona a través de
        los sitios web y por teléfono o correo electrónico. Esta Política de
        Privacidad también describe las opciones disponible para usted con
        respecto al uso de la información personal que proporciona a nosotros, y
        las acciones que puede tomar para acceder a esa información y solicitar
        que la Compañía lo corrija o elimine.
      </p>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          1-Consentir :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Al utilizar los sitios web de la Compañía, usted reconoce que ha leído
          esta Política de privacidad y acepta las prácticas descritas en el
          momento con respecto a la recopilación, uso, almacenamiento,
          distribución y divulgación de los datos personales proporcionados por
          usted a nosotros. Reservamos el derecho a cambiar esta Política de
          privacidad de acuerdo con el presente términos en cualquier momento,
          por lo que le animamos a visitar esta página a menudo, revise esta
          Política de privacidad con frecuencia y manténgase informado sobre
          cualquier cambio en el mismo. Si, después de la revisión, todavía
          tiene preguntas sobre cualquier término de esta Política de
          privacidad, comuníquese con la Compañía utilizando los datos de
          contacto proporcionados al final de dichos términos.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          2-Recopilación y uso de datos personales Datos personales :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Información que puede identificarlo como individuo, como su nombre,
          dirección, número de teléfono, dirección de correo electrónico u otra
          información, es estrictamente confidencial. En cada uno de los sitios
          web de la Compañía que recopilan información personal, los datos
          almacenados son necesarios para el correcto funcionamiento del
          servicio o funcionalidad solicitada. Accedemos información personal
          cuando se registra con nosotros, se comunica con nosotros, cuando
          envía un pedido con nosotros, y cuando visita nuestros sitios web o
          los sitios web de algunos de nuestros socios.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          3-Registro :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Cuando se registra con nosotros en este sitio, primero completa el
          formulario en línea formulario de registro, que requiere que cree un
          nombre de usuario y clave. Durante el registro, también debe
          proporcionar Datos personales, que pueden incluir nombre, dirección de
          facturación, teléfono número, dirección de correo electrónico y los
          últimos 4 dígitos y fecha de vencimiento de la tarjeta de crédito.
          Utilizamos estos datos personales para que podamos contactarlo. sobre
          los servicios y productos del sitio web que le interesan y para
          facilitar la realización de un pedido.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          4-Galletas :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Compañía utiliza cookies de identificación de sesión y cookies
          persistentes como parte de su interacción con su navegador. Una cookie
          es un alfanumérico identificador (un archivo) que los sitios web de la
          Compañía transfieren a su disco duro de la computadora a través de un
          navegador web para permitir que sus sistemas reconocer su navegador
          con fines de mantenimiento de registros. Una identificación de sesión
          La cookie caduca cuando cierra su navegador, mientras que una cookie
          persistente permanece en su disco duro durante un período prolongado
          de tiempo. Entender que utilizamos cookies para facilitarte la
          navegación a través de nuestros sitios web y para ofrecerle el
          servicio más agradable. por como tu configurar su navegador, puede
          controlar cómo las cookies son procesadas por tu sistema. Sin embargo,
          si rechaza el uso de cookies, puede encontrar algunos retrasos y no
          poder usar ciertas funciones en este sitio y es posible que deba
          volver a ingresar la información requerida para completar un pedido
          durante sesiones de navegador nuevas o interrumpidas.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          5-Servicio al Cliente :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Nos comunicaremos con usted en respuesta a sus demandas, para
          brindarle los productos y servicios que solicita, y para administrar
          su cuenta. Nosotros se comunicará con usted por correo electrónico,
          chat en vivo o teléfono, en de acuerdo con sus deseos.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          6- Intercambio y divulgación de información. :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Compañía no planea vender o alquilar ninguna de la información
          recopilada a terceros para cualquier propósito, pero comparte la
          información con terceros como se describe a continuación:
          <br></br>
          <br></br> Instituciones financieras, proveedores de servicios de pago
          que en conexión con nuestros servicios de pago; personas e
          instituciones que se les permite solicitar sus datos personales bajo
          las leyes aplicables y reglamentos a través de una orden judicial u
          otro proceso legal, como órganos de control, reguladores o encargados
          de hacer cumplir la ley...
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          7-Cambiar a esta declaración :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Compañía actualizará esta Política de privacidad de vez en cuando,
          cada tiempo revisando la última fecha actualizada en la parte superior
          de la Política de Privacidad e indicando la naturaleza de las
          revisiones en la declaración. los La empresa notificará a los clientes
          de los cambios importantes en esta declaración por colocando un aviso
          destacado en su sitio web...
        </p>
      </div>
    </Container>
  ) : (
    <Container
      sx={{
        textAlign: "center",
        background: "rgba(244, 244, 244, 0.8)",
        marginTop: "20px",
        borderRadius: "5px",
        paddingBottom: "10px",
      }}
      maxWidth="lg"
    >
      <h1
        style={{
          fontFamily: "Montserrat",
          fontWeight: 400,
          paddingTop: "20px",
          color: "#878484",
        }}
      >
        POLITIQUE DE CONFIDENTIALITÉ
      </h1>
      <p
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        Ce site est la propriété de la société – IBENDOUMA LTD. Nous nous
        engageons à respecter votre droit à la vie privée et à reconnaître
        l'importance de protéger les informations personnelles que vous nous
        fournissez. Cette politique de confidentialité décrit comment la société
        collecte et utilise les informations personnelles que vous nous
        fournissez via les sites Web, par téléphone ou par e-mail. Cette
        politique de confidentialité décrit également les options qui s'offrent
        à vous concernant l'utilisation des informations personnelles que vous
        nous fournissez, les actions que vous pouvez entreprendre pour accéder à
        ces informations et votre droit de demander à la Société de les corriger
        ou de les supprimer.
      </p>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          1-Consentement :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          En utilisant les sites Web de la compagnie, vous reconnaissez avoir lu
          la présente politique de confidentialité et vous consentez aux
          pratiques décrites ci-dessous en ce qui concerne la collecte,
          l'utilisation, le stockage, le partage et la divulgation des données
          personnelles que vous nous avez fournies. Nous nous réservons le droit
          de modifier cette politique de confidentialité conformément aux termes
          actuels à tout moment, c'est pourquoi nous vous encourageons à visiter
          cette page régulièrement, à consulter fréquemment cette politique de
          confidentialité et à rester informé de toute modification. Si, après
          examen, vous avez encore des questions à propos de toute clause de
          cette politique de confidentialité, veuillez contacter la société en
          utilisant les coordonnées fournies à la base de cette politique de
          confidentialité.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          2-Informations personnelles :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Les informations qui peuvent vous identifier comme un individu, telles
          que votre nom, adresse, numéro de téléphone, adresse e-mail, ou
          d’autres informations, sont strictement confidentielles. Sur tous les
          sites web de la société qui recueillent des renseignements personnels,
          les données stockées sont nécessaires au bon déroulement du service ou
          de la fonctionnalité demandée. Nous accédons à des renseignements
          personnels lorsque vous vous enregistrez chez nous, vous communiquez
          avec nous, lorsque vous soumettez une commande avec nous, et lorsque
          vous visitez nos sites Web ou des sites web de certains de nos
          partenaires.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          3-Inscription :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Lorsque vous vous enregistrez sur nos sites, vous devez remplir le
          formulaire d’inscription en ligne, qui vous demande de créer un nom
          d’utilisateur et mot de passe. Lors de l’inscription, vous êtes
          également tenu de fournir des renseignements personnels, tels que le
          nom, l’adresse de facturation, l'adresse d’expédition, numéro de
          téléphone, adresse e-mail, les 4 derniers chiffres et la date
          d’expiration de la carte de crédit. Nous utilisons cette information
          afin que nous puissions communiquer avec vous au sujet des services et
          des produits virtuels sur le site utilisé et de faciliter l’achèvement
          d’une commande.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          4-Cookies :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Société utilise à la fois des cookies d'identification de session
          et des cookies persistants dans le cadre de son interaction avec votre
          navigateur. Un cookie est un identifiant alphanumérique que les sites
          web des sociétés transfèrent sur le disque dur de votre ordinateur via
          un navigateur Web pour permettre à ses systèmes de reconnaître votre
          navigateur à des fins d'archivage. Un cookie d'identification de
          session expire lorsque vous fermez votre navigateur, tandis qu'un
          cookie persistant reste sur votre disque dur pendant une période
          prolongée. Veuillez comprendre que nous utilisons des cookies pour
          vous faciliter la navigation sur nos sites Web et pour vous offrir le
          service le plus agréable. En configurant votre navigateur, vous pouvez
          contrôler la manière dont les cookies sont traités par votre système.
          Cependant, si vous refusez l'utilisation de cookies, vous pouvez
          rencontrer des bugs et ne pas être en mesure d'utiliser certaines
          fonctionnalités de ce site et vous pouvez être amené à ressaisir les
          informations requises pour terminer une commande lors de sessions de
          navigation nouvelles ou interrompues.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          5-Service Client :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Nous communiquerons avec vous pour répondre à vos demandes, fournir
          les services que vous demandez, et gérer votre compte. Nous
          communiquerons avec vous par e-mail, téléphone ou chat en direct,
          conformément à vos souhaits.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          6- Partage et divulgation des informations :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Société ne prévoit pas de vendre ou de louer les informations
          collectées à des tiers à quelque fin que ce soit, mais elle partage
          les informations avec des tiers comme décrit ci-dessous :<br></br>
          <br></br> Institutions financières, prestataires de services de
          paiement qui, en relation avec nos services de paiement ;<br></br> Les
          personnes et institutions autorisées à demander vos données
          personnelles en vertu des lois et réglementations applicables par le
          biais d'une ordonnance d'un tribunal ou d'une autre procédure
          judiciaire, telles que des organes de surveillance, des régulateurs ou
          des organismes chargés de l'application de la loi
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          7-Modifications de la présente Déclaration :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Société mettra à jour cette politique de confidentialité de temps à
          autre, en révisant à chaque fois la dernière date de mise à jour en
          haut de la politique de confidentialité et en indiquant la nature des
          révisions dans la déclaration. La Société informera les clients des
          modifications importantes apportées à cette déclaration en plaçant un
          avis bien visible sur son site Web.
        </p>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
