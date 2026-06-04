export default function FundCard({ fund, color }) {
  const aum = fund.aum
    ? fund.aum >= 1000
      ? `$${(fund.aum / 1000).toFixed(1)}T`
      : `$${fund.aum}B`
    : null;

  return (
    <div className="fund-card" style={{ "--card-color": color }}>
      <div className="fc-left">
        <div className="fc-ticker">{fund.ticker}</div>
      </div>

      <div className="fc-body">
        <div className="fc-name">{fund.name}</div>
        <div className="fc-meta">
          <span className="fc-tag">{fund.type}</span>
          {aum && <span className="fc-tag">AUM {aum}</span>}
          {fund.er && <span className="fc-tag">ER {fund.er}%</span>}
          {fund.index && <span className="fc-tag index">{fund.index}</span>}
        </div>
        <div className="fc-note">{fund.note}</div>
        {fund.source && (
          <div className="fc-source">
            Source:{" "}
            {fund.source_url ? (
              <a href={fund.source_url} target="_blank" rel="noopener noreferrer">
                {fund.source}
              </a>
            ) : (
              fund.source
            )}
          </div>
        )}
      </div>

      <div className="fc-right">
        {fund.bucket === "pre-ipo" && (
          <>
            <div className="fc-pill">
              <span className="fc-dot pulse" />
              Holds Now
            </div>
            {fund.weight && (
              <div className="fc-weight">
                <span className="fc-weight-num">{fund.weight}%</span>
                <span className="fc-weight-lbl">of portfolio</span>
              </div>
            )}
            {fund.value_b && (
              <div className="fc-value">${fund.value_b}B held</div>
            )}
          </>
        )}

        {fund.bucket === "post-ipo" && (
          <>
            <div className="fc-pill">
              <span className="fc-dot" />
              Pending IPO
            </div>
            {fund.expected_date && (
              <div className="fc-date">
                <span className="fc-date-lbl">Expected</span>
                <span className="fc-date-val">{fund.expected_date}</span>
              </div>
            )}
            {fund.est_exposure && (
              <div className="fc-exposure">{fund.est_exposure}</div>
            )}
          </>
        )}

        {fund.bucket === "no" && (
          <div className="fc-pill muted">
            <span className="fc-dot" />
            Won't Hold
          </div>
        )}
      </div>
    </div>
  );
}
