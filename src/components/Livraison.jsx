import React from "react";
import { useSelector } from "react-redux";

const Livraison = () => {
  const { language } = useSelector((state) => state.language);
  return (
    <div className="livraison">
      {language === "anglais" && (
        <>
          <h1>DELIVERY POLICY</h1>
          <p>
            Delivery process: kamas are delivered by exchange, to a map given
            beforehand in the online chat.
            <br />
            <br />
            Once your order is confirmed and the payment is accepted, go to the
            chat to get this map.
            <br />
            Please check your character name carefully when creating an order to
            ensure you receive your kamas.
            <br />
            <br />
            Delivery time: Kamas are usually delivered within minutes or hours
            depending on stock availability.
            <br />
            Do not hesitate to check the availability of a server via the online
            chat if you want to be delivered as soon as possible after the
            payment.
          </p>
        </>
      )}

      {language === "francais" && (
        <>
          <h1>POLITIQUE DE LIVRAISON</h1>
          <p>
            <strong>Processus de livraison:</strong> les kamas sont livrés par échange, à une map
            donnée au préalable dans le chat en ligne.
            <br />
            <br /> Une fois que votre commande est confirmée et que le paiement
            est accepté, rendez-vous sur le chat pour obtenir cette map.
            <br /> Veuillez vérifier attentivement votre nom de personnage lors
            de la création de commande pour vous assurer de bien recevoir vos
            kamas.
            <br />
            <br /><strong>Délai de livraison:</strong> Les kamas sont généralement livrées dans
            les minutes ou les heures qui suivent dépendamment de la
            disponibilité du stock.
            <br /> N’hésitez pas à consulter d’abord la disponibilité d’un
            serveur via le chat en ligne si vous souhaitez être livrées le plus
            rapidement possible après le paiement.
          </p>
        </>
      )}
      {language === "espagnol" && (
        <>
          <h1>POLÍTICA de ENVÍO</h1>
          <p>
            Proceso de entrega: los Kamas se entregan por intercambio, a un mapa
            dado previamente en el chat en línea.
            <br />
            <br />
            Una vez que su pedido se confirma y el pago es aceptado, vaya al
            chat para obtener este mapa.
            <br />
            Por favor, revisa cuidadosamente tu nombre de personaje al crear el
            comando para asegurarte de que recibes tus Kamas.
            <br />
            <br />
            Tiempo de entrega: Los Kamas se entregan generalmente en minutos u
            horas dependiendo de la disponibilidad del stock.
            <br />
            No dude en consultar primero la disponibilidad de un servidor a
            través del chat en línea si desea ser entregado lo antes posible
            después del pago.
          </p>
        </>
      )}
    </div>
  );
};

export default Livraison;
