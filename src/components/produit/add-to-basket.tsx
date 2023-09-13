import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { api } from "~/utils/api";
import {
  AddProductToBasketInputType,
  addProductToBasketSchema,
} from "~/validation/basketSchema";

interface AddToBasketProps {
  productId: string;
  onCloseAddToBasketModal: () => void;
}

const AddToBasket: React.FC<AddToBasketProps> = ({
  productId,
  onCloseAddToBasketModal,
}) => {
  // Router
  const router = useRouter();

  // Add To Basket Form Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddProductToBasketInputType>({
    resolver: zodResolver(addProductToBasketSchema),
    defaultValues: {
      productId,
      quantity: 1,
    },
  });

  // Add To Basket Mutation
  const { mutate: addProductToBasket } =
    api.basket.addProductToBasket.useMutation({
      onSuccess: () => {
        router.push("/el-9offa");
      },
    });

  // onSubmit
  const onSubmit = (data: AddProductToBasketInputType) => {
    addProductToBasket(data);
  };

  return (
    <dialog id="add_to_basket_modal" className="modal">
      <form
        method="dialog"
        className="modal-box"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="font-amaranth text-lg font-bold text-primary">
          Entrer la quantité ici
        </h3>
        <div className="w-full py-8">
          <input
            className="input-bordered input-primary input w-full"
            type="number"
            min={1}
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
            onClick={onCloseAddToBasketModal}
          >
            Annuler
          </button>
          <button className="btn-primary btn" type="submit">
            Aoujter au panier
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default AddToBasket;
