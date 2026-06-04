import { useState } from "react";
import { FUNDS, META } from "./data/funds";
import Countdown from "./components/Countdown";
import Bucket from "./components/Bucket";
import FilterBar from "./components/FilterBar";
import Stars from "./components/Stars";
import "./App.css";

const COLORS = {
  "pre-ipo":  "#00ff9d",
  "post-ipo": "#ffd060",
  "no":       "#4a6680",
};

export default function App() {
  const [filter, setFilter] = useState("all");
  const [email, setEmail]   = useState("");
  const [signed, setSigned] = useState(false);

  const counts = {
    all:       FUNDS.length,
    "pre-ipo":  FUNDS.filter((f) => f.bucket === "pre-ipo").length,
    "post-ipo": FUNDS.filter((f) => f.bucket === "post-ipo").length,
    no:         FUNDS.filter((f) => f.bucket === "no").length,
  };

  function filtered(bucket) {
    const funds = FUNDS.filter((f) => f.bucket === bucket);
    if (filter === "all" || filter === bucket) return funds;
    return [];
  }

  function handleSignup(e) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSigned(true);
  }

  return (
    <>
      <Stars />
      <div className="app">

        {/* Header */}
        <header className="header">
          <div className="container">
            <div className="logo">⬡ SpaceXFunds.com</div>
          </div>
        </header>

        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="eyebrow">IPO Tracker · Updated {META.last_updated}</div>
            <h1>Which funds will<br />own <em>SpaceX?</em></h1>
            <p className="hero-sub">
              SpaceX is targeting a <strong>June 12, 2026 IPO</strong> — potentially
              the largest in history. Index inclusion rules mean some funds add it
              in days, others wait until December. Here's every major fund,
              bucketed by when and why.
            </p>
            <Countdown />
          </div>
        </section>

        {/* Main content */}
        <main className="main">
          <div className="container">

            {/* Data notice */}
            <div className="notice">
              <strong>Data transparency</strong> — Pre-IPO holdings from fund filings
              (13-F / N-PORT), AAII's 2026 Mutual Fund Guide, Morningstar, and
              InvestmentNews. Post-IPO weights will be pulled automatically from
              fund issuer CSV files and SEC EDGAR once SpaceX trades.
            </div>

            {/* Filter bar */}
            <FilterBar active={filter} onChange={setFilter} counts={counts} />

            {/* Bucket 1 — Pre-IPO */}
            <Bucket
              title="Holds SpaceX Now"
              subtitle="These funds bought SpaceX in private funding rounds before any IPO. They hold actual SpaceX equity today."
              funds={filtered("pre-ipo")}
              color={COLORS["pre-ipo"]}
              dotStyle={{ boxShadow: "0 0 8px #00ff9d" }}
            />

            {/* Bucket 2 — Post-IPO */}
            <Bucket
              title="Will Add Post-IPO — By Index Rules"
              subtitle="These funds can't hold SpaceX until it's publicly listed. Once it IPOs, their index methodology determines exactly when they must buy. Dates based on each index's published rules."
              funds={filtered("post-ipo")}
              color={COLORS["post-ipo"]}
            />

            {/* Bucket 3 — Won't hold */}
            <Bucket
              title="Won't Hold SpaceX"
              subtitle="Bond funds hold debt. Dividend funds require dividend-paying stocks. SpaceX qualifies for neither."
              funds={filtered("no")}
              color={COLORS["no"]}
            />

            {/* Explainer */}
            <section className="explainer">
              <h2>Why don't all index funds add SpaceX on IPO day?</h2>
              <div className="exp-grid">
                {[
                  {
                    n: "01",
                    title: "Each index has its own rules",
                    body: "CRSP (Vanguard) adds within ~5 trading days. Nasdaq 100 is similarly fast. S&P 500 requires a committee vote and profitability criteria. Russell reconstitutes on a fixed annual calendar.",
                  },
                  {
                    n: "02",
                    title: "Float requirements",
                    body: "SpaceX insiders are locked up post-IPO. Many shares won't be freely tradable. Indexes requiring minimum float will weight SpaceX lower — or exclude it temporarily.",
                  },
                  {
                    n: "03",
                    title: "Pre-IPO private access",
                    body: "Active funds like Fidelity Contrafund bought SpaceX in private funding rounds years ago. Pure index funds can't do this — they can only hold publicly traded shares.",
                  },
                  {
                    n: "04",
                    title: "This site updates automatically",
                    body: "After IPO, fund issuers publish daily holdings CSV files. A script checks them every morning and updates this page when a fund confirms SpaceX.",
                  },
                ].map(({ n, title, body }) => (
                  <div className="exp-item" key={n}>
                    <div className="exp-num">{n}</div>
                    <div className="exp-title">{title}</div>
                    <div className="exp-body">{body}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Email signup */}
            <section className="signup">
              {signed ? (
                <div className="signup-thanks">
                  ✓ You're on the list. We'll notify you when a fund confirms SpaceX.
                </div>
              ) : (
                <>
                  <div className="signup-text">
                    <h3>Get notified when a fund adds SpaceX</h3>
                    <p>One email per event. No spam. Unsubscribe anytime.</p>
                  </div>
                  <form className="signup-form" onSubmit={handleSignup}>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit">Notify Me</button>
                  </form>
                </>
              )}
            </section>

          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container footer-inner">
            <span>© 2026 SpaceXFunds.com · Not investment advice</span>
            <span>
              <a href="https://data.sec.gov" target="_blank" rel="noopener noreferrer">SEC EDGAR</a>
              {" · "}
              <a href="https://www.aaii.com" target="_blank" rel="noopener noreferrer">AAII</a>
            </span>
          </div>
        </footer>

      </div>
    </>
  );
}
