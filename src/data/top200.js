// top200.js — Best-effort top 200 equity funds.
// The first ~30 entries are common large ETFs / funds; the remainder are generated placeholders.

const FAMILY_URLS = {
  Vanguard: "https://www.vanguard.com",
  "BlackRock": "https://www.ishares.com",
  "State Street": "https://www.ssga.com",
  "Charles Schwab": "https://www.schwab.com",
  Fidelity: "https://www.fidelity.com",
  Invesco: "https://www.invesco.com",
  Baron: "https://www.baronfunds.com",
  "Liberty Street Advisors": "https://www.privatesharesfund.com",
  "American Funds": "https://www.americanfunds.com",
  "T. Rowe Price": "https://www.troweprice.com",
  "Morgan Stanley": "https://www.morganstanley.com",
  "Janus Henderson": "https://www.janushenderson.com",
  "Dimensional Fund Advisors": "https://www.dimensional.com",
};

const curated = [
  { ticker: "SPY", name: "SPDR S&P 500 ETF Trust", family: "State Street", type: "Index ETF", source: "SPDRs / State Street", source_url: "https://www.ssga.com" },
  { ticker: "VOO", name: "Vanguard S&P 500 ETF", family: "Vanguard", type: "Index ETF", source: "Vanguard fund page", source_url: "https://www.vanguard.com" },
  { ticker: "IVV", name: "iShares Core S&P 500 ETF", family: "BlackRock", type: "Index ETF", source: "iShares fund page", source_url: "https://www.ishares.com" },
  { ticker: "QQQ", name: "Invesco QQQ Trust", family: "Invesco", type: "Index ETF", source: "Invesco fund page", source_url: "https://www.invesco.com" },
  { ticker: "QQQM", name: "Invesco Nasdaq 100 ETF", family: "Invesco", type: "Index ETF", source: "Invesco fund page", source_url: "https://www.invesco.com" },
  { ticker: "VTI", name: "Vanguard Total Stock Market ETF", family: "Vanguard", type: "Index ETF", source: "Vanguard fund page", source_url: "https://www.vanguard.com" },
  { ticker: "VTSAX", name: "Vanguard Total Stock Market Index Fund", family: "Vanguard", type: "Index Mutual Fund", source: "Vanguard fund page", source_url: "https://www.vanguard.com" },
  { ticker: "VFIAX", name: "Vanguard 500 Index Fund", family: "Vanguard", type: "Index Mutual Fund", source: "Vanguard fund page", source_url: "https://www.vanguard.com" },
  { ticker: "FXAIX", name: "Fidelity 500 Index Fund", family: "Fidelity", type: "Index Mutual Fund", source: "Fidelity fund page", source_url: "https://www.fidelity.com" },
  { ticker: "VEA", name: "Vanguard FTSE Developed Markets ETF", family: "Vanguard", type: "Index ETF", source: "Vanguard fund page", source_url: "https://www.vanguard.com" },
  { ticker: "VWO", name: "Vanguard FTSE Emerging Markets ETF", family: "Vanguard", type: "Index ETF", source: "Vanguard fund page", source_url: "https://www.vanguard.com" },
  { ticker: "VXUS", name: "Vanguard Total International Stock ETF", family: "Vanguard", type: "Index ETF", source: "Vanguard fund page", source_url: "https://www.vanguard.com" },
  { ticker: "IEFA", name: "iShares Core MSCI EAFE ETF", family: "BlackRock", type: "Index ETF", source: "iShares fund page", source_url: "https://www.ishares.com" },
  { ticker: "EFA", name: "iShares MSCI EAFE ETF", family: "BlackRock", type: "Index ETF", source: "iShares fund page", source_url: "https://www.ishares.com" },
  { ticker: "IWM", name: "iShares Russell 2000 ETF", family: "BlackRock", type: "Index ETF", source: "iShares fund page", source_url: "https://www.ishares.com" },
  { ticker: "SCHB", name: "Schwab U.S. Broad Market ETF", family: "Charles Schwab", type: "Index ETF", source: "Schwab fund page", source_url: "https://www.schwab.com" },
  { ticker: "ITOT", name: "iShares Core S&P Total U.S. Stock Market ETF", family: "BlackRock", type: "Index ETF", source: "iShares fund page", source_url: "https://www.ishares.com" },
  { ticker: "SCHX", name: "Schwab U.S. Large-Cap ETF", family: "Charles Schwab", type: "Index ETF", source: "Schwab fund page", source_url: "https://www.schwab.com" },
  { ticker: "VUG", name: "Vanguard Growth ETF", family: "Vanguard", type: "Index ETF", source: "Vanguard fund page", source_url: "https://www.vanguard.com" },
  { ticker: "VTV", name: "Vanguard Value ETF", family: "Vanguard", type: "Index ETF", source: "Vanguard fund page", source_url: "https://www.vanguard.com" },
  { ticker: "VGT", name: "Vanguard Information Technology ETF", family: "Vanguard", type: "Sector ETF", source: "Vanguard fund page", source_url: "https://www.vanguard.com" },
  { ticker: "XLK", name: "Technology Select Sector SPDR ETF", family: "State Street", type: "Sector ETF", source: "SPDRs / State Street", source_url: "https://www.ssga.com" },
  { ticker: "XLF", name: "Financial Select Sector SPDR ETF", family: "State Street", type: "Sector ETF", source: "SPDRs / State Street", source_url: "https://www.ssga.com" },
  { ticker: "XLE", name: "Energy Select Sector SPDR ETF", family: "State Street", type: "Sector ETF", source: "SPDRs / State Street", source_url: "https://www.ssga.com" },
  { ticker: "VNQ", name: "Vanguard Real Estate ETF", family: "Vanguard", type: "Sector ETF", source: "Vanguard fund page", source_url: "https://www.vanguard.com" },
  { ticker: "IEMG", name: "iShares Core MSCI Emerging Markets ETF", family: "BlackRock", type: "Index ETF", source: "iShares fund page", source_url: "https://www.ishares.com" },
  { ticker: "IWV", name: "iShares Russell 3000 ETF", family: "BlackRock", type: "Index ETF", source: "iShares fund page", source_url: "https://www.ishares.com" },
  { ticker: "VO", name: "Vanguard Mid-Cap ETF", family: "Vanguard", type: "Index ETF", source: "Vanguard fund page", source_url: "https://www.vanguard.com" },
  { ticker: "VB", name: "Vanguard Small-Cap ETF", family: "Vanguard", type: "Index ETF", source: "Vanguard fund page", source_url: "https://www.vanguard.com" },
  { ticker: "SPTM", name: "SPDR Portfolio S&P 500 ETF", family: "State Street", type: "Index ETF", source: "SPDRs / State Street", source_url: "https://www.ssga.com" },
];

const placeholders = Array.from({ length: 200 - curated.length }, (_, i) => {
  const n = i + 1 + curated.length;
  const family = `Provider ${Math.ceil(n / 10)}`;
  const sourceUrl = FAMILY_URLS[family] || `https://www.${String(family).replace(/[^a-zA-Z0-9]/g,"").toLowerCase()}.com`;
  return {
    ticker: `EQ${String(n).padStart(3, "0")}`,
    name: `Top Equity Fund ${n}`,
    family,
    type: "Index ETF",
    source: `${family} fund page`,
    source_url: sourceUrl,
  };
});

export const TOP200 = curated.concat(placeholders).map((f, idx) => ({
  ticker: f.ticker,
  name: f.name,
  family: f.family || null,
  type: f.type || "Index ETF",
  aum: null,
  er: null,
  bucket: "post-ipo",
  weight: null,
  top200_rank: idx + 1,
  participating: null,
  announced_no: null,
  announced_date: null,
  note: idx < curated.length ? "Curated large fund entry; verify details." : "Placeholder — replace with real fund data/announcement.",
  source: f.source || null,
  source_url: f.source_url || null,
}));
