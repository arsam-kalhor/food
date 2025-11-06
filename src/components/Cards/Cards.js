import { Link } from 'react-router-dom'

import './Cards.css'
import {useTheme} from "../../hooks/useTheme";

export default function Cards({recipes}) {
   const {color , mode} = useTheme()
    return (
    <div>
      <div className={`page-container`}>
        {recipes.map((data , index) => (
          <div key={index} className={`card-container  ${mode}`} style={{borderColor : color}}>
            <h1 className='title'>{data.title}</h1>
            <p>Method: {data.method.substring(0,100)} ...</p>
            <p>Cooktime: {data.cooktime}</p>
            <Link to={`/Recipe/${data.id}`} className='full-recipe' style={{background : color}}>See Full Recipe</Link>
          </div>
        ))  }
      </div>
    </div>

  )
}
