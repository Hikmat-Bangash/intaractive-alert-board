"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const MarketData: React.FC = () => {
  const { isLightMode }: any = useSelector(
    (state: RootState) => state.ThemeMode
  );

  useEffect(() => {
    // Find the existing widget container
    const widgetContainer = document.querySelector(
      ".tradingview-widget-container__widget"
    );

    if (widgetContainer) {
      // Define the widget configuration
      const widgetConfig = {
        width: "100%",
        height: 520,
        symbolsGroups: [
          {
            name: "Indices",
            originalName: "Indices",
            symbols: [
              { name: "FOREXCOM:SPXUSD", displayName: "S&P 500" },
              { name: "FOREXCOM:NSXUSD", displayName: "US 100" },
              { name: "FOREXCOM:DJI", displayName: "Dow 30" },
              { name: "INDEX:NKY", displayName: "Nikkei 225" },
              { name: "INDEX:DEU40", displayName: "DAX Index" },
              { name: "FOREXCOM:UKXGBP", displayName: "UK 100" },
            ],
          },
          {
            name: "Futures",
            originalName: "Futures",
            symbols: [
              { name: "CME_MINI:ES1!", displayName: "S&P 500" },
              { name: "CME:6E1!", displayName: "Euro" },
              { name: "COMEX:GC1!", displayName: "Gold" },
              { name: "NYMEX:CL1!", displayName: "Oil" },
              { name: "NYMEX:NG1!", displayName: "Gas" },
              { name: "CBOT:ZC1!", displayName: "Corn" },
            ],
          },
          {
            name: "Bonds",
            originalName: "Bonds",
            symbols: [
              { name: "CME:GE1!", displayName: "Eurodollar" },
              { name: "CBOT:ZB1!", displayName: "T-Bond" },
              { name: "CBOT:UB1!", displayName: "Ultra T-Bond" },
              { name: "EUREX:FGBL1!", displayName: "Euro Bund" },
              { name: "EUREX:FBTP1!", displayName: "Euro BTP" },
              { name: "EUREX:FGBM1!", displayName: "Euro BOBL" },
            ],
          },
          {
            name: "Forex",
            originalName: "Forex",
            symbols: [
              { name: "FX:EURUSD", displayName: "EUR to USD" },
              { name: "FX:GBPUSD", displayName: "GBP to USD" },
              { name: "FX:USDJPY", displayName: "USD to JPY" },
              { name: "FX:USDCHF", displayName: "USD to CHF" },
              { name: "FX:AUDUSD", displayName: "AUD to USD" },
              { name: "FX:USDCAD", displayName: "USD to CAD" },
            ],
          },
        ],
        showSymbolLogo: true,
        colorTheme: isLightMode ? "light" : "dark", // Set the colorTheme based on isLightMode
        isTransparent: false,
        locale: "en",
      };

      // Create a script element with the updated configuration
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
      script.async = true;
      script.text = JSON.stringify(widgetConfig);

      // Clear the existing content of the widget container and append the updated script
      widgetContainer.innerHTML = "";
      widgetContainer.appendChild(script);
    }
  }, [isLightMode]);

  return (
    <div className="tradingview-widget-container w-full">
      <div className="tradingview-widget-container__widget w-full"></div>
    </div>
  );
};

export default MarketData;

