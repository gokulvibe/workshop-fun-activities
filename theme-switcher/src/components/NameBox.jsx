import React, { useState, useContext } from "react";
import {ThemeContext} from "../providers/ThemeProvider";
import { THEME_TYPE } from "../constants";

const NameBox = () => {
  const [themeMode, setTheme] = useContext(ThemeContext);
  return (
    <div className="box">
      <span className="text-color">
      	{/*
      	themeMode === THEME_TYPE.DARK ? "DARK" : "LIGHT"
      	*/ }
        Doge is too sensitive to light!
      </span>
    </div>
  );
};

export default NameBox;
