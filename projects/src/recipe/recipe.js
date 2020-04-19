import React, {useEffect, useState, Component} from 'react'
import './recipe.css'


// url : https://developer.edamam.com/admin
const YOUR_APP_ID = '332888f8';
const YOUR_APP_KEY = '3423434324234324434342334234234';

class Recipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      search: '',
      query:'chicken',
    };
  }

  componentDidMount() {
    this.RecipeReq();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query!== this.state.query) {
      this.RecipeReq();
    }
  }

  RecipeReq = async () => {
    console.log(this.state.query);
    const response = await fetch(`https://api.edamam.com/search?q=${this.state.query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
    const data = await response.json();
    console.log(data);
    this.setState({
      recipes:data.hits,
    });
    console.log(this.state.recipes);
  };

  updateSearch = e => {
    this.setState({
      search: e.target.value
    });
  };

  getSearch = e => {
    // To prevent page refresh
    e.preventDefault();
    this.setState({
      query:this.state.search,
      search: ''
    });
  }
  
  
  render() {
    return(
      <div className='container'>
        <form className='search-form'>
          <input className='search-input' type='text' onChange={this.updateSearch} value={this.state.search}></input>
          <button className='search-btn' onClick={this.getSearch}>Search</button>
        </form>
        <div className='recipes'>
          {this.state.recipes.map(recipe => (
            <div className='recipe' key={recipe.recipe.label}>
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
}

export default Recipe;