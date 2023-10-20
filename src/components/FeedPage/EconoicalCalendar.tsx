// components/TradingViewWidget.tsx

import React, { useEffect } from "react";

const EconomicalCalendar: React.FC = () => {
    useEffect(() => {
      // Find the existing widget container
      const widgetContainer = document.querySelector(
        ".tradingview-widget-container_Analysis"
      );
      if (widgetContainer) {
        const script = document.createElement("script");
        script.src =
          "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
        script.async = true;

        script.innerHTML = `
      {
        "colorTheme": "light",
        "isTransparent": false,
        "width": ${480},
        "height": ${500},
        "locale": "en",
        "importanceFilter": "-1,0,1",
        "currencyFilter": "USD,EUR,ITL,NZD,CHF,AUD,FRF,JPY,ZAR,TRL,CAD,DEM,MXN,ESP,GBP"
      }
    `;

        document
          .getElementById("tradingview-widget-container")
          ?.appendChild(script);
          // Clear the existing content of the widget container and append the updated script
          widgetContainer.innerHTML = "";
          widgetContainer.appendChild(script);
        }
        
    }, []);

  return (
    <div className="tradingview-widget-container w-full">
      <div className="tradingview-widget-container_Analysis w-full"></div>
      
    </div>
  );
};

export default EconomicalCalendar;
