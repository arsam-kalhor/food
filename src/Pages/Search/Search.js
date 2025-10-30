import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Cards from '../../components/Cards/Cards'

export default function Search() {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')
    const {data , error} = useFetch('http://localhost:3000/recipes?q=' + query)
  return (
    <div>
        <h2 className="page-title">Recipes including "{query}"</h2>
        {error && <p className='error'>{error}</p>}
        {data && <Cards recipes={data}/>}
    </div>
  )
}
