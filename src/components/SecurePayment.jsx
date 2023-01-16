import React from "react";
import skrill from "../assets/payment/skrill.png";
import paypal from "../assets/payment/paypal.jpg";
import card from "../assets/payment/card.jpg";
import safecard from "../assets/payment/safecard.jpg";
import sofort from "../assets/payment/sofort.jpg";
import blue from "../assets/payment/blue.jpg";

import { useSelector } from "react-redux";

const SecurePayment = () => {
  const { language } = useSelector((state) => state.language);

  return language === "anglais" ? (
    <div className="secure-payment">
      <h1 className="secure-payment-title">Secure payment</h1>
      <p className="secure-payment-intro">
        Our mission is to provide you with a pleasant shopping experience. Thus,
        we work with the best online payment systems. to ensure that any payment
        made on iBendouma is 100% secured. These trusted partners, whose
        reputation is second to none do, are listed below:
      </p>
      <div className="methode-of-payment">
        <span>Pay With Skrill </span>
        <img src={skrill} alt="skrill" />
        <p>
          Skrill, one of the world's leading digital payment companies with over
          36 million account holders, enables payments as well as internet
          transfers since 2001. Its services are used in over 200 countries and
          40 low-cost currencies, and always securely. Skrill protects your
          information personal finances and makes your online payments simple,
          fast and safe.{" "}
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Pay with PayPal </span>
        <img src={paypal} alt="paypal" />
        <p>
          PayPal is the undisputed leader in online payments, with over 100
          million accounts in 190 countries around the world. PayPal has earned
          the trust of its buyers and sellers by offering a very high security,
          and is used by trading platforms reputable like eBay..
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Pay by credit card </span>
        <img src={card} alt="card" />
        <p>
          Payment by credit card on iBendouma is completely secure. If your bank
          has implemented the authentication protocol that strengthens the
          security of online payments, you will be invited to provide additional
          personal information (your date of birth for example).
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Pay by Paysafecard</span>
        <img src={safecard} alt="safecard" />
        <p>
          ABuy Paysafecard at over 480,000 points of sale anywhere in the world,
          and use them quickly, simply and safely to pay in thousands of online
          shops, including including iBendouma of course! As the name suggests,
          Paysafecard is safe because you do not provide any personal
          information regarding yourself or your credit card. Your privacy
          therefore remains completely protected at all times with Paysafecard!
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Pay with Sofort </span>
        <img src={sofort} alt="sofort" />
        <p>
          With Sofort Banking, online shopping payments are convenient and sure.
          You can use your own login information online banking, which are
          highly secure thanks to a process multi-level authentication and a
          confirmation code that has limited validity.
        </p>
      </div>
      <div
        className="methode-of-payment"
        style={{
          marginBottom: "20px",
        }}
      >
        <span>Pay By Blue card</span>
        <img src={blue} alt="blue" />
        <p>
          Blue card is a major debit card payment system in France. It works
          like a credit card, but the holder of the card does not have to pay
          any fees. When using a Card Blue at a French merchant, the
          transactions are verified and authenticated, therefore secure.
        </p>
      </div>
    </div>
  ) : language === "espagnol" ? (
    <div className="secure-payment">
      <h1 className="secure-payment-title">Pago seguro</h1>
      <p className="secure-payment-intro">
        Nuestra misión es brindarle una experiencia de compra placentera. De
        este modo, trabajamos con los mejores sistemas de pago online. para
        asegurarse de que cualquier pago hecho en iBendouma es 100% seguro. Estos
        socios de confianza, cuyos reputación es insuperable, se enumeran a
        continuación:
      </p>
      <div className="methode-of-payment">
        <span>Pagar con Skrill </span>
        <img src={skrill} alt="skrill" />
        <p>
          Skrill, una de las principales empresas de pagos digitales del mundo
          con más de 36 millones de titulares de cuentas, permite pagos e
          Internet transferencias desde 2001. Sus servicios se utilizan en más
          de 200 países y 40 monedas de bajo coste, y siempre de forma segura.
          Skrill protege su información de finanzas personales y simplifica sus
          pagos en línea, rápido y seguro.{" "}
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Pagar con PayPal</span>
        <img src={paypal} alt="paypal" />
        <p>
          PayPal es el líder indiscutible en pagos en línea, con más de 100
          millones de cuentas en 190 países de todo el mundo. PayPal ha ganado
          la confianza de sus compradores y vendedores ofreciendo una altísima
          seguridad, y es utilizado por plataformas comerciales acreditadas como
          eBay...
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Pagar con tarjeta de crédito </span>
        <img src={card} alt="card" />
        <p>
          El pago con tarjeta de crédito en iBendouma es completamente seguro. Si
          tu banco ha implementado el protocolo de autenticación que fortalece
          la seguridad de los pagos en línea, se le invitará a proporcionar
          información adicional información personal (su fecha de nacimiento,
          por ejemplo).
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Pagar con Paysafecard</span>
        <img src={safecard} alt="safecard" />
        <p>
          A Compra Paysafecard en más de 480.000 puntos de venta en todo el
          mundo, y utilízalos de forma rápida, sencilla y segura para pagar en
          miles de online tiendas, incluyendo iBendouma por supuesto! Como el
          nombre sugiere, Paysafecard es seguro porque no proporciona ninguna
          información personal información sobre usted o su tarjeta de crédito.
          Tu privacidad ¡Por lo tanto, permanece completamente protegido en todo
          momento con Paysafecard!
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Pagar con Sofort </span>
        <img src={sofort} alt="sofort" />
        <p>
          Con Sofort Banking, los pagos de compras en línea son cómodos y
          seguros. Puede usar su propia información de inicio de sesión en la
          banca en línea, que son altamente seguro gracias a un proceso de
          autenticación multinivel y un código de confirmación que tiene validez
          limitada.
        </p>
      </div>
      <div
        className="methode-of-payment"
        style={{
          marginBottom: "20px",
        }}
      >
        <span>Pagar con tarjeta azul</span>
        <img src={blue} alt="blue" />
        <p>
          La tarjeta azul es un importante sistema de pago con tarjeta de débito
          en Francia. Funciona como una tarjeta de crédito, pero el titular de
          la tarjeta no tiene que pagar cualquier cargo. Al usar una tarjeta
          azul en un comerciante francés, el las transacciones se verifican y
          autentican, por lo tanto, son seguras.
        </p>
      </div>
    </div>
  ) : (
    <div className="secure-payment">
      <h1 className="secure-payment-title">Paiement Sécurisé</h1>
      <p className="secure-payment-intro">
        Notre mission est de vous fournir une expérience d’achats agréable .
        Ainsi, nous travaillons avec les meilleurs systèmes de paiement en ligne
        pour nous assurer que tout paiement effectué sur iBendouma est 100%
        sécurisé. Ces partenaires de confiance, dont la réputation n'est plus à
        faire, sont énumérés ci-dessous:
      </p>
      <div className="methode-of-payment">
        <span>Payer Avec Skrill </span>
        <img src={skrill} alt="skrill" />
        <p>
          Skrill, une des principales sociétés de paiements numériques au monde
          avec plus de 36 millions de titulaires de compte, permet des paiements
          ainsi que des transferts par Internet depuis 2001. Ses services sont
          utilisés dans plus de 200 pays et 40 devises à faibles coûts, et
          toujours de manière sécurisée. Skrill protège vos informations
          financières personnelles et rend vos paiements en ligne simples,
          rapides et sûrs.{" "}
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Payez avec PayPal </span>
        <img src={paypal} alt="paypal" />
        <p>
          PayPal est le leader incontesté des paiements en ligne, avec plus de
          100 millions de comptes dans 190 pays à travers le monde. Paypal a
          gagné la confiance de ses acheteurs et vendeurs en offrant une très
          grande sécurité, et est utilisé par des plates-formes de transactions
          réputées comme eBay.
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Payer par carte de crédit </span>
        <img src={card} alt="card" />
        <p>
          Le paiement par carte de crédit sur iBendouma est entièrement sécurisé.
          Si votre banque a mis en place le protocole d'authentification qui
          renforce la sécurité des paiements en ligne, vous serez invité(e) à
          fournir des renseignements personnels supplémentaires (votre date de
          naissance par exemple).
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Payer par Paysafecard</span>
        <img src={safecard} alt="safecard" />
        <p>
          Achetez des cartes Paysafecard dans plus de 480.000 points de vente
          partout dans le monde, et utilisez-les rapidement, simplement et en
          toute sécurité pour payer dans des milliers de boutiques en ligne, y
          compris iBendouma bien sûr! Comme son nom l’indique, Paysafecard est
          sûr parce que vous ne donnez aucune information personnelle concernant
          vous-même ou votre carte de crédit. Votre vie privée reste donc
          complètement protégée en tout temps avec Paysafecard!
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Payer avec Sofort </span>
        <img src={sofort} alt="sofort" />
        <p>
          Avec Sofort Banking, les paiements d'achats en ligne sont pratiques et
          sûrs. Vous pouvez utiliser vos propres informations de connexion
          bancaire en ligne, qui sont hautement sécurisées grâce à un processus
          d'authentification à multi-niveaux et un code de confirmation qui a
          une validité limitée.
        </p>
      </div>
      <div
        className="methode-of-payment"
        style={{
          marginBottom: "20px",
        }}
      >
        <span>Payer Par Carte Bleue </span>
        <img src={blue} alt="blue" />
        <p>
          Carte Bleue est un système de paiement par carte de débit majeur en
          France. Il fonctionne comme une carte de crédit, mais le titulaire de
          la carte n'a pas à payer de frais. Lorsque vous utilisez une Carte
          Bleue chez un commerçant français, les transactions sont vérifiées et
          authentifiées, donc sécurisées.
        </p>
      </div>
    </div>
  );
};

export default SecurePayment;
