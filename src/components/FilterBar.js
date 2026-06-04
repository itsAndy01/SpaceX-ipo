const FILTERS = [
  { key: "all",      label: "All funds" },
  { key: "pre-ipo",  label: "Holds now" },
  { key: "post-ipo", label: "Adding soon" },
  { key: "no",       label: "Won't hold" },
];

export default function FilterBar({ active, onChange, counts }) {
  return (
    <div className="filter-bar">
      <span className="filter-label">Filter</span>
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          className={`filter-btn ${active === key ? "active" : ""}`}
          onClick={() => onChange(key)}
        >
          {label}
          {counts[key] !== undefined && (
            <span className="filter-count">{counts[key]}</span>
          )}
        </button>
      ))}
    </div>
  );
}
