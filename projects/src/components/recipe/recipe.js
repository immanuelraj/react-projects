import React, {useEffect, useState} from 'react'
import './recipe.css'


const Recipe = () => {

  const [recipes, setrecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
      RecipeReq();
  }, [query]);

  // url : https://developer.edamam.com/admin
  const YOUR_APP_ID = '332888f8'
  const YOUR_APP_KEY = '61051eaf0e7befedd94bcf0f13647086'

  // const RecipeReq = () => {
  //     fetch(`https://api.edamam.com/search?q=${}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`).then(
  //         response => {
  //             const data response.json();
  //             setrecipes(data.hits);
  //         }
  //     )
  // }

  const RecipeReq = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
    const data = await response.json();
    setrecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    // To prevent page refresh
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className='container'>
      <form className='search-form'>
        <input className='search-input' type='text' onChange={updateSearch} value={search}></input>
        <button className='search-btn' onClick={getSearch}>Search</button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <div className='recipe'>
            <h2 className='title'>{recipe.recipe.label}</h2>
            <p className='calories'><span>Calories: </span>{recipe.recipe.calories}</p>
            <img className='image' src={recipe.recipe.image} alt=''/>
            {/* <ol>
              {recipe.recipe.ingredients.map(ingredient => (
                <li>
                    <p>{ingredient.text}</p>
                </li>
              ))}
            </ol> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recipe 