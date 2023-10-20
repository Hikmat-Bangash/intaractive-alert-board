"use client";
import React, { useEffect } from "react";

const AnalysisWidget: React.FC = () => {
    useEffect(() => {
      // Find the existing widget container
      const widgetContainer = document.querySelector(
        ".tradingview-widget"
        );
        
        if (widgetContainer) {
          const script = document.createElement("script");
          script.src =
            "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
          script.async = true;

          script.innerHTML = JSON.stringify({
            interval: "1m",
            width: 425,
            isTransparent: false,
            height: 450,
            symbol: "NASDAQ:AAPL",
            showIntervalTabs: true,
            displayMode: "single",
            locale: "en",
            colorTheme: "light",
          });

          script.addEventListener("load", () => {
            console.log("TradingView script loaded successfully.");
          });

          script.addEventListener("error", () => {
            console.error("Error loading TradingView script.");
          });

          document
            .querySelector(".tradingview-widget")
            ?.appendChild(script);

          // Clear the existing content of the widget container and append the updated script
          widgetContainer.innerHTML = "";
          widgetContainer.appendChild(script);
        }
    }, []);


  return (
    <div className="tradingview-widget-container w-full flex justify-center items-center">
      <div className="tradingview-widget w-full"></div>
    </div>
  );
};

export default AnalysisWidget;
