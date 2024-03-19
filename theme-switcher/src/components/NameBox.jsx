import React, { useState, useContext } from "react";
import {ThemeContext} from "../providers/ThemeProvider";
import { THEME_TYPE } from "../constants";

const NameBox = () => {
  const [themeMode, setTheme] = useContext(ThemeContext);
  return (
    <div className="box">
      <span className="text-color">
        {
            themeMode.theme === THEME_TYPE.LIGHT ? (
              "Doge is too sensitive to light! He doesn't like it"
            ) : themeMode.theme === THEME_TYPE.GREEN ? (
                "Oopsie...where is my dark mode!??"
            ) : themeMode.theme === THEME_TYPE.DARK ? (
                "Such wow, thankyou"
            ) : <img src={happyDoge}></img>
        }
      </span>
    </div>
  );
};

export default NameBox;
