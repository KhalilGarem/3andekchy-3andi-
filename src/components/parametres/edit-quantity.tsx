import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "~/utils/api";
import {
  type EditProductQuantityInputType,
  editProductQuantitySchema,
} from "~/validation/editProductShcema";

interface EditQuantityProps {
  onCloseEditQuantityModal: () => void;
  productId: string;
  prductQuantity: number;
}

const EditQuantity: React.FC<EditQuantityProps> = ({
  onCloseEditQuantityModal,
  productId,
  prductQuantity,
}) => {
  // Api ctx
  const ctx = api.useContext();

  // Create Product Form Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProductQuantityInputType>({
    resolver: zodResolver(editProductQuantitySchema),
    defaultValues: {
      id: productId,
      quantity: prductQuantity,
    },
  });

  // Edit Product Quantity mutation
  const { mutate: editProductQuantity } = api.product.editProduct.useMutation({
    onSuccess: async () => {
      await ctx.product.getProductById.invalidate({ id: productId });
      onCloseEditQuantityModal();
    },
  });

  // onSubmit
  const onSubmit = (data: EditProductQuantityInputType) => {
    editProductQuantity(data);
  };

  return (
    <dialog id="edit_quantity_modal" className="modal">
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="dialog"
        className="modal-box"
      >
        <h3 className="font-amaranth text-lg font-bold text-primary">
          Modifier le prix du produit
        </h3>
        <div className="w-full py-8">
          <input
            type="text"
            placeholder="Entrez le nouveau nom ici ..."
            className="input-bordered input-primary input w-full"
            {...register("quantity", { valueAsNumber: true })}
          />
          <span className="label-text-alt text-error">
            {errors.quantity?.message}
          </span>
        </div>
        <div className="modal-action">
          <button
            className="btn"
            type="button"
            onClick={onCloseEditQuantityModal}
          >
            Annuler
          </button>
          <button className="btn-primary btn" type="submit">
            Confirmer
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default EditQuantity;
