import { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch' 
import { Navigate } from 'react-router-dom';

import './Create.css'
import {useTheme} from "../../hooks/useTheme";
export default function Create() {
  const [title , setTitle] = useState('')
  const [cookingTime , setCookingTime] = useState('')
  const [method , setMethod] = useState('')
  const [ing , setIng] = useState('')
  const [list , setList] = useState([])
  const [id , setID] = useState('')
  const [mainPage , setMainPage] = useState(false)

  const {data} = useFetch("https://food-api-dx0q.onrender.com/recipes");
  const {mode , color} = useTheme();


   useEffect(() => {
    if (data && data.length > 0) {
      const last = data[data.length - 1] 
      const newId = (parseInt(last.id) + 1).toString()
      setID(newId)
    } else {
      setID('1') 
    }
  }, [data])


const handleSubmit = (event) => {
  if(list.length !== 0){
    event.preventDefault()

    const recipe = {
      id,
      title,
      ingredients: list,
      method,
      cooktime: `${cookingTime} min`
    }

    postData(recipe)

    // setTitle('')
    // setMethod('')
    // setCookingTime('')
    // setList([])
    //  setIng('')
    setMainPage(true);
  }

}
  function buttonHandeler(){
    setIng('');
    setList( [...new Set([...list , ing])])
    
  }

   const {postData} = useFetch("https://food-api-dx0q.onrender.com/recipes" , 'POST');
  return (
    <div className={`form-container ${mode}`}>
      <h2 className="page-title" style={{marginLeft : '10px'}}>Create New Recipe</h2>
    <form >

      <div>
        <label>
        <span className="labels">
        Title:&nbsp;
        </span>
        <input style={{borderColor: color}} className={`title ${mode}`} type="text" onChange={ (event) => {

          setTitle(event.target.value)}}
           value={title}
           required
        />
      </label>
      </div>
      
      <div>
        <label>
        <span className="labels">
        ingredients:&nbsp;
        </span>
        <input style={{borderColor: color}} className={`title ${mode}`} type="text" onChange={ (event) => {
          setIng(event.target.value)}}
           value={ing}
           onKeyDown={(event) => {if(event.key === 'Enter'){
            event.preventDefault();
            buttonHandeler();
           } 
          }
        }
        />
      </label>
      </div>

      <p className='temp-ing'>{list.join(' , ')}</p>


      <button className={`add ${mode}`}  onClick={buttonHandeler} type='button' style={{borderColor: color}}>Add</button>

      <div className="method">
      <label>
        <span className="labels method">
        Method:&nbsp;
        </span>
        <textarea onChange={ (event) => {
          setMethod(event.target.value)}}
           value={method}
           required
           className={`${mode}`}
            style={{borderColor: color}}
        />
      </label>
      </div>

      <div className="cooking-time">
      <label>
        <span className="labels">
        Cooking Time:&nbsp;
        </span>
        <input style={{borderColor: color}} className={`${mode}`} type="number" onChange={ (event) => {
          setCookingTime(event.target.value)}}
           value={cookingTime}
           required
        />
      </label>
      </div>
      <button className={`submit ${mode}`} onClick= {handleSubmit} type='button' style={{borderColor: color}}>Submit</button>
    </form>
      {mainPage && (<Navigate to={'/'} replace/>)}
    </div>
  )
}
