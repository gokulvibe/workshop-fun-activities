import { THEME_TYPE } from "../constants";
import {ThemeContext} from "../providers/ThemeProvider";
import React, { useState, useContext } from "react";

import angryDoge from "../images/angry doge.jpg"
import happyDoge from "../images/happy doge.jpg"
import disappointedDoge from "../images/Dissapointed doge.jpg"
import dogeApproves from "../images/Doge approves.jpg"


const Doge = () => {
    const [themeMode, setTheme] = useContext(ThemeContext);


    return (
        <div className="doge-image">
            {
                themeMode === THEME_TYPE.LIGHT ? (
                    <img src={angryDoge}></img>
                ) : themeMode === THEME_TYPE.GREEN ? (
                    <img src={disappointedDoge}></img>
                ) : themeMode === THEME_TYPE.DARK ? (
                    <img src={dogeApproves}></img>
                ) : <img src={happyDoge}></img>
            }
        </div>
    )
}

export default Doge