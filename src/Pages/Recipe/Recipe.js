import './Recipe.css';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import {useTheme} from "../../hooks/useTheme";

export default function Recipe() {
  const {id} = useParams();
  const {data : recipe} = useFetch(`https://food-api-dx0q.onrender.com/recipes/${id}`);
  const {mode} = useTheme();
  return (

      <div className={`recipe-page-container ${mode}`}>
        <div className={`container ${mode}`}>
          {recipe &&(
           <div>
            <h1>{recipe.title}</h1>
              <br/>
              <p>Ingredients:   </p>
            <ul className='ingredients-container'>{recipe.ingredients?.map(ing => (
              <li className='ingredients' >{ing}</li>
            ))}</ul>
            <br/>
            <p className='information'>Method:   {recipe.method}</p>
            <br/>
            <p className='information'>CookTime:     {recipe.cooktime}</p>
          </div>
          )}
        </div>
        </div>
  )
}
