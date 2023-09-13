import { useRouter } from "next/navigation";
import { api } from "~/utils/api";

interface DeleteModalProps {
  productId: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ productId }) => {
  // Router
  const router = useRouter();

  const { mutate: deleteProduct } = api.product.deleteProduct.useMutation({
    onSuccess: () => router.push("/mes-produits"),
  });

  return (
    <dialog id="delete_modal" className="modal">
      <form method="dialog" className="modal-box">
        <h3 className="font-amaranth text-lg font-bold text-primary">
          Supprimer ce produit
        </h3>
        <p className="py-4 font-roboto text-lg">
          Êtes-vous sûr de vouloir supprimer cet élément ?
        </p>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn">Annuler</button>
          <button
            className="btn-primary btn"
            onClick={() => deleteProduct({ id: productId })}
          >
            Confirmer
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default DeleteModal;
