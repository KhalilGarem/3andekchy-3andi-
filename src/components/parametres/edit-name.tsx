const EditName = () => {
  return (
    <dialog id="edit_name" className="modal">
      <form method="dialog" className="modal-box">
        <h3 className="font-amaranth text-lg font-bold text-primary">
          Modifier le nom du produit
        </h3>
        <div className="w-full py-8">
          <input
            type="text"
            placeholder="Entrez le nouveau nom ici ..."
            className="input-bordered input-primary input w-full"
          />
        </div>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn">Annuler</button>
          <button className="btn-primary btn">Confirmer</button>
        </div>
      </form>
    </dialog>
  );
};

export default EditName;
