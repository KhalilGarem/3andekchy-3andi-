const DeleteModal = () => {
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
          <button className="btn-primary btn">Confirmer</button>
        </div>
      </form>
    </dialog>
  );
};

export default DeleteModal;
