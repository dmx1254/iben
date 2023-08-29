import React from "react";
import { useSelector } from "react-redux";

const ProductDescription = ({ item, serverDesc }) => {
  // console.log(item);
  const { language } = useSelector((state) => state.language);
  return language === "anglais" ? (
    <div className="productdescription">
      <p className="productdescription-desc">
        <div>
          <p>
            Why buy Kamas <strong>{serverDesc}</strong> on ibendouma?{" "}
          </p>
          <br></br>
          <span>
            <strong>Speed ✨</strong>
          </span>
          <br></br>
          <p>
            Since the creation of the ibendouma site, speed delivery has been
            our main objective. More than 99% of our orders are delivered
            between 3 and 15 minutes.
          </p>{" "}
          <br></br>
          <span>
            <strong>accessibility and reliability ✨</strong>
          </span>
          <br></br>
          <p>
            On ibendouma, you can buy Kamas <strong>{serverDesc}</strong> at low
            prices in order to benefit from many advantages and improve your
            gaming experience. We have stocks of kamas on all Dofus servers and
            we work with reliable suppliers to ensure the correct delivery
            process. We guarantee EXCELLENT quality service, 24/7, fast and
            safe. Save time and fully enjoy your game with ibendouma. Best price
            on the market If you find better on another online store, contact us
            and we will do our best to beat it.
          </p>
          <br></br>
          <span>
            <strong>Fast process ✨</strong>
          </span>
          <br></br>
          <p>
            How to receive your Kamas on <strong>{serverDesc}</strong>? After
            placing the order, our agent will contact you to give you the
            payment information and inform you of the meeting point (in-game
            map) to deliver your Kama. Make sure you can receive private
            messages in-game, then go to the meeting point. 99% of orders are
            delivered within 3-15 minutes.
          </p>
          <br></br>
          <p>
            NB : Please check your emails or contact our customer service in
            livechat if you do not receive the kamas within the next 15 minutes.
          </p>
        </div>
      </p>
    </div>
  ) : language === "espagnol" ? (
    <div className="productdescription">
      <p className="productdescription-desc">
        <div>
          <p>
            Por qué comprar Kamas <strong>{serverDesc}</strong> en ibendouma?{" "}
          </p>
          <br></br>
          <span>
            <strong>Velocidad ✨</strong>
          </span>
          <br></br>
          <p>
            Desde la creación del sitio ibendouma, la entrega rápida ha sido
            nuestro principal objetivo. Más del 99% de nuestros pedidos se
            entregan entre 3 y 15 minutos.
          </p>{" "}
          <br></br>
          <span>
            <strong>Accesibilidad y fiabilidad✨</strong>
          </span>
          <br></br>
          <p>
            En ibendouma, puede comprar Kamas <strong>{serverDesc}</strong> a
            precios bajos con el fin de beneficiarse de muchas ventajas y
            mejorar su experiencia de juego. Tenemos existencias de kamas en
            todos los servidores de Dofus y trabajamos con proveedores fiables
            para garantizar el proceso de entrega correcto. Garantizamos un
            servicio de calidad EXCELENTE, 24/7, rápido y seguro. Ahorre tiempo
            y disfrute plenamente de su juego con ibendouma. Mejor precio en el
            mercado Si encuentra mejor en otra tienda en línea, contáctenos y
            haremos todo lo posible para vencerlo.
          </p>
          <br></br>
          <span>
            <strong>Proceso rápido ✨</strong>
          </span>
          <br></br>
          <p>
            Cómo recibir tus Kamas en <strong>{serverDesc}</strong>? Después de
            realizar el pedido, nuestro agente se pondrá en contacto contigo
            para darte la información de pago e informarle del punto de
            encuentro (en el juego mapa) para entregar su Kama. Asegúrate de que
            puedes recibir mensajes privados en el juego, luego ve al punto de
            encuentro. El 99% de los pedidos se entregan dentro de 3-15 minutos.
          </p>
          <br></br>
          <p>
            NB : Por favor revise sus correos electrónicos o póngase en contacto
            con nuestro servicio al cliente en livechat si no recibe los kamas
            dentro del próximos 15 minutos
          </p>
        </div>
      </p>
    </div>
  ) : (
    <div className="productdescription">
      <p className="productdescription-desc">
        <div>
          <p>
            Pourquoi acheter des Kamas <strong>{serverDesc}</strong> sur
            ibendouma?{" "}
          </p>
          <br></br>
          <span>
            <strong>Rapidité ✨</strong>
          </span>
          <br></br>
          <p>
            Depuis la création du site ibendouma , la rapidité de livraison est
            notre principal objectif. Plus de 99% de nos commandes sont livrées
            entre 3 et 15 minutes.
          </p>
          <br></br>
          <span>
            <strong>Accessibilité et fiabilité ✨</strong>
          </span>
          <br></br>
          <p>
            Chez ibendouma, vous pouvez acheter des Kamas sur{" "}
            <strong>{serverDesc}</strong> à bas prix afin de bénéficier de
            nombreux avantages et d’améliorer votre expérience de jeu. Nous
            disposons de stocks de kamas sur tous les serveurs de Dofus et nous
            travaillons avec des fournisseurs fiables pour assurer le bon
            déroulement de la livraison. Nous vous garantissons un service
            d'EXCELLENTE qualité,24/7, rapide et sûr. Gagnez du temps et
            profitez pleinement de votre jeu avec ibendouma.Meilleur prix sur le
            marché. Si vous trouvez mieux sur un autre magasin en ligne,
            contactez nous et nous ferons bien notre possible pour le battre.
          </p>
          <br></br>
          <span>
            <strong>Processus rapide ✨</strong>
          </span>
          <br></br>
          <p>
            Comment recevoir vos Kamas sur <strong>{serverDesc}</strong>? Après
            avoir passé la commande, notre agent vous contactera pour vous
            donner les informations de paiement et vous informera du point de
            rencontre (coordonnées de la map en jeu) pour vous livrer vos Kamas.
            Assurez-vous de pouvoir recevoir les messages privés en jeu, puis
            rendez vous aux coordonnées indiquées. 99% des commandes sont
            livrées dans un délai de 3-15 minutes.
          </p>
          <br></br>
          <p>
            NB : Veuillez vérifier vos e-mails ou contactez notre service client
            en livechat si vous ne recevez pas les kamas dans les 15 prochaines
            minutes.
          </p>
        </div>
      </p>
    </div>
  );
};

export default ProductDescription;
