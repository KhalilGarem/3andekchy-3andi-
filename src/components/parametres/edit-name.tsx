import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "~/utils/api";
import {
  type EditProductNameInputType,
  editProductNameSchema,
} from "~/validation/editProductShcema";

interface EditNameProps {
  onCloseEditNameModal: () => void;
  productId: string;
  prductName: string;
}

const EditName: React.FC<EditNameProps> = ({
  onCloseEditNameModal,
  productId,
  prductName,
}) => {
  // Api ctx
  const ctx = api.useContext();

  // Create Product Form Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProductNameInputType>({
    resolver: zodResolver(editProductNameSchema),
    defaultValues: {
      id: productId,
      name: prductName,
    },
  });

  // Edit Product Name mutation
  const { mutate: editProductName } = api.product.editProduct.useMutation({
    onSuccess: async () => {
      await ctx.product.getProductById.invalidate({ id: productId });
      onCloseEditNameModal();
    },
  });

  // onSubmit
  const onSubmit = (data: EditProductNameInputType) => {
    editProductName(data);
  };

  return (
    <dialog id="edit_name_modal" className="modal">
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="dialog"
        className="modal-box"
      >
        <h3 className="font-amaranth text-lg font-bold text-primary">
          Modifier le nom du produit
        </h3>
        <div className="w-full py-8">
          <input
            type="text"
            placeholder="Entrez le nouveau nom ici ..."
            className="input-bordered input-primary input w-full"
            {...register("name")}
          />
          <span className="label-text-alt text-error">
            {errors.name?.message}
          </span>
        </div>
        <div className="modal-action">
          <button className="btn" type="button" onClick={onCloseEditNameModal}>
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

export default EditName;
