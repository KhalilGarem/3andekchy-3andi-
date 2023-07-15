import { cn } from "~/utils/cn";

interface ContactCardProps {
  name: string;
  value: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  Icon,
  name,
  value,
  color,
}) => {
  return (
    <div className="rounded-box flex h-[180px] w-[220px] flex-col items-center justify-center gap-2 border-2 border-base-content hover:shadow-lg">
      <Icon className={cn("h-10 w-10", color)} />
      <h1 className="font-amaranth text-lg font-bold">{name}</h1>
      <p className="font-semibold">{value}</p>
    </div>
  );
};

export default ContactCard;
