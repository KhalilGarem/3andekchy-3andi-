import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "~/utils/api";
import {
  OrderBasketInputType,
  orderBasketSchema,
} from "~/validation/basketSchema";

interface OrderBasketProps {
  onCloseOrderBasket: () => void;
  basketId: string | undefined;
}

const OrderBasket: React.FC<OrderBasketProps> = ({
  basketId,
  onCloseOrderBasket,
}) => {
  const ctx = api.useContext();

  const { mutate: orderBasket } = api.basket.orderBasket.useMutation({
    onSuccess: () => {
      onCloseOrderBasket();
      ctx.basket.getBasket.invalidate();
    },
  });

  // Order Basket Form Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderBasketInputType>({
    resolver: zodResolver(orderBasketSchema),
    defaultValues: {
      basketId,
    },
  });

  const onSubmit = (data: OrderBasketInputType) => {
    orderBasket(data);
  };

  return (
    <dialog id="order_basket_modal" className="modal">
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="dialog"
        className="modal-box"
      >
        <h3 className="font-amaranth text-lg font-bold text-primary">
          Commneder cette panier
        </h3>
        <p className="py-4 font-roboto">
          Veuillez fournir votre numéro de téléphone pour compléter la commande.
        </p>
        <div className="px-6">
          <label htmlFor="phone" className="label font-bold">
            <span className="label-text">Numéro du téléphone:</span>
          </label>
          <input
            id="phone"
            className="input-bordered input-primary input w-full"
            type="tel"
            placeholder="Numéro de téléphone"
            {...register("phone")}
          />
          <span className="label-text-alt text-error">
            {errors.phone?.message}
          </span>
        </div>
        <div className="modal-action px-6">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn" type="button" onClick={onCloseOrderBasket}>
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

export default OrderBasket;
