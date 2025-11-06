import { Link } from 'react-router-dom';
import "./NavBar.css";
import SearchBar from '../SearchBar/SearchBar.js';
import {useTheme} from "../../hooks/useTheme";


export default function NavBar() {
    const {color} = useTheme()
  return (
    <nav className='main-menu-nav' style={{background : color}}>
        <Link to={"/"} className='main-menu-Link'>
            <h1>Arsam Food</h1>
        </Link>
        <SearchBar/>
        <Link to={"/create"} className='main-menu-Link btn-create'>
            Create Recipe
        </Link>
    </nav>
  )
}
