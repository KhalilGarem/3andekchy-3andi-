import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "~/utils/api";
import {
  editProductDescriptionSchema,
  EditProductDescriptionInputType,
} from "~/validation/editProductShcema";

interface EditDescriptionProps {
  onCloseEditDescriptionModal: () => void;
  productId: string;
  prductDescription: string;
}

const EditDescription: React.FC<EditDescriptionProps> = ({
  onCloseEditDescriptionModal,
  productId,
  prductDescription,
}) => {
  // Api ctx
  const ctx = api.useContext();

  // Create Product Form Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProductDescriptionInputType>({
    resolver: zodResolver(editProductDescriptionSchema),
    defaultValues: {
      id: productId,
      description: prductDescription,
    },
  });

  // Edit Product Description mutation
  const { mutate: editProductDescription } =
    api.product.editProduct.useMutation({
      onSuccess: async () => {
        await ctx.product.getProductById.invalidate({ id: productId });
        onCloseEditDescriptionModal();
      },
    });

  // onSubmit
  const onSubmit = (data: EditProductDescriptionInputType) => {
    editProductDescription(data);
  };

  return (
    <dialog id="edit_description_modal" className="modal">
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="dialog"
        className="modal-box"
      >
        <h3 className="font-amaranth text-lg font-bold text-primary">
          Modifier la description du produit
        </h3>
        <div className="w-full py-8">
          <textarea
            placeholder="Entrez la nouveau description ici ..."
            className="textarea-bordered textarea-primary textarea h-32 w-full"
            {...register("description")}
          />
          <span className="label-text-alt text-error">
            {errors.description?.message}
          </span>
        </div>
        <div className="modal-action">
          <button
            className="btn"
            type="button"
            onClick={onCloseEditDescriptionModal}
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

export default EditDescription;
