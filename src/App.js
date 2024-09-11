import logo from './logo.svg';
import './App.css';
import RecipiCard from './components/RecipiCard'
import SearchBar from './components/SearchBar'
import { useEffect, useState } from 'react';

const apiURL="https://www.themealdb.com/api/json/v1/1/search.php?s="

function App() {

  const [isLoadingata,setIsloading]=useState(false)
  const [query,setQuery]=useState("")
  const [recipes,setRecipes] =useState([]);
  
  //function to search for the recipe

  const searchRecipes = async ()=>{
    setIsloading(true);
    const url=apiURL+query
    const res = await fetch(url)
    const data = await res.json();
    console.log(data)
    setRecipes(data.meals);
    setIsloading(false);
    }

    useEffect(()=>{
      searchRecipes()
    },[])

   const handleSubmit=(event)=>{
    event.preventDefault()
    setRecipes()
   } 


  return (
    <div className="container">

      <h2>Our Recipi App</h2>
      <SearchBar handleSubmit={handleSubmit}
      value={query}
      onChange={event=>setQuery(event.target.value)}
     isLoadingata={isLoadingata}
      
      />
      <div className='recipes'
    >
        { recipes? recipes.map((recipe)=>{
      return(
        <RecipiCard key={recipe.idMeal} recipe={recipe}/>
      )
      }):"No Recipi!"}

      </div>
    </div>
  );
}

export default App;
