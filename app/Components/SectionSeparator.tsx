export default function SectionSeparator({ small=false } : { small? : boolean }) {
  return (
    <div className={small ? "mt-24 sm:mt-48" : "mt-32 sm:mt-64"}></div>
  );
}