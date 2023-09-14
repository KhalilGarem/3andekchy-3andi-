import { api } from "~/utils/api";

interface DeleteModalProps {
  basketItemId: string | null;
  onCloseDeleteFromBasket: () => void;
}

const DeleteFromBasket: React.FC<DeleteModalProps> = ({
  basketItemId,
  onCloseDeleteFromBasket,
}) => {
  // Api context
  const ctx = api.useContext();

  // Delete basket item mutation
  const { mutate: deleteBasketItem } = api.basket.deleteBasketItem.useMutation({
    onSuccess: () => {
      ctx.basket.getBasket.invalidate();
      onCloseDeleteFromBasket();
    },
  });

  const onDeleteBasketItem = () => {
    if (basketItemId) {
      deleteBasketItem({ id: basketItemId });
    }
  };

  return (
    <dialog id="delete_from_basket_modal" className="modal">
      <form method="dialog" className="modal-box">
        <h3 className="font-amaranth text-lg font-bold text-primary">
          Supprimer ce produit
        </h3>
        <p className="py-4 font-roboto text-lg">
          Êtes-vous sûr de vouloir supprimer cet élément ?
        </p>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn" onClick={onCloseDeleteFromBasket}>
            Annuler
          </button>
          <button className="btn-primary btn" onClick={onDeleteBasketItem}>
            Confirmer
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default DeleteFromBasket;
