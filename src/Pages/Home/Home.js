import Cards from '../../components/Cards/Cards.js'
import useFetch from '../../hooks/useFetch'
import {useTheme} from "../../hooks/useTheme";
import './Home.css';
export default function Home() {
    const {data , error} = useFetch("https://food-api-dx0q.onrender.com/recipes")
    const {mode} = useTheme()
  return(
    <div>
      <h2 className={`welcome ${mode}`}>Welcome to Arsam Food</h2>
      {error && <p>error</p>}
      {data&& <Cards recipes={data}/>}
    </div>
  )
}
