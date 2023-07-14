const ArtSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 py-16">
        <div className="font-reem text-9xl">
          <div className="font-extrabold text-info-content">
            <span>بيكش ؟</span>
          </div>
        </div>
        <blockquote className="font-noto text-2xl">
          “إنشاء الله ما عندك سوء”
        </blockquote>
      </div>
      <div className="flex justify-center">
        <div className="h-1 w-[35%] bg-primary"></div>
      </div>
    </div>
  );
};

export default ArtSection;
