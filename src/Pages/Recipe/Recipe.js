import './Recipe.css';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

export default function Recipe() {
  const {id} = useParams();
  const {data : recipe} = useFetch(`http://localhost:3000/recipes/${id}`);

  return (
    <div className='container'>
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
        <p className='information'>Cooktime:     {recipe.cooktime}</p>
      </div>
      )}
      </div>
    
  )
}
