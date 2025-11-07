import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Cards from '../../components/Cards/Cards'
import {useTheme} from "../../hooks/useTheme";
import './Search.css'

export default function Search() {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')
    const {data , error} = useFetch('https://food-api-dx0q.onrender.com/recipes?q=' + query)
    const {mode} = useTheme()
  return (
    <div className={`search-container ${mode}`}>
        <h2 className={`page-title ${mode}`}>Recipes including "{query}"</h2>
        {error && <p className='error'>{error}</p>}
        {data && <Cards recipes={data}/>}
    </div>
  )
}
