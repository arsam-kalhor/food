import NavBar from "./components/NavBar/NavBar.js";
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import Create from './Pages/Create/Create.js';
import Recipe from './Pages/Recipe/Recipe.js';
import Search from './Pages/Search/Search.js';
import ThemeSelector from "./components/ThemeSelector/ThemeSelector";
import {useTheme} from "./hooks/useTheme";
import './App.css';

export default function App() {
  const {mode} = useTheme();
  return (
      <div className={`App ${mode}`}>
    <BrowserRouter>
     <NavBar/>
      <ThemeSelector/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Create" element={<Create/>}/>
      <Route path="/Recipe/:id" element={<Recipe/>}/>
      <Route path="/Search" element={<Search/>}/>
    </Routes>
    </BrowserRouter>
      </div>
  )
}
