const ArtSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 py-12">
        <div className="font-reem text-8xl">
          <div className="font-extrabold text-info-content">
            <span>الشانطي</span>
          </div>
        </div>
        <blockquote className="font-noto text-3xl">“باع و روح”</blockquote>
      </div>
      <div className="flex justify-center">
        <div className="h-1 w-[35%] bg-primary"></div>
      </div>
    </div>
  );
};

export default ArtSection;
