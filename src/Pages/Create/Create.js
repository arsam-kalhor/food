import { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch' 
import { Navigate } from 'react-router-dom';

import './Create.css'
export default function Create() {
  const [title , setTitle] = useState('')
  const [cookingTime , setCookingTime] = useState('')
  const [method , setMethod] = useState('')
  const [ing , setIng] = useState('')
  const [list , setList] = useState([])
  const [id , setID] = useState('')
  const [mainPage , setMainPage] = useState(false)

  const {data} = useFetch("https://food-api-dx0q.onrender.com/recipes");



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
    <div className='form-container'>
      <h2 className="page-title">Create New Recipe</h2>
    <form >

      <div>
        <label>
        <span className="labels">
        Title:&nbsp;
        </span>
        <input type="text" onChange={ (event) => {

          setTitle(event.target.value)}}
           value={title}
           required
          className="title"
          
        />
      </label>
      </div>
      
      <div>
        <label>
        <span className="labels">
        ingredients:&nbsp;
        </span>
        <input type="text" onChange={ (event) => {
          setIng(event.target.value)}}
           value={ing}
           onKeyDown={(event) => {if(event.key === 'Enter'){
            event.preventDefault();
            buttonHandeler();
           } 
          }
        }
          className="title"
        />
      </label>
      </div>

      <p className='temp-ing'>{list.join(' , ')}</p>


      <button className="add" onClick={buttonHandeler} type='button'>Add</button>

      <div className="method">
      <label>
        <span className="labels method">
        Method:&nbsp;
        </span>
        <textarea onChange={ (event) => {
          setMethod(event.target.value)}}
           value={method}
           required
        />
      </label>
      </div>

      <div className="cooking-time">
      <label>
        <span className="labels">
        Cooking Time:&nbsp;
        </span>
        <input type="number" onChange={ (event) => {
          setCookingTime(event.target.value)}}
           value={cookingTime}
           required
        />
      </label>
      </div>
      <button className='submit' onClick= {handleSubmit} type='button'>Submit</button>
    </form>
      {mainPage && (<Navigate to={'/'} replace/>)}
    </div>
  )
}
