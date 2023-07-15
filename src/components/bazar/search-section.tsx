interface SearchSectionProps {
  selctedProductType: boolean;
}

const SearchSection: React.FC<SearchSectionProps> = ({
  selctedProductType,
}) => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-6">
      <h1 className="font-amaranth text-2xl font-bold text-primary">
        Produits {selctedProductType ? "alimentaire" : "habillment"}
      </h1>
      <div>
        <input
          type="text"
          placeholder="Rechercher un produit ..."
          className="input-bordered input-primary input w-[400px] bg-white"
        />
      </div>
    </section>
  );
};

export default SearchSection;
