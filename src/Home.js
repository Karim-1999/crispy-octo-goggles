import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [input, setInput] = useState("")
    const [meal, setMeal] = useState([])

    const handleInput = (e) => {
        const value = e.target.value 
        setInput(value)
    }

    const search = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        const json = await res.json()
        setMeal([...json.meals])
    }

    const navigate = useNavigate()


    return (
      <>
      <div className='mar'>
          
          <input placeholder='cerca piatto' value={input} onChange={handleInput} /> 
          <button onClick={search}>cerca </button>
            </div>
            <div>
                

                {meal.map(dish => <a className='mar' onClick={()=> navigate(`/mealdetails/${dish.idMeal}`)} >  {dish.strMeal}</a>) }
        </div>
        
        </>
  )
}

export default Home