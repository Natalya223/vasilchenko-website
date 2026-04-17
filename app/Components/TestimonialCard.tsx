import { FaUser, FaStar } from "react-icons/fa6";

export default function TestimonialCard({ name, testimonialText, rating, title, institution }: { name: string, testimonialText: string, rating?: number, title?: string, institution?: string }) {
  return (
    <div className="group bg-white relative rounded-2xl shadow-[0px_5px_20px_1px] shadow-primary/15 p-6 pt-18 min-h-64 hover:scale-105 duration-200 hover:bg-primary hover:text-white">
      <div className="absolute top-[-48px] left-1/2 -translate-x-1/2 bg-primary rounded-full p-7.25 group-hover:bg-white">
        <FaUser size={38} className="text-white group-hover:text-primary"></FaUser>
      </div>
      <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mb-1">
        <p className="text-h6 font-medium">{name}</p>
        {rating !== undefined && (
          <div className="flex items-center gap-1">
            <FaStar size={15} className="text-highlight"></FaStar>
            <p className="text-highlight text-xs font-medium">{rating}</p>
          </div>
        )}
      </div>
      {title && <p className="text-sm font-semibold text-primary group-hover:text-white/80 mb-0.5">{title}</p>}
      {institution && <p className="text-xs text-foreground/50 group-hover:text-white/60 mb-4">{institution}</p>}
      {!title && !institution && <div className="mb-3" />}
      <p className="text-sm leading-relaxed">{testimonialText}</p>
    </div>
  );
}