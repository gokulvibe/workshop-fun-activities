import { THEME_TYPE } from "../constants";
import {ThemeContext} from "../providers/ThemeProvider";
import React, { useState, useContext } from "react";

import angryDoge from "../images/angry doge.jpg"
import happyDoge from "../images/happy doge.jpg"
import disappointedDoge from "../images/Dissapointed doge.jpg"
import dogeApproves from "../images/Doge approves.jpg"

import '../css/doge.css'


const Doge = () => {
    const [themeMode, setTheme] = useContext(ThemeContext);
    console.log("current theme mode: ",themeMode)

    return (
        <div className="doge-image">
            {
                themeMode.theme === THEME_TYPE.LIGHT ? (
                    <img src={angryDoge}></img>
                ) : themeMode.theme === THEME_TYPE.GREEN ? (
                    <img src={disappointedDoge}></img>
                ) : themeMode.theme === THEME_TYPE.DARK ? (
                    <img src={dogeApproves}></img>
                ) : <img src={happyDoge}></img>
            }
        </div>
    )
}

export default Doge