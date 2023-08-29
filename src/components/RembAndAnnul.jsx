import React from "react";
import { useSelector } from "react-redux";

const RembAndAnnul = () => {
  const { language } = useSelector((state) => state.language);
  return (
    <div className="rembandannul">
      {language === "anglais" && (
        <>
          <h1>REFUND AND CANCELLATION POLICY</h1>
          <p>
            Ibendouma commits to refund unsatisfied customers to a reasonable
            extent. Please not that support may ask you to provide proof of
            payment. The customer is entitled to request a refund in the
            following cases.
            <br />
            <br />
            <strong>Virtual products not received:</strong> in the event that
            the virtual products have not been delivered to the customer within
            the expected delivery time, the customer may request a refund.
            <br />
            <br />
            <strong>Double payment:</strong> in the event that the customer has
            made a repeated payment for an order, he is requested to contact the
            support in order to be refunded as soon as possible. For any reason
            other than those listed above, please explain your situation to
            support. Your refund request will be verified after submitting the
            order number and refund reason. If the request is approved, the
            refund will be returned to the customer's account or credit card. In
            the following cases, we cannot refund customers.
            <br />
            <br />
            <strong>Delivery complete:</strong> the products have been delivered
            to the customer as agreed and as described.
            <br />
            <br />
            <strong>Unpaid order:</strong> the customer is not allowed to
            request a refund for the unpaid order.
          </p>
        </>
      )}

      {language === "francais" && (
        <>
          <h1>POLITIQUE DE REMBOURSEMENT ET D’ANNULATION</h1>
          <p>
            Ibendouma s’engage à rembourser les clients insatisfaits dans la
            mesure du raisonnable. Il se peut que le support puisse vous
            demander de lui fournir une preuve de paiement. Le client est en
            droit de demander un remboursement dans les cas suivants.
            <br />
            <br />
            <strong>Produits virtuels non reçus:</strong> dans le cas où les
            produits virtuels n’ont pas été livrés au client dans le délai de
            livraison prévu, le client peut demander un remboursement.
            <br />
            <br />
            <trong>Double paiement:</trong> dans le cas où le client a effectué
            un paiement répété pour une commande, il est prié de contacter le
            support afin d’être remboursé au plus vite. Pour toute raison autre
            que celles énumérées ci-dessus, vous êtes priés d’expliquer votre
            situation au support. Votre demande de remboursement sera vérifiée
            après avoir soumis le numéro de commande et le motif du
            remboursement. Si la demande est approuvée, le remboursement sera
            retourné sur le compte client ou sur la carte bancaire. Dans les cas
            suivants, nous ne pouvons pas rembourser les clients.
            <br />
            <br />
            <strong>Livraison terminée:</strong> les produits ont été livrés au
            client comme convenu et conformes à la description.
          </p>
        </>
      )}
      {language === "espagnol" && (
        <>
          <h1>POLÍTICA DE REEMBOLSO Y CANCELACIÓN</h1>
          <p>
            Ibendouma se compromete a reembolsar a los clientes insatisfechos a
            un precio razonable medida. Tenga en cuenta que el soporte puede
            pedirle que proporcione una prueba de pago. El cliente tiene derecho
            a solicitar un reembolso en los siguientes casos.
            <br />
            <br />
            <strong>Productos virtuales no recibidos:</strong> en el caso de que
            el virtual los productos no han sido entregados al cliente dentro
            del tiempo esperado plazo de entrega, el cliente podrá solicitar la
            devolución.
            <br />
            <br />
            <strong>Doble pago:</strong> en el caso de que el cliente haya
            realizado un pago repetido por un pedido, se le solicita que se
            comunique con el soporte para que se le reembolse lo antes posible
            como sea posible. Por cualquier motivo que no sea el mencionado
            anteriormente, por favor explique su situación para apoyar. Su
            solicitud de reembolso será verificado después de enviar el número
            de pedido y el motivo del reembolso. Si el se aprueba la solicitud,
            el reembolso se devolverá al cliente cuenta o tarjeta de crédito. En
            los siguientes casos, no podemos reembolsar clientes.
            <br />
            <br />
            <strong>Entrega completa:</strong> los productos han sido entregados
            al cliente según lo acordado y descrito.
            <br />
            <br />
            <strong>Pedido no pagado:</strong> el cliente no está permitido
            solicitar un reembolso por el pedido no pagado.
          </p>
        </>
      )}
    </div>
  );
};

export default RembAndAnnul;
