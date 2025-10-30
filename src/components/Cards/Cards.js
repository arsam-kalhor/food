import { Link } from 'react-router-dom'

import './Cards.css'

export default function Cards({recipes}) {
   
    return (
    <div> 
      <div className='page-container'>
        {recipes.map((data , index) => (
          <div key={index} className='card-container'>
            <h1 className='title'>{data.title}</h1>
            <p>Method: {data.method.substring(0,100)} ...</p>
            <p>Cooktime: {data.cooktime}</p>
            <Link to={`/Recipe/${data.id}`} className='full-recipe'>See Full Recipe</Link>
          </div>
        ))  }
      </div>
    </div>
  
  )
}
