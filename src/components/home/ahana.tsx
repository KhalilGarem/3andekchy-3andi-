const Ahana = () => {
  return (
    <div className="grid grid-cols-2 px-48 py-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="first-letter text-3xl font-bold text-primary">
          Qui somme nous?
        </h1>
        <p className="font-semibold">
          3andekchy 3andi est une plateforme de vente en ligne des produits
          terroir et artisanaux.
        </p>
        {/* <div className="flex items-center">
          <span className="text-xl font-extrabold italic text-primary">#</span>
          <p className=" italic">دياري</p>
        </div> */}
      </div>
      <div className="flex items-center justify-center">
        <img src="/logo/logo.png" alt="logo" />
        {/* <div className="flex flex-col items-center">
          <h1 className="font-courgette text-3xl font-bold text-primary">
            3andekchy ? 3andi
          </h1>
          <h1 className="font-semibold">! المستحيل مش تونسي</h1>
        </div> */}
      </div>
    </div>
  );
};

export default Ahana;
