import Concept from "./concept";
import Qns from "./qns";
import Values from "./values";

const APropsSection = () => {
  return (
    <section className="flex justify-center gap-16 bg-white py-12">
      <Concept />
      <Values />
      <Qns />
    </section>
  );
};

export default APropsSection;
