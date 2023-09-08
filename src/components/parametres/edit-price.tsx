import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "~/utils/api";
import {
  type EditProductPriceInputType,
  editProductPriceSchema,
} from "~/validation/editProductShcema";

interface EditPriceProps {
  onCloseEditPriceModal: () => void;
  productId: string;
  prductPrice: number;
}

const EditPrice: React.FC<EditPriceProps> = ({
  onCloseEditPriceModal,
  productId,
  prductPrice,
}) => {
  // Api ctx
  const ctx = api.useContext();

  // Create Product Form Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProductPriceInputType>({
    resolver: zodResolver(editProductPriceSchema),
    defaultValues: {
      id: productId,
      price: prductPrice,
    },
  });

  // Edit Product Price mutation
  const { mutate: editProductPrice } = api.product.editProduct.useMutation({
    onSuccess: async () => {
      await ctx.product.getProductById.invalidate({ id: productId });
      onCloseEditPriceModal();
    },
  });

  // onSubmit
  const onSubmit = (data: EditProductPriceInputType) => {
    editProductPrice(data);
  };

  return (
    <dialog id="edit_price_modal" className="modal">
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
            {...register("price", { valueAsNumber: true })}
          />
          <span className="label-text-alt text-error">
            {errors.price?.message}
          </span>
        </div>
        <div className="modal-action">
          <button className="btn" type="button" onClick={onCloseEditPriceModal}>
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

export default EditPrice;
