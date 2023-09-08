const Basket = () => {
  return (
    <div className="bg-white px-32 py-12">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="font-amaranth text-lg text-primary">Image</th>
              <th className="font-amaranth text-lg text-primary">Nom</th>
              <th className="font-amaranth text-lg text-primary">Quantité</th>
              <th className="font-amaranth text-lg text-primary">Prix DT.</th>
            </tr>
          </thead>
          <tbody></tbody>
          {/* foot */}
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default Basket;
