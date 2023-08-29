import React from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const TermAndConditions = () => {
  const { language } = useSelector((state) => state.language);
  const { ipAddr } = useSelector((state) => state.ipAddr);

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
        TERMS AND CONDITIONS
      </h1>
      <p
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        This site （ibendouma.com）is owned and operated by JBIK INTERNATIONAL
        CO., LIMITED Registered address:ROOMS 1318-20,HOLLYWOOD PLAZA, 610
        NATHAN ROAD, MONGKOK KOWLOON, HONG KONG. IBENDOUMA LIMITED (payment
        processing for Cardpay). Registered address: 59 St Martin’s Lane, Suite
        8, WC2N 4JS, London, United Kingdom and its affiliated companies
        (collectively, the 'Company'), and provides its services to you subject
        to the following conditions. If you visit or shop at www.ibendouma.com,
        you affirmatively accept the following conditions. Continued use of the
        site constitutes the affirmative agreement to these terms and
        conditions. The Company reserves the right to change the terms,
        conditions, and notices under which its websites and services are
        offered, including but not limited to the charges associated with the
        use of the Company's websites and services. You are responsible for
        regularly reviewing these terms and conditions and any additional terms
        and conditions. Your continued use of the Company's websites and
        services constitutes your agreement to all such terms, conditions, and
        notices (see TERMS & CONDITIONS and the PRIVACY POLICY). Please read
        them carefully.
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
          1-PRIVACY:
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Please review our PRIVACY POLICY, which also governs your visit to the
          Company's websites.
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
          2-ELECTRONIC COMMUNICATIONS :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          When you visit the Company's websites or send emails to us, you are
          communicating with us electronically. You consent to receive
          communications from us electronically. We will communicate with you by
          e-mail or by posting notices on this site. You agree that all
          agreements, notices, disclosures and other communications that we
          provide to you electronically satisfy any legal requirement that such
          communications be in writing.
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
          3-COPYRIGHT :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          All content on this site, such as text, graphics, logos, button icons,
          images, audio clips, digital downloads, data compilations, and
          software, is the property of the Company or its content suppliers and
          is protected by domestic and international copyright laws. The
          compilation of all content on this site is the exclusive property of
          the Company and is protected by domestic and international copyright
          laws. All software used on this site is the property of the Company or
          its software suppliers and is protected by domestic and international
          copyright laws.
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
          4-LICENSE AND SITE ACCESS :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The Company grants you a limited license to access and make personal
          use of this site and not to download (other than page caching) or
          modify it, or any portion of it, except with express written consent
          of the Company. This license does not include any resale or commercial
          use of this site or its contents; any collection and use of any
          product listings, descriptions, or prices; any derivative use of this
          site or its contents; any downloading or copying of account
          information for the benefit of another merchant; or any use of data
          mining, robots, or similar data gathering and extraction services.
          This site or any portion of this site may not be reproduced,
          duplicated, copied, sold, resold, visited, or otherwise exploited for
          any commercial purpose without express written consent of the Company.
          The use of spiders, robots, scrapers or any other means, whether
          through the use of automated software or through a physical or
          mechanical system, is strictly prohibited.<br></br>
          You may not frame or utilize framing techniques to enclose any
          trademark, logo, or other proprietary information (including images,
          text, page layout, or form) of the Company and our affiliates without
          express written consent. You may not use any meta tags or any other
          'hidden text' utilizing the Company's name or trademarks without the
          express written consent of the Company. Any unauthorized use
          terminates the permission or license granted by the Company. You may
          not use any Company logos or other proprietary graphic or trademark as
          part of the link without express written permission.
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
          5-YOUR ACCOUNT :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          If you use this site, you are responsible for maintaining the
          confidentiality of your account and password and for restricting
          access to your computer, and you agree to accept responsibility for
          all activities that occur under your account or password. If you are
          under 18, you may use the Company's services only with involvement of
          a parent or guardian. The Company and its affiliates reserve the right
          to refuse service, terminate accounts, remove or edit content, or
          cancel orders in their sole discretion.
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
          6-PRICING:
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The prices of the sites evolve according to supply and demand. If you
          find a better price at another online store, we'll do our best to beat
          it.
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
          7-REFUND POLICY :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Ibendouma commits to refund unsatisfied customers to a reasonable
          extent. Please not that support may ask you to provide proof of
          payment. The customer is entitled to request a refund in the following
          cases. Virtual products not received: In the event that the virtual
          products have not been delivered to the customer within the expected
          delivery time, the customer may request a refund. Double payment: In
          the event that the customer has made a repeated payment for an order,
          he is requested to contact the support in order to be refunded as soon
          as possible. For any reason other than those listed above, please
          explain your situation to support. Your refund request will be
          verified after submitting the order number and refund reason. If the
          request is approved, the refund will be returned to the customer's
          account or credit card. In the following cases, we cannot refund
          customers: Delivery complete: the products have been delivered to the
          customer as agreed and as described. Unpaid order: The customer is not
          allowed to request a refund for the unpaid order.
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
          8-THIRD PARTIES :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The Company may also provide links and pointers to websites operated
          by third parties. Neither the Company, its parent or subsidiary
          companies, nor their affiliates operate or control in any respect the
          information, products or services on such third-party sites. We are
          not responsible for examining or evaluating, and we do not warrant,
          the offerings of such companies or individuals or the content of their
          websites. The Company assumes no responsibility for the actions,
          product and content of all these and any other third parties. You
          should carefully read their privacy statements and other terms of use.
          The material on this site and third-party sites is provided "as is"
          and without warranty of any kind, either express or implied. To the
          fullest extent permitted by applicable law, the Company disclaims all
          warranties, express or implied, including, but not limited to, implied
          warranties of merchantability and fitness for a particular purpose.
          The Company does not claim any title to any accounts or virtual items
          purchased or sold through this site.
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
          9-DELIVERY POLICY :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The delivery of all products is included in the offer (unless
          otherwise specified). If the delivery time is not respected, the
          customer is entitled to request a refund (referring to refund policy
          7.)
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
          10-COPYRIGHT :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          All content on this site is the property of the Company or its content
          providers, and is protected by copyright. All software used on this
          site is the property of the Company or its software suppliers and is
          protected by national and international copyright laws.
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
          11-POLICIES, MODIFICATION AND SEVERABILITY :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Please review our other policies, such as our Privacy Policy, posted
          on this site. These policies also govern your visit to the Company's
          websites. We reserve the right to make changes to our site, and to the
          Terms and Conditions at any time. If any of these conditions are held
          to be invalid, void or for any reason that condition will be deemed
          severable and will not affect the validity and enforceability of any
          other condition.
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
        Términos y condiciones
      </h1>
      <p
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        Este sitio es propiedad y está operado por JBIK INTERNATIONAL CO.,
        LIMITED Registered address :ROOMS 1318-20,HOLLYWOODPLAZA, 610 NATHAN
        ROAD, MONGKOK KOWLOON . IBENDOUMA LIMITED (payment processing for
        Cardpay). Registered address:59 St Martin’s Lane, Suite 8, WC2N 4JS,
        London, United Kingdom. Si visitas o compra desde el sitio, usted acepta
        afirmativamente las siguientes condiciones. Continuar con el uso del
        sitio constituye la aceptación afirmativa de estos términos y
        condiciones. La Compañía se reserva el derecho de cambiar el términos,
        condiciones y avisos bajo los cuales se encuentran sus sitios web y
        servicios Ofrecido. Usted es responsable de revisar regularmente estos
        términos y condiciones y cualquier término y condición adicional. Su uso
        continuado de los sitios web y servicios de la Compañía constituye su
        aceptación de todos dichos términos, condiciones y{" "}
        <Link to="/privacy-policy">Política de privacidad</Link>. por favor
        léelos con cuidado.
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
          1- CONFIDENCIALIDAD :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Revise nuestra Política de privacidad, que también dirige su visita a
          la Sitios web de la empresa.
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
          2- COMUNICACIONES ELECTRÓNICAS :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Cuando visita los sitios web de la Compañía o nos envía correos
          electrónicos, está comunicándose con nosotros electrónicamente. Usted
          acepta recibir nuestro comunicaciones electrónicamente. Nos
          comunicaremos con usted por correo electrónico. o publicando alertas
          en este sitio. Usted acepta que todos los acuerdos, avisos,
          divulgaciones y otras comunicaciones que le proporcionamos cumplir
          electrónicamente con cualquier requisito legal de que tales las
          comunicaciones sean por escrito.
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
          3- LICENCIA Y ACCESO AL SITIO :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Compañía le otorga una licencia limitada para acceder y usar
          personalmente el sitio y no descargarlo o modificarlo, o cualquier
          parte del mismo, excepto con el consentimiento expreso por escrito de
          la Compañía. Esta licencia no incluir cualquier reventa o uso
          comercial de este sitio o su contenido; ningún recopilación y uso de
          listas de productos virtuales, descripciones o precios; cualquier uso
          derivado de este sitio o su contenido, ni la descargar o copiar la
          información de la cuenta en beneficio de otro comerciante, ni el uso
          de datos, bots o datos similares recogida y extracción de servicios.
          Este sitio o cualquier parte de este sitio no puede ser reproducido,
          copiado, vendido, revendido, visitado o de otra manera explotados para
          cualquier propósito comercial, sin la autorización expresa y por
          escrito consentimiento de la Compañía. El uso de robots o cualquier
          otro medio, ya sea mediante el uso de software automatizado o a través
          de un mecanismo o sistema físico, está estrictamente prohibido.
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
          4- CUENTA :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Al utilizar este sitio, usted es responsable de mantener la
          confidencialidad de su cuenta y contraseña y para restringir acceso a
          su computadora. De lo contrario, acepta aceptar la responsabilidad.
          para todas las actividades que ocurren en su cuenta.
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
          5- DESCRIPCION DEL SITIO WEB :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          A través de sus Sitios, la Compañía le brinda acceso a una variedad de
          recursos, incluida la compra y venta de artículos virtuales. Tal
          servicios, incluidas las actualizaciones, mejoras, nuevas funciones
          y/o la adición de nuevos sitios web de propiedades, están sujetos a
          estos Términos Y condiciones.<br></br>
          La Compañía no hace representaciones ni reclamos de ningún título por
          ningún cuentas o artículos virtuales comprados o vendidos a través de
          este sitio. los La empresa no se responsabiliza en cuanto a la
          transferibilidad, uso y propiedad de cualquiera de estas cuentas o
          elementos virtuales.
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
          6- PRECIOS:
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Los precios de los sitios evolucionan según la oferta y la demanda. Si
          usted encuentra un mejor precio en otra tienda en línea, haremos todo
          lo posible para mejorar eso.
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
          7- POLITICA DE REEMBOLSO :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Ibendouma se compromete a reembolsar a los clientes insatisfechos a un
          precio razonable medida. Tenga en cuenta que el soporte puede pedirle
          que proporcione una prueba de pago. El cliente tiene derecho a
          solicitar un reembolso en los siguientes casos. Productos virtuales no
          recibidos: En el caso de que el virtual los productos no han sido
          entregados al cliente dentro del tiempo esperado plazo de entrega, el
          cliente podrá solicitar la devolución. Doble pago: En el caso de que
          el cliente haya realizado un pago repetido por un pedido, se le
          solicita que se comunique con el soporte para que se le reembolse lo
          antes posible como sea posible. Por cualquier motivo que no sea el
          mencionado anteriormente, por favor explique su situación para apoyar.
          Su solicitud de reembolso será verificado después de enviar el número
          de pedido y el motivo del reembolso. Si el se aprueba la solicitud, el
          reembolso se devolverá al cliente cuenta o tarjeta de crédito. En los
          siguientes casos, no podemos reembolsar clientes: Entrega completa:
          los productos han sido entregados al cliente según lo acordado y
          descrito. Pedido no pagado: El cliente no está permitido solicitar un
          reembolso por el pedido no pagado.
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
          8- TERCEROS :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Compañía también puede proporcionar enlaces y punteros a sitios web
          operados por terceros. Ni la Compañía, su matriz o subsidiaria
          empresas, ni sus afiliadas operan o controlan en ningún aspecto la
          información, productos o servicios en dichos sitios de terceros.
          Estamos no es responsable de examinar o evaluar, y no garantizamos,
          las ofertas de tales empresas o individuos o el contenido de sus
          sitios web La Compañía no asume ninguna responsabilidad por las
          acciones, producto y contenido de todos estos y de cualquier otro
          tercero. Tú debe leer atentamente sus declaraciones de privacidad y
          otros términos de uso. El material de este sitio y de sitios de
          terceros se proporciona "tal cual" y sin garantía de ningún tipo, ya
          sea expresa o implícita. Hacia máxima medida permitida por la ley
          aplicable, la Compañía renuncia a todos garantías, expresas o
          implícitas, incluidas, entre otras, garantías implícitas garantías de
          comerciabilidad e idoneidad para un propósito particular. La Compañía
          no reclama ningún título de ninguna cuenta o artículo virtual.
          comprado o vendido a través de este sitio.
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
          9- POLÍTICA DE ENTREGA :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La entrega de todos los productos está incluida en la oferta (a menos
          que especificado de otra manera). Si no se respeta el plazo de
          entrega, el el cliente tiene derecho a solicitar un reembolso
          (refiriéndose a la política de reembolso 7.)
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
          10- DERECHOS DE AUTOR :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Todo el contenido de este sitio es propiedad de la Compañía o su
          contenido proveedores, y está protegido por derechos de autor. Todo el
          software utilizado en este El sitio es propiedad de la Compañía o de
          sus proveedores de software y está protegido por las leyes nacionales
          e internacionales de derechos de autor.
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
          11- POLÍTICAS, MODIFICACIÓN Y DIVISIBILIDAD:
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Revise nuestras otras políticas, como nuestra Política de privacidad,
          publicada en este sitio. Estas políticas también rigen su visita a las
          instalaciones de la Compañía. sitios web Nos reservamos el derecho de
          realizar cambios en nuestro sitio y en el Términos y Condiciones en
          cualquier momento. Si alguna de estas condiciones se cumple sea
          ​​inválida, nula o por cualquier motivo esa condición se considerará
          divisible y no afectará la validez y exigibilidad de cualquier otra
          condición.
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
        Termes et conditions
      </h1>
      <p
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        Ce site （ibendouma.com）()est détenu et exploité par JBIK INTERNATIONAL
        CO., LIMITED Registered address:19H Maxgrand plaza, No. 3 Tai Yau
        Street, San Po Kong, Kowloon, Hong Kong. IBENDOUMA LIMITED (payment
        processing for Cardpay). Registered address: 59 St Martin’s Lane, Suite
        8, WC2N 4JS, London, United Kingdom . et offre ses services pour vous
        dans les conditions suivantes. Si vous visitez le site
        <a
          href="http://ibendouma.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.ibendouma.com
        </a>
        , vous affirmez à accepter les conditions suivantes. La poursuite de
        l’utilisation du site constitue l’affirmative à l’accord de ces termes
        et des conditions. La Société se réserve le droit de changer les termes,
        conditions et mentions d’avertissement en vertu de laquelle les sites
        Web et ses services sont offerts, y compris mais sans s’y limiter les
        frais liés à l’utilisation de sites Web de la Société et de services.
        Vous êtes responsable d'examiner régulièrement ces termes et conditions,
        et tous autres termes et conditions. Votre utilisation continue de la
        Société des sites Web et des services constitue votre acceptation
        desdits termes, conditions et avis (voir les CGV et de la Politique de
        Confidentialité). S’il vous plaît lisez-les attentivement.
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
          1-CONFIDENTIALITÉ :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          S’il vous plaît, consultez notre politique de confidentialité, qui
          régit également votre visite à la Société des sites web.
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
          2-COMMUNICATIONS ÉLECTRONIQUES :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Lorsque vous visitez les sites Web de la Société ou que vous nous
          envoyez des e-mails, vous communiquez avec nous par voie électronique.
          Vous consentez à recevoir nos communications par voie électronique.
          Nous communiquerons avec vous par e-mail ou en publiant des alertes
          sur ce site. Vous convenez que tous les accords, avis, divulgations et
          autres communications que nous vous fournissons par voie électronique
          sont en adéquation avec toute exigence légale selon laquelle ces
          communications doivent être écrites.
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
          3-COPYRIGHT :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Tout le contenu de ce site, tels que textes, graphiques, logos,
          icônes, images, clips audio, téléchargements numériques, compilations
          de données et les logiciels, est la propriété de la Société ou de ses
          fournisseurs de contenu et est protégé par les nationaux et les lois
          internationales du copyright. La compilation de tout contenu sur ce
          site sont la propriété exclusive de la Société et est protégé par les
          nationaux et les lois internationales du copyright. Tous les logiciels
          utilisés sur ce site sont la propriété de la Société ou de ses
          fournisseurs de logiciels et sont protégés par les nationaux et les
          lois internationales du copyright.
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
          4-LICENCE ET ACCÈS AU SITE :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Société vous accorde une licence limitée pour accéder et utiliser
          personnellement ce site et à ne pas télécharger (autre que la page en
          cache) ou le modifier, ou toute partie de celui-ci, sauf avec le
          consentement exprès écrit de la Société. Cette licence n’inclut aucune
          revente ou utilisation commerciale de ce site ou de son contenu, toute
          la collecte et l’utilisation de toutes listes, descriptions, ou prix
          de produit; toute utilisation dérivée de ce site ou de son contenu, ni
          le téléchargement ou la copie d’informations de compte pour la profit
          d’un autre commerçant, ni l’utilisation de données, des robots, ou des
          données similaires de collecte et d’extraction de services. Ce site ou
          toute partie de ce site ne pas être reproduit, copie, vendu, revendu,
          visité, ou être autrement exploité pour aucun commercial, mais sans le
          consentement écrit exprès de la Société. L’utilisation de robots, des
          racloirs ou tout autre moyen, que ce soit par l’utilisation d’un
          logiciel automatisé ou par le biais d’un système mécanique ou
          physique, est strictement interdite. Vous pouvez pas encadrer ou
          utiliser des techniques de cadrage pour intégrer des marques de
          commerce, un logo, ou d’autres informations (y compris les images,
          texte, mise en page, ou forme) de la Société et ses filiales sans
          consentement écrit exprès. Vous ne pouvez pas utiliser des balises
          Méta ou tout autre 'texte caché' utilisant le nom de la Société ou des
          marques de commerce sans le consentement écrit de la Société. Toute
          utilisation non autorisée termine la permission ou le permis accorde
          par la Société. Vous ne pouvez pas prednre a entreprise le logos ou
          d’autres graphiques ou marques de commerce dans le cadre du lien sans
          autorisation expresse et écrite.
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
          5-VOTRE COMPTE :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Si vous utilisez ce site, vous êtes responsable de maintenir la
          confidentialité de votre compte et votre mot de passe et de
          restreindre l’accès à votre ordinateur, et vous vous engagez à
          accepter la responsabilité de toutes les activités qui se produisent
          sous votre compte ou votre mot de passe. Si vous avez moins de 18,
          vous pouvez utiliser les services de la Société seulement avec la
          participation d’un parent ou un tuteur. La Société et ses filiales se
          réservent le droit de refuser le service, terminer des comptes, de
          supprimer ou éditer du contenu, ou d’annuler des commandes à leur
          seule discrétion.
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
          6-REVUES, COMMENTAIRES, COMMUNICATIONS ET AUTRES CONTENUS :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Visiteurs vous pouvez mettre après des revues, des commentaires et
          autres contenus, et d’autres communications, et de soumettre des
          suggestions, idées, commentaires, questions, ou d’autres informations,
          tant que le contenu n’est pas illégal, obscène, menaçant,
          diffamatoire, attentatoire à la vie privée, atteinte à la droits de
          propriété intellectuelle, ou préjudiciable à des tiers ou
          répréhensible et ne consiste pas en ou contiennent des virus
          informatiques, de la campagne politique, de la sollicitation
          commerciale, de chaîne de lettres, des envois de masse, ou toute forme
          de «spam». Vous ne devez pas utiliser une fausse adresse e-mail,
          usurper l’identité d’une personne ou entité, ou d’induire en erreur
          quant à l’origine d’une carte ou de tout autre contenu. La Société se
          réserve le droit (mais non l’obligation) de supprimer ou éditer un tel
          contenu, mais ne pas en revue régulièrement le contenu. Si vous ne le
          contenu ou soumettez le matériel, et à moins que nous indiquons
          autrement, vous accordez à la Compagnie et ses filiales un droit
          non-exclusif, sans redevance, perpétuel, irrévocable, et entièrement
          sous licence le droit d’utiliser, reproduire, modifier, adapter,
          publier, traduire , créer des œuvres dérivées, distribuer, et afficher
          un tel contenu dans le monde entier dans tous les médias. Vous
          accordez à la Compagnie et ses filiales et les titulaires de permis
          sous le droit d’utiliser le nom que vous soumettez en liaison avec un
          tel contenu, s’ils choisissent. Vous déclarez et garantissez que vous
          possédez ou contrôlez autrement tous les droits sur le contenu que
          vous publiez, que le contenu est précisé, que l’utilisation du contenu
          que vous fournissez ne viole pas cette politique et s’engage à ne pas
          causer de préjudice à toute personne ou entité; et que vous indemniser
          la Société et ses sociétés affiliées de toutes réclamations résultant
          du contenu que vous fournissez. La société a le droit mais non
          l’obligation, de surveiller et de modifier ou supprimer n’importe
          quelle activité ou contenu. La Société n’assume aucune responsabilité
          et n’assume aucune responsabilité pour tout contenu affiché par vous
          ou tout tiers.
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
          7-PLAINTES DE COPYRIGHT:
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Société et ses filiales respectent la propriété intellectuelle
          d’autrui. Si vous pensez que votre travail a été copié d’une manière
          qui constitue une violation du droit d’auteur, veuillez contacter
          notre service juridique ( sup@ibendouma.com) à propos des allégations
          de violation de copyright.
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
          8-EXCLUSION DE GARANTIES ET LIMITATION DE RESPONSABILITÉ:
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          CE SITE EST FOURNI PAR LA SOCIÉTÉ SUR UNE BASE «TEL QUEL» ET «TELS QUE
          DISPONIBLES». LA SOCIÉTÉ NE FAIT AUCUNE REPRÉSENTATION OU GARANTIE DE
          QUELQUE NATURE QUE CE SOIT, EXPLICITE OU IMPLICITE, CONCERNANT LE
          FONCTIONNEMENT DE CE SITE OU DE L’INFORMATION, DU CONTENU, DES
          MATÉRIAUX, OU DES PRODUITS INCLUS SUR CE SITE. VOUS ACCEPTEZ
          EXPRESSÉMENT QUE VOTRE UTILISATION DE CE SITE EST À VOS PROPRES
          RISQUES.
          <br />
          <br />
          DANS LA PLEINE MESURE PERMISE PAR LA LOI APPLICABLE, LA COMPAGNIE
          REJETTE TOUTE GARANTIE, EXPLICITE OU IMPLICITE, Y COMPRIS, MAIS SANS
          LIMITATION, LES GARANTIES IMPLICITES DE QUALITE MARCHANDE ET
          D’ADAPTATION À UN OBJET PARTICULIER. LA SOCIÉTÉ NE GARANTIT PAS QUE CE
          SITE, SES SERVEURS, OU COURRIEL ENVOYÉ À PARTIR DE LA SOCIÉTÉ SONT
          LIBRES DE VIRUS OU D’AUTRES ÉLÉMENTS NUISIBLES. LA SOCIÉTÉ NE SERA PAS
          RESPONSABLE DES DOMMAGES DE QUELQUE NATURE QUE CE SOIT DÉCOULANT DE
          L’UTILISATION DE CE SITE, Y COMPRIS, MAIS NON LIMITÉ AUX DOMMAGES
          DIRECTS, INDIRECTS, ACCESSOIRES, PUNITIFS, ET DOMMAGES. CERTAINES LOIS
          NE PERMETTENT PAS DES LIMITATIONS SUR LES GARANTIES IMPLICITES OU
          L’EXCLUSION OU LA LIMITATION DE CERTAINS DOMMAGES.
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
          9-INDEMNISATION :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Vous vous engagez à garantir et indemniser la Société et de ses
          sociétés mères, filiales, sociétés affiliées, dirigeants,
          administrateurs, agents et employés de toute réclamation ou demande, y
          compris les honoraires raisonnables d’avocats, effectuée par une
          tierce partie liée à ou découlant de votre violation de ces Termes et
          Conditions ou les termes et conditions, il intègre par référence, ou
          de votre violation de toute loi ou les droits d’un tiers.
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
          10-POLITIQUES, MODIFICATION ET DIVISIBILITÉ :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Veuillez consulter nos autres politiques, telles que notre politique
          de confidentialité, publiée sur ce site. Ces politiques régissent
          également votre visite sur les sites Internet de la Société. Nous nous
          réservons le droit d’apporter des modifications à notre site, les
          politiques et les présentes Conditions Générales à tout moment. Si
          l’une de ces conditions est jugée invalide, nulle ou, pour une raison
          quelconque, cette condition sera considérée comme divisible et
          n’affectera pas la validité et l’applicabilité de toute autre
          condition.
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
          11-RENONCIATION :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          L’échec de la Société pour faire appliquer une disposition quelconque
          de ces Modalités et conditions ne doit pas être interprété comme une
          renonciation ou la limitation de l’entreprise? Le droit de suite pour
          faire appliquer et de contraindre le strict respect de toutes les
          dispositions de ces Termes et Conditions.
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
          12-CONDITIONS DE LIVRAISON :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Acheter des kamas peut entraîner le bannissement du compte. Nous ne
          sommes pas responsables de l'interdiction de compte. Nous livrerons
          intégralement votre commande en jeu après vérification de votre
          paiement. Normalement, cela prend 5 à 15 minutes. Si vous n'avez pas
          reçu la commande plus de 15 minutes ou si vous rencontrez une
          situation particulière telle que les serveurs tombent en panne avec le
          site Web, vous pouvez contacter notre support en ligne et nous vous
          livrerons à nouveau. Si vous devez effectuer un remboursement en
          raison du problème du produit, vous devez contacter le site Web dans
          un délai de 1 à 3 jours ouvrables pour rembourser votre paiement.
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
          13-VOIES DE RECOURS :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Vous reconnaissez que la violation de ces Termes et Conditions
          pourrait causer un préjudice irréparable pour lequel des dommages
          pécuniaires, peut être difficile à déterminer ou à une insuffisance de
          recours. Vous donc, que la Société aura le droit, en plus de ses
          autres droits, de demander et d’obtenir une injonction pour toute
          violation de ces Termes et Conditions, sans le dépôt ou l’envoi d’une
          caution ou de caution. En outre, dans le cas d’une poursuite
          judiciaire ou une action est intentée par une partie en vertu de ces
          Termes et Conditions à respecter l’un de ses termes, il est convenu
          que si la Société est réputée être la partie tel que déterminé par un
          jugement définitif, non soumis à appel, d’un tribunal de juridiction
          compétente, la Société est en droit de recouvrement des frais
          raisonnables d’avocat, frais d’expert, frais de contentieux et les
          frais de justice en plus de toute autre réparation accordée par le
          tribunal.
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
          14-DIVISIBILITÉ :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Si une condition ou disposition de ces Termes et Conditions est jugée
          nulle, contre l’ordre public, ou inapplicable par un tribunal de
          juridiction compétente, et de telles conclusions ou l’ordonnance
          devient définitive et non susceptible d’appel, puis, la disposition
          est réputée modifiée afin de la mesure nécessaire pour la rendre
          valide et exécutoire. Si la disposition ne peut pas être modifié, puis
          il en est de même être considéré comme frappé d’ici dans son
          intégralité, et à moins que cette condition ou disposition est
          importante pour la performance de ces Termes et Conditions, le reste
          de ces Termes et Conditions doit survivre à la dit délinquance
          disposition supprimée.
          <br />
          <a
            href="http://www.ibendouma.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ibendouma.com
          </a>{" "}
          ne revendique pas le titre des articles virtuels achetés par
          l’entremise de{" "}
          <a
            href="http://www.ibendouma.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ibendouma.com
          </a>
          . Tous les objets virtuels négociés via{" "}
          <a
            href="http://www.ibendouma.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ibendouma.com
          </a>{" "}
          relatifs au jeu appartiennent à leurs propriétaires respectifs :
          Ankama.{" "}
          <a
            href="http://www.ibendouma.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ibendouma.com
          </a>{" "}
          n’est aucunement affilié aux sociétés cotées.{" "}
          <a
            href="http://www.ibendouma.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ibendouma.com
          </a>{" "}
          agit simplement à titre de gardien temporaire des articles de jeu
          interactifs et/ou des comptes liés à tout service fourni pour chaque
          jeu. À la conclusion de toute transaction, vous supposez que{" "}
          <a
            href="http://www.ibendouma.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ibendouma.com
          </a>{" "}
          n’est qu’un titulaire de licence des propriétaires de jeux respectifs
          pour utiliser sa propriété intellectuelle et vous assumez toutes les
          responsabilités ou obligations, et vous devez exécuter toutes les
          obligations envers les propriétaires de jeux respectifs, et
          conviennent d’indemniser et de dégager de toute responsabilité
          <a
            href="http://www.ibendouma.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ibendouma.com
          </a>
          , comme indiqué ci-dessous.
        </p>
      </div>
    </Container>
  );
};

export default TermAndConditions;
