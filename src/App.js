import NavBar from "./components/NavBar/NavBar.js";
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import Create from './Pages/Create/Create.js';
import Recipe from './Pages/Recipe/Recipe.js';
import Search from './Pages/Search/Search.js';



export default function App() {
  return (
    <BrowserRouter>
     <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Create" element={<Create/>}/>
      <Route path="/Recipe/:id" element={<Recipe/>}/>
      <Route path="/Search" element={<Search/>}/>
    </Routes>
    </BrowserRouter>
  )
}
