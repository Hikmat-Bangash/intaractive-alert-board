import React, { useEffect } from "react";

const CryptoTicker: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;

    const container = document.getElementById("crypto-ticker-container");
    if (container) {
      container?.appendChild(script);
    }

    return () => {
      if (container) {
        container?.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container w-full">
      <div
        className="tradingview-widget-container__widget w-full"
        id="crypto-ticker-container"
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default CryptoTicker;
