const ArtSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 py-16">
        <div className="font-reem text-9xl">
          <div className="font-extrabold text-info-content">
            <span>البازار</span>
          </div>
        </div>
        <blockquote className="font-noto">
          “إذَا الشّعْبُ يَومًا أرَادَ الحَيَاةْ{" "}
          <span className="px-3 text-3xl">🇹🇳</span> فَلَابُدّ أنْ يَسْتَجِيبَ
          القَدَرْ”
        </blockquote>
      </div>
      <div className="flex justify-center">
        <div className="h-1 w-[35%] bg-primary"></div>
      </div>
    </div>
  );
};

export default ArtSection;
