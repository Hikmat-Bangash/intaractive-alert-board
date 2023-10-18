"use client";
import { RootState } from "@/redux/store";
import { CollectionsOutlined } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

interface WindowWithTradingView extends Window {
  TradingView?: {
    widget: new (options: any) => any;
  };
}

interface MarketOverviewProps {
  symbol?: string;
}

const MarketOverview: React.FC<MarketOverviewProps> = () => {
    const { isLightMode }: any = useSelector((state: RootState) => state.ThemeMode);
    
    useEffect(() => {
      const widgetContainer = document.querySelector(
        ".tradingview-widget-container__widget"
      );

    if (widgetContainer) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
      script.async = true;
      script.innerHTML = `
      {
        "colorTheme": "${isLightMode ? "light" : "dark" }",
        "dateRange": "12M",
        "showChart": true,
        "locale": "en",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": true,
        "showFloatingTooltip": false,
        "width": "400",
        "height": "660",
        "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
        "plotLineColorFalling": "rgba(41, 98, 255, 1)",
        "gridLineColor": "rgba(240, 243, 250, 0)",
        "scaleFontColor": "rgba(106, 109, 120, 1)",
        "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
        "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
        "symbolActiveColor": "rgba(41, 98, 255, 0.12",
        "tabs": [
          // ... (the rest of your config)
        ]
      }
    `; 
      // Clear the existing content of the widget container and append the updated script
      widgetContainer.innerHTML = "";
      widgetContainer.appendChild(script);
    }
  }, [isLightMode]);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default MarketOverview;

