import { FaUser, FaStar } from "react-icons/fa6";

export default function TestimonialCard({ name, testimonialText, rating }: { name: string, testimonialText: string, rating: number }) {
  return (
    <div className="relative rounded-2xl shadow-[0px_5px_20px_1px] shadow-primary/15 p-6 pt-18 min-h-64 bg-background hover:scale-110 duration-200">
      <div className="absolute top-[-48px] left-1/2 -translate-x-1/2 bg-primary rounded-full p-7.25">
        <FaUser size={38} className="text-background"></FaUser>
      </div>
      <div className="flex items-center mb-3">
        <p className="text-primary text-h6 font-medium mr-4">{name}</p>
        <FaStar size={17} className="text-highlight mr-1"></FaStar>
        <p className="text-highlight text-xs font-medium">{rating}</p>
      </div>
      <p className="text-primary">{testimonialText}</p>
    </div>
  );
}