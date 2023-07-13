interface FeatureCardProps {
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  Icon,
  title,
  description,
}) => {
  return (
    <div className="group rounded-box flex h-[350px] w-[300px] flex-col items-center justify-center gap-2 border-primary bg-white px-4 text-center shadow-sm hover:cursor-pointer hover:border-b-8 hover:shadow-2xl">
      <Icon className="h-24 w-24 group-hover:text-primary" />
      <h1 className="text-2xl font-bold group-hover:text-primary">{title}</h1>
      <p className="font-semibold">{description}</p>
    </div>
  );
};

export default FeatureCard;
