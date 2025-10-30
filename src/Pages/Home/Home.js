import Cards from '../../components/Cards/Cards.js'
import useFetch from '../../hooks/useFetch'

export default function Home() {
     const {data , error} = useFetch("https://food-api-dx0q.onrender.com/recipes")

  return (
    <div>
      <h2>Welcome to Arsam Food</h2>
      {error && <p>error</p>}
      {data&& <Cards recipes={data}/>}
    </div>
  )
}
