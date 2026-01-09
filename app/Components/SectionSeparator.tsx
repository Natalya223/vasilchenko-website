export default function SectionSeparator({ small=false } : { small? : boolean }) {
  return (
    <div className={small ? "mt-24 sm:mt-52" : "mt-32 sm:mt-72"}></div>
  );
}