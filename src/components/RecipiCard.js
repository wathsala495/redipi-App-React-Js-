import React from 'react'

const RecipiCard = ({recipe}) => {

    const {idMeal,strMeal,strCategory,strMealThumb}=recipe

  return (
    <div className='card'> 
        {/* {console.log(props.recipe.strMeal)}
      <h1>{props.recipe.strMeal}</h1> */}
      {console.log(idMeal)}
     <img
          src={strMealThumb}
            alt={strMeal}
            className='card-image'
     />
          <div className='card-body'>
            <span className='category'>{strCategory}</span>
            <h3>{strMeal}</h3>
            <a href={"https://www.themealdb.com/meal/" + idMeal } target='_blank'>Ingrediants</a>
          </div>
    </div>
  )
}

export default RecipiCard
