import { Link } from 'react-router-dom';
import "./NavBar.css";
import SearchBar from '../SearchBar/SearchBar.js';

export default function NavBar() {
  return (
    <nav className='main-menu-nav'>
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
