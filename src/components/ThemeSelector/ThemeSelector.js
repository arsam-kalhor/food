import React from 'react'
import {useTheme} from "../../hooks/useTheme";
import './ThemeSelector.css'

export default function ThemeSelector() {
  const {changeColor} = useTheme()
  return (
    <div className={'themeContainer'}>
        <span className={"theme"} style={{background : 'rgb(105, 8, 185)'}} onClick={() => changeColor('rgb(105, 8, 185)')}></span>
        <span className={"theme"} style={{background : '#1d5c0e'}} onClick={() => changeColor('#1d5c0e')}></span>
        <span className={"theme"} style={{background : 'red'}} onClick={() => changeColor('red')}></span>
    </div>
  )
}
