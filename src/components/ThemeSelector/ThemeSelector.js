import React, {useState} from 'react'
import {useTheme} from "../../hooks/useTheme";
import './ThemeSelector.css'
import darkMode from '../../assets/darkMode.svg'
import lightMode from '../../assets/lightMode.svg'

export default function ThemeSelector() {
  const {changeColor , changeMode , mode} = useTheme()
    function toggleMode() {
        changeMode(mode === 'dark' ? 'light' : 'dark');
    }
    const modeSrc = mode==='dark' ? lightMode : darkMode

    return (
    <div className={'themeContainer'}>
        <img src={modeSrc} alt={"mode"} className={"mode-changer"}
             onClick={toggleMode}/>
        <span className={"theme"} style={{background : 'rgb(105, 8, 185)'}} onClick={() => changeColor('rgb(105, 8, 185)')}></span>
        <span className={"theme"} style={{background : '#1d5c0e'}} onClick={() => changeColor('#1d5c0e')}></span>
        <span className={"theme"} style={{background : 'red'}} onClick={() => changeColor('red')}></span>
    </div>
  )
}
