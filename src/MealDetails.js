import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MealDetails = () => {

    const [meal, setMeal] = useState({})
    
    const { id } = useParams("id")
    
    const getData = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const json = await res.json()
        setMeal({...json.meals[0]})
        
    }

    useEffect(() => {
        getData()
    },[]

    )




  return (
      <div className='mar'>
          <h2> {meal.strMeal}</h2>
          <img src={meal.strMealThumb} width="300px" /> 
          <p> { meal.strInstructions}</p>
          <h2> nazionalita:  { meal.strArea}</h2>
          



    </div>
  )
}

export default MealDetails