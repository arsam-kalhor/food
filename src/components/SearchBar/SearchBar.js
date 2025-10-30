import { useState } from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
    const navigate = useNavigate();
    const [term , setTerm] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`/search?q=${term}`)
        setTerm('')
    }
  return (
    <div className='searchbar'>
        <form onSubmit={handleSubmit}>
        <label htmlFor='search' id='search-label'>Search:</label>
        <input 
        id='search'
        type='text'
        onChange={
            (event) =>{
                setTerm(event.target.value)
            }
        }/>
        </form>
    </div>
  )
}
