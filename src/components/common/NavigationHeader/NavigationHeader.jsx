import React from "react";
import { TextStyle, ThemeStyle, HeaderStyle } from "./navigationHeader.style";

const NavigationHeader = () => {
  return (
    <HeaderStyle>
      <TextStyle>Where in the world?</TextStyle>
      <ThemeStyle active={false}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          viewBox="0 0 1920 1920"
        >
          <path
            className="st0"
            d="M1294.4 1447.1c132.3 0 255.2-40.3 357.1-109.2-129.3 218.6-367.5 365.2-640 365.2-410.4 0-743-332.7-743-743.1s332.7-743 743-743c14.2 0 28.3.4 42.2 1.2-233 95-397.3 323.8-397.3 591 .1 352.2 285.7 637.9 638 637.9z"
            id="Layer_5"
          />
          <path
            className="st1"
            d="M1294.4 1447.1c-352.3 0-637.9-285.6-637.9-637.9 0-267.2 164.2-496 397.3-591-14-.8-28.1-1.2-42.2-1.2-410.4 0-743 332.7-743 743s332.7 743.1 743 743.1c272.4 0 510.6-146.6 640-365.2-102 68.9-224.9 109.2-357.2 109.2z"
            id="STROKES"
          />
        </svg>
        <span className="text">Dark Mode</span>
      </ThemeStyle>
    </HeaderStyle>
  );
};

export default NavigationHeader;
