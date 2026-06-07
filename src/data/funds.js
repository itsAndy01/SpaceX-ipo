// funds.js — SpaceX fund data
// Source: AAII 2026 Mutual Fund Guide, Morningstar, InvestmentNews,
//         fund company filings through Q1 2026.
// EQUITY FUNDS ONLY — bond, sector, international, and REIT funds excluded.
// top200.js has been removed — all data lives here.

export const META = {
  last_updated: "June 7, 2026",
  spacex_ipo_date: "2026-06-12T09:30:00-04:00",
  spacex_ticker: "SPACE",
};

// bucket values: "pre-ipo" | "post-ipo" | "no"
export const FUNDS = [

  // ── PRE-IPO: Holds SpaceX now via private market ─────────────────────────

  {
    ticker: "BPTRX", name: "Baron Partners Fund", family: "Baron",
    type: "Active Mutual Fund", aum: 5.2, er: 2.0, bucket: "pre-ipo",
    weight: 29.0, value_b: null,
    note: "Highest SpaceX concentration of any fund — ~29% of the entire portfolio. Ron Baron has held SpaceX for years via private funding rounds.",
    source: "Baron fund filing Q1 2026", source_url: "https://www.baronfunds.com/baron-partners-fund",
  },
  {
    ticker: "RONB", name: "Baron First Principles ETF", family: "Baron",
    type: "Active ETF", aum: 1.2, er: 1.0, bucket: "pre-ipo",
    weight: 14.0, value_b: null,
    note: "~14% SpaceX + ~3.5% xAI — the most concentrated SpaceX ETF publicly available.",
    source: "Baron fund filing Q1 2026", source_url: "https://www.baronfunds.com/baron-first-principles-etf",
  },
  {
    ticker: "PIIVX", name: "Private Shares Fund", family: "Liberty Street Advisors",
    type: "Interval Fund", aum: null, er: null, bucket: "pre-ipo",
    weight: 13.64, value_b: null,
    note: "SpaceX is the fund's largest single holding at 13.64% of AUM as of Dec 31, 2025. Interval fund structure allows private market exposure.",
    source: "Liberty Street Advisors press release, Feb 2026", source_url: "https://www.privatesharesfund.com",
  },
  {
    ticker: "FCNTX", name: "Fidelity Contrafund", family: "Fidelity",
    type: "Active Mutual Fund", aum: 176, er: 0.39, bucket: "pre-ipo",
    weight: 5.1, value_b: 8.05,
    note: "Largest holder by dollar value at ~$8.05B. SpaceX is ~5.1% of the fund. Manager Will Danoff has held SpaceX for years via private rounds.",
    source: "AAII 2026 Mutual Fund Guide", source_url: "https://fundresearch.fidelity.com/mutual-funds/composition/316345203",
  },

  // ── POST-IPO: Adding within days — CRSP & Nasdaq 100 ─────────────────────
  // Fast-entry rules add large new stocks within ~5 trading days of IPO.
  // Expected: ~June 17–20, 2026

  {
    ticker: "QQQ", name: "Invesco QQQ Trust", family: "Invesco",
    type: "Index ETF", aum: 300, er: 0.18, bucket: "post-ipo",
    weight: null, expected_date: "~June 17–20, 2026", est_exposure: "$470–$700 per $100k",
    index: "Nasdaq 100",
    note: "Eligible immediately at IPO. Float-adjusted weighting means actual weight depends on freely tradable shares. Fastest major ETF to add SpaceX.",
    source: "InvestmentNews analysis, May 2026", source_url: "https://www.investmentnews.com",
  },
  {
    ticker: "QQQM", name: "Invesco Nasdaq 100 ETF", family: "Invesco",
    type: "Index ETF", aum: 35, er: 0.15, bucket: "post-ipo",
    weight: null, expected_date: "~June 17–20, 2026", est_exposure: "Same as QQQ",
    index: "Nasdaq 100",
    note: "Retail-friendly version of QQQ. Lower expense ratio, identical inclusion timeline.",
    source: "InvestmentNews analysis, May 2026", source_url: "https://www.investmentnews.com",
  },
  {
    ticker: "VUG", name: "Vanguard Growth ETF", family: "Vanguard",
    type: "Index ETF", aum: 150, er: 0.04, bucket: "post-ipo",
    weight: null, expected_date: "~June 17, 2026", est_exposure: "Within 5 trading days",
    index: "CRSP US Large Cap Growth",
    note: "CRSP fast-entry rules allow addition within ~5 trading days of IPO.",
    source: "Morningstar, May 2026", source_url: "https://www.morningstar.com",
  },
  {
    ticker: "VIGAX", name: "Vanguard Growth Index Fund", family: "Vanguard",
    type: "Index Mutual Fund", aum: 200, er: 0.05, bucket: "post-ipo",
    weight: null, expected_date: "~June 17, 2026", est_exposure: "Within 5 trading days",
    index: "CRSP US Large Cap Growth",
    note: "Mutual fund version of VUG. Same CRSP fast-entry rules. Widely held in 401k plans.",
    source: "AAII 2026 Mutual Fund Guide", source_url: "https://www.aaii.com",
  },
  {
    ticker: "VTI", name: "Vanguard Total Stock Market ETF", family: "Vanguard",
    type: "Index ETF", aum: 400, er: 0.03, bucket: "post-ipo",
    weight: null, expected_date: "~June 17, 2026", est_exposure: "$70–$110 per $100k",
    index: "CRSP US Total Market",
    note: "Tracks essentially every publicly traded US company. SpaceX adds within ~5 days of IPO.",
    source: "InvestmentNews analysis, May 2026", source_url: "https://www.investmentnews.com",
  },
  {
    ticker: "VTSAX", name: "Vanguard Total Stock Market Index Fund", family: "Vanguard",
    type: "Index Mutual Fund", aum: 2000, er: 0.04, bucket: "post-ipo",
    weight: null, expected_date: "~June 17, 2026", est_exposure: "$70–$110 per $100k",
    index: "CRSP US Total Market",
    note: "Mutual fund version of VTI. First mutual fund ever to reach $2 trillion AUM. Same CRSP ~5-day inclusion timeline.",
    source: "AAII 2026 Mutual Fund Guide", source_url: "https://www.aaii.com",
  },
  {
    ticker: "SCHB", name: "Schwab U.S. Broad Market ETF", family: "Schwab",
    type: "Index ETF", aum: 28, er: 0.03, bucket: "post-ipo",
    weight: null, expected_date: "~June 17–20, 2026", est_exposure: "$70–$110 per $100k",
    index: "Dow Jones U.S. Broad Stock Market",
    note: "Schwab's total market ETF. Dow Jones Broad Market index adds new large stocks quickly after listing.",
    source: "Morningstar, May 2026", source_url: "https://www.morningstar.com",
  },
  {
    ticker: "ITOT", name: "iShares Core S&P Total U.S. Stock Market ETF", family: "BlackRock",
    type: "Index ETF", aum: 62, er: 0.03, bucket: "post-ipo",
    weight: null, expected_date: "~June 17–20, 2026", est_exposure: "$70–$110 per $100k",
    index: "S&P Total Market Index",
    note: "iShares total market ETF covering all US-listed equities. SpaceX will be added shortly after IPO.",
    source: "Morningstar, May 2026", source_url: "https://www.morningstar.com",
  },

  // ── POST-IPO: Adding December 2026 — Russell reconstitution ──────────────
  // Russell misses June 2026 cutoff. Next opportunity: December style review.

  {
    ticker: "IWF", name: "iShares Russell 1000 Growth ETF", family: "BlackRock",
    type: "Index ETF", aum: 120, er: 0.19, bucket: "post-ipo",
    weight: null, expected_date: "December 2026", est_exposure: "December style review",
    index: "Russell 1000 Growth",
    note: "Tied to Russell's annual December style review. SpaceX IPOs after the June 2026 reconstitution cutoff — waits until December.",
    source: "InvestmentNews analysis, May 2026", source_url: "https://www.investmentnews.com",
  },
  {
    ticker: "VONG", name: "Vanguard Russell 1000 Growth ETF", family: "Vanguard",
    type: "Index ETF", aum: 25, er: 0.08, bucket: "post-ipo",
    weight: null, expected_date: "December 2026", est_exposure: "December style review",
    index: "Russell 1000 Growth",
    note: "Tracks the same Russell 1000 Growth index as IWF. Same December 2026 timeline.",
    source: "InvestmentNews analysis, May 2026", source_url: "https://www.investmentnews.com",
  },
  {
    ticker: "IWB", name: "iShares Russell 1000 ETF", family: "BlackRock",
    type: "Index ETF", aum: 35, er: 0.15, bucket: "post-ipo",
    weight: null, expected_date: "December 2026", est_exposure: "December reconstitution",
    index: "Russell 1000",
    note: "Broad Russell 1000 ETF covering the 1000 largest US stocks. Misses June 2026 cutoff — next opportunity is December.",
    source: "Morningstar, May 2026", source_url: "https://www.morningstar.com",
  },

  // ── POST-IPO: S&P 500 funds — date per S&P index methodology ────────────
  // S&P 500 inclusion requires: S&P committee vote, positive GAAP earnings
  // for the most recent quarter AND sum of trailing four quarters, minimum
  // float, and minimum market cap. Per published S&P methodology and
  // analyst consensus, SpaceX is eligible for the June 2027 reconstitution.
  // Date source: S&P Dow Jones Indices methodology document + InvestmentNews.

  {
    ticker: "SPY", name: "SPDR S&P 500 ETF Trust", family: "State Street",
    type: "Index ETF", aum: 600, er: 0.0945, bucket: "post-ipo",
    weight: null, expected_date: "June 2027", est_exposure: null,
    index: "S&P 500",
    note: "Largest ETF in the world at ~$600B AUM. Tracks the S&P 500 — inclusion date is determined entirely by the S&P committee per their published methodology, not estimated.",
    source: "S&P Dow Jones Indices methodology", source_url: "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf",
  },
  {
    ticker: "VOO", name: "Vanguard S&P 500 ETF", family: "Vanguard",
    type: "Index ETF", aum: 500, er: 0.03, bucket: "post-ipo",
    weight: null, expected_date: "June 2027", est_exposure: null,
    index: "S&P 500",
    note: "Vanguard's S&P 500 ETF. Date is set by the S&P committee per their published index methodology — not estimated by this site.",
    source: "S&P Dow Jones Indices methodology", source_url: "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf",
  },
  {
    ticker: "IVV", name: "iShares Core S&P 500 ETF", family: "BlackRock",
    type: "Index ETF", aum: 500, er: 0.03, bucket: "post-ipo",
    weight: null, expected_date: "June 2027", est_exposure: null,
    index: "S&P 500",
    note: "BlackRock's S&P 500 ETF. Same index, same committee rules as SPY and VOO.",
    source: "S&P Dow Jones Indices methodology", source_url: "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf",
  },
  {
    ticker: "VFIAX", name: "Vanguard 500 Index Fund", family: "Vanguard",
    type: "Index Mutual Fund", aum: 1500, er: 0.04, bucket: "post-ipo",
    weight: null, expected_date: "June 2027", est_exposure: null,
    index: "S&P 500",
    note: "Second largest mutual fund in the US at $1.5T AUM. Mutual fund version of VOO — same S&P 500 index rules apply.",
    source: "S&P Dow Jones Indices methodology", source_url: "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf",
  },
  {
    ticker: "FXAIX", name: "Fidelity 500 Index Fund", family: "Fidelity",
    type: "Index Mutual Fund", aum: 740, er: 0.015, bucket: "post-ipo",
    weight: null, expected_date: "June 2027", est_exposure: null,
    index: "S&P 500",
    note: "Most widely held 401k fund in America at 0.015% ER. Tracks S&P 500 — date is per S&P committee published rules.",
    source: "S&P Dow Jones Indices methodology", source_url: "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf",
  },
  {
    ticker: "SPLG", name: "SPDR Portfolio S&P 500 ETF", family: "State Street",
    type: "Index ETF", aum: 85, er: 0.03, bucket: "post-ipo",
    weight: null, expected_date: "June 2027", est_exposure: null,
    index: "S&P 500",
    note: "Low-cost S&P 500 ETF from State Street. Tracks the same index as SPY — same committee-determined inclusion date.",
    source: "S&P Dow Jones Indices methodology", source_url: "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf",
  },
  {
    ticker: "SCHX", name: "Schwab U.S. Large-Cap ETF", family: "Schwab",
    type: "Index ETF", aum: 48, er: 0.03, bucket: "post-ipo",
    weight: null, expected_date: "June 2027", est_exposure: null,
    index: "Dow Jones U.S. Large-Cap Total Stock Market",
    note: "Schwab large-cap ETF tracking the Dow Jones US Large-Cap index. Inclusion date determined by Dow Jones index methodology and quarterly rebalance schedule.",
    source: "S&P Dow Jones Indices methodology", source_url: "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-dj-us-indices.pdf",
  },
  {
    ticker: "SPYG", name: "SPDR Portfolio S&P 500 Growth ETF", family: "State Street",
    type: "Index ETF", aum: 32, er: 0.04, bucket: "post-ipo",
    weight: null, expected_date: "June 2027", est_exposure: null,
    index: "S&P 500 Growth",
    note: "S&P 500 Growth sub-index. SpaceX must first be added to the S&P 500 via committee decision, then classified into growth per S&P methodology.",
    source: "S&P Dow Jones Indices methodology", source_url: "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf",
  },
  {
    ticker: "IUSG", name: "iShares Core S&P U.S. Growth ETF", family: "BlackRock",
    type: "Index ETF", aum: 42, er: 0.11, bucket: "post-ipo",
    weight: null, expected_date: "June 2027", est_exposure: null,
    index: "S&P 900 Growth",
    note: "S&P growth index. Inclusion follows S&P committee approval and growth classification per published methodology.",
    source: "S&P Dow Jones Indices methodology", source_url: "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf",
  },

  // ── WON'T HOLD — Dividend requirement ────────────────────────────────────

  {
    ticker: "SCHD", name: "Schwab U.S. Dividend Equity ETF", family: "Schwab",
    type: "Dividend ETF", aum: 65, er: 0.06, bucket: "no",
    note: "Requires consistent dividend history. SpaceX pays no dividend and has no plans to.",
    source: null, source_url: null,
  },
  {
    ticker: "VYM", name: "Vanguard High Dividend Yield ETF", family: "Vanguard",
    type: "Dividend ETF", aum: 58, er: 0.06, bucket: "no",
    note: "Dividend yield requirement. SpaceX pays no dividend — not eligible.",
    source: null, source_url: null,
  },
  {
    ticker: "DVY", name: "iShares Select Dividend ETF", family: "BlackRock",
    type: "Dividend ETF", aum: 18, er: 0.38, bucket: "no",
    note: "Selects high dividend-paying US stocks. SpaceX pays no dividend — not eligible.",
    source: null, source_url: null,
  },
  {
    ticker: "SCHA", name: "Schwab U.S. Small-Cap ETF", family: "Schwab",
    type: "Index ETF", aum: 16, er: 0.04, bucket: "no",
    note: "Small-cap index. SpaceX will be valued far above small-cap thresholds at IPO — not eligible.",
    source: null, source_url: null,
  },

];
