export default function SectionTitle({ subtitle, title }) {
  return (
    <div className="mb-16">
      <p className="uppercase tracking-[0.3em] text-[#5C4033] text-sm mb-3">{subtitle}</p>
      <h2 className="text-5xl font-bold text-[#13273F]">{title}</h2>
    </div>
  );
}
