// "use client";
// import React, { useEffect } from "react";

// interface TradingViewWidgetProps {
//   width: number;
//   height: number;
// }

// const TrendingSnaps: React.FC<TradingViewWidgetProps> = ({
//   width,
//   height,
// }) => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.type = "text/javascript";
//     script.async = true;
//     script.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
//     script.innerHTML = `
//       {
//         "feedMode": "all_symbols",
//         "colorTheme": "light",
//         "isTransparent": false,
//         "displayMode": "regular",
//         "width": ${width},
//         "height": ${height},
//         "locale": "en"
//       }
//     `;
//     document
//       .querySelector(".tradingview-widget-container__widget")
//       ?.appendChild(script);
//   }, [width, height]);

//   return (
//     <div className="tradingview-widget-container">
//       <div className="tradingview-widget-container__widget"></div>
//       <div className="tradingview-widget-copyright">
//         <a
//           href="https://www.tradingview.com/"
//           rel="noopener nofollow"
//           target="_blank"
//         >
//           <span className="blue-text">Track all markets on TradingView</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default TrendingSnaps;

"use client";
import React, { useEffect, useState } from "react";

interface TradingViewWidgetProps {
  width: number;
  height: number;
}

const TrendingSnaps: React.FC<TradingViewWidgetProps> = ({ width, height }) => {

    useEffect(() => {
      // Find the existing widget container
      const widgetContainer = document.querySelector(
        ".tradingview-widget-container__widget"
      );
      if (widgetContainer) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src =
          "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
        script.innerHTML = `
        {
          "feedMode": "all_symbols",
          "colorTheme": "light",
          "isTransparent": false,
          "displayMode": "regular",
          "width": ${width},
          "height": ${height},
          "locale": "en"
        }
      `;
        document
          .querySelector(".tradingview-widget-container__widget")
          ?.appendChild(script);

        // Clear the existing content of the widget container and append the updated script
        widgetContainer.innerHTML = "";
        widgetContainer.appendChild(script);
      }
    }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TrendingSnaps;
