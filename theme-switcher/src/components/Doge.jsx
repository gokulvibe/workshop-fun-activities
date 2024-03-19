import { THEME_TYPE } from "../constants";
import {ThemeContext} from "../providers/ThemeProvider";
import React, { useState, useContext } from "react";


const Doge = () => {
    const [themeMode, setTheme] = useContext(ThemeContext);


    return (
        <div className="doge-image">
            {
                themeMode === THEME_TYPE.LIGHT ? (
                    <img src="images/angry doge.jpg"></img>
                ) : themeMode === THEME_TYPE.GREEN ? (
                    <img src="images/angry doge.jpg"></img>
                ) : themeMode === THEME_TYPE.DARK ? (
                    <img src="images/angry doge.jpg"></img>
                ) : <img src="images/angry doge.jpg"></img>
            }
        </div>
    )
}

export default Doge