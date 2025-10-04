export default function SectionSeparator({ small=false } : { small? : boolean }) {
  return (
    <div className={small ? "mt-48" : "mt-64"}></div>
  );
}