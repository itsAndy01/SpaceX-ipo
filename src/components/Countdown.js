import { useState, useEffect } from "react";

export default function Countdown({ meta }) {
  const [time, setTime] = useState(() => {
    const targetDate = new Date(meta?.spacex_ipo_date || "2026-06-12T09:30:00-04:00");
    const diff = targetDate - new Date();
    if (diff <= 0) return null;
    return {
      days:  Math.floor(diff / 864e5),
      hours: Math.floor((diff % 864e5) / 36e5),
      mins:  Math.floor((diff % 36e5) / 6e4),
      secs:  Math.floor((diff % 6e4) / 1e3),
    };
  });

  useEffect(() => {
    const getTime = () => {
      const targetDate = new Date(meta?.spacex_ipo_date || "2026-06-12T09:30:00-04:00");
      const diff = targetDate - new Date();
      if (diff <= 0) return null;
      return {
        days:  Math.floor(diff / 864e5),
        hours: Math.floor((diff % 864e5) / 36e5),
        mins:  Math.floor((diff % 36e5) / 6e4),
        secs:  Math.floor((diff % 6e4) / 1e3),
      };
    };

    setTime(getTime());
    const t = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(t);
  }, [meta]);

  if (!time) {
    return (
      <div className="countdown-bar">
        <span className="cd-label">Status</span>
        <div className="cd-live">🚀 LIVE — SpaceX is trading</div>
      </div>
    );
  }

  const units = [
    { label: "Days",  val: time.days },
    { label: "Hours", val: time.hours },
    { label: "Mins",  val: time.mins },
    { label: "Secs",  val: time.secs },
  ];

  return (
    <div className="countdown-bar">
      <span className="cd-label">IPO in</span>
      <div className="cd-units">
        {units.map(({ label, val }) => (
          <div className="cd-unit" key={label}>
            <span className="cd-num">{String(val).padStart(2, "0")}</span>
            <span className="cd-lbl">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
