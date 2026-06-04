import FundCard from "./FundCard";

export default function Bucket({ title, subtitle, funds, color, dotStyle }) {
  if (!funds.length) return null;

  return (
    <section className="bucket">
      <div className="bucket-header">
        <div className="bucket-dot" style={{ background: color, ...dotStyle }} />
        <h2 className="bucket-title">{title}</h2>
        <span className="bucket-count">{funds.length}</span>
      </div>
      {subtitle && <p className="bucket-sub">{subtitle}</p>}
      <div className="bucket-line" style={{ borderColor: color + "33" }} />
      <div className="bucket-cards">
        {funds.map((f) => (
          <FundCard key={f.ticker} fund={f} color={color} />
        ))}
      </div>
    </section>
  );
}
