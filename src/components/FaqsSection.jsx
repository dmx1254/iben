import React from "react";

import { useSelector } from "react-redux";

const FaqsSection = () => {
  const { language } = useSelector((state) => state.language);

  return (
    <div className="card">
      {language === "anglais" && (
        <h1>Dofus-Kamas, the most frequently asked questions</h1>
      )}
      {language === "espagnol" && (
        <h1>Dofus-Kamas, las preguntas más frecuentes</h1>
      )}
      {language === "francais" && (
        <h1>Dofus-Kamas, les questions les plus posées</h1>
      )}
      <details className="warning">
        <summary>
          {language === "anglais" && "Are we reliable ?"}
          {language === "espagnol" && "Somos confiables ?"}
          {language === "francais" && "Sommes nous fiables?"}
        </summary>
        {language === "anglais" && (
          <p>
            {" "}
            Any order on this site will be delivered on time or refunded if
            necessary. However, human error happens. Do not hesitate to contact
            us if you think there has been a mistake. We keep all necessary
            records in the event of an error or false dispute.
          </p>
        )}
        {language === "espagnol" && (
          <p>
            {" "}
            Cualquier pedido en este sitio será entregado a tiempo o reembolsado
            si necesario. Sin embargo, ocurre un error humano. No dude en
            contactar nosotros si cree que ha habido un error. Mantenemos todo
            lo necesario registros en caso de error o disputa falsa.
          </p>
        )}
        {language === "francais" && (
          <p>
            {" "}
            Toute commande passée sur le site sera livrée dans les temps ou
            remboursée pour le cas échéant. Cependant l’erreur étant humaine,
            n’hésitez pas à nous contacter si vous pensez qu’il y a eu erreur.
            Nous gardons tous les enregistrements nécessaires dans le cas d’une
            erreur ou d’une fausse contestation.
          </p>
        )}
      </details>

      <details className="info" open>
        <summary>
          {language === "anglais" && "How will we deliver your Kamas to you ?"}
          {language === "espagnol" && "Cómo le entregaremos sus Kamas ?"}
          {language === "francais" &&
            "Comment allons nous vous livrer vos Kamas?"}
        </summary>

        {language === "anglais" && (
          <p>
            {" "}
            Once the order has been paid, our agent will give you the meeting
            point (in-game map) where he will deliver the kamas. Go to the
            coordinates indicated where our delivery person will trade you to
            give you your kamas. NB: Please stay online in the livechat to be
            notified of the coordinates of the map.
          </p>
        )}
        {language === "espagnol" && (
          <p>
            {" "}
            Una vez pagado el pedido, nuestro agente le dará la cita punto (mapa
            del juego) donde entregará los kamas. Ve a la coordenadas indicadas
            donde nuestro repartidor lo cambiará darte tus kamas. NB: Permanezca
            en línea en el chat en vivo para estar notificado de las coordenadas
            del mapa.
          </p>
        )}
        {language === "francais" && (
          <p>
            {" "}
            Une fois la commande passée, notre agent vous communiquera le point
            de rencontre (coordonnés de la map en jeu) ou il vous livrera les
            kamas. Allez aux coordonnées indiquées où notre livreur vous lancera
            l'échange. NB : Veuillez restez en ligne dans le livechat pour être
            prévenu des coordonnées de la map.
          </p>
        )}
      </details>

      <details className="alert">
        <summary>
          {language === "anglais" &&
            "Do we ask to return the kamas once they have been delivered ?"}
          {language === "espagnol" &&
            "Pedimos devolver los kamas una vez entregados ?"}
          {language === "francais" &&
            "Demandons-nous de rendre les kamas une fois la livraison effectuée?"}
        </summary>

        {language === "anglais" && (
          <p>
            {" "}
            Anyone talking to you in-game asking you to return kamas for any
            kind of reason are scammers. An iBendouma agent will never make this
            type of request, as all communication will be done in the online
            chat. Do not hesitate to block the person when you receive this kind
            of message.
          </p>
        )}
        {language === "espagnol" && (
          <p>
            {" "}
            Cualquiera que hable contigo en el juego y te pida que devuelvas
            kamas por cualquier tipo de razón son los estafadores. Un agente de
            iBendouma nunca hará esto tipo de solicitud, ya que toda la
            comunicación se realizará en línea charlar. No dude en bloquear a la
            persona cuando reciba este tipo de mensaje.
          </p>
        )}
        {language === "francais" && (
          <p>
            {" "}
            Toute personne vous parlant dans le jeu en vous demandant le retour
            des kamas pour une raison X ou Y sont des arnaqueurs. Un agent de
            iBendouma ne fera jamais ce type de demande, car toute communication
            se fera dans le chat en ligne. N’hésitez pas à bloquer la personne
            quand vous recevez ce genre de messages.
          </p>
        )}
      </details>

      <details className="alert">
        <summary>
          {language === "anglais" &&
            "Do we ask to return the kamas once they have been delivered ?"}
          {language === "espagnol" &&
            "Qué pasa si cometiste un error al escribir el nombre del personaje ?"}
          {language === "francais" &&
            "Que faire si vous vous trompez en écrivant le personnage?"}
        </summary>

        {language === "anglais" && (
          <p>
            {" "}
            If your kamas were delivered during a rollback, please contact the
            support for a new delivery.
          </p>
        )}
        {language === "espagnol" && (
          <p>
            {" "}
            Informe el error a un miembro de soporte lo antes posible. Para
            evitar cualquier abuso, los kamas entregados no serán reembolsados
            ​​si el error no viene de nosotros.
          </p>
        )}
        {language === "francais" && (
          <p>
            {" "}
            Veuillez signaler l’erreur au plus vite à un membre du support. Pour
            éviter tout abus, les kamas livrés ne seront remboursés si l’erreur
            ne vient pas de nous.
          </p>
        )}
      </details>
    </div>
  );
};

export default FaqsSection;
