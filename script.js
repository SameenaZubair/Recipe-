const searchBox =  document.querySelector('#searchBox');
const searchBtn = document.querySelector('#searchBtn');
const recipesContainer = document.querySelector('.recipes-container');

//Function to get recipes
const fetchRecipes = async (query) => {
   const  data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
   const response = await data.json()

   response.meals.forEach(meal => {
   const recipeDiv = document.createElement('div');
   recipeDiv.classList.add('recipe');
   recipeDiv.innerHTML = `
    <img src =${meal.strMealThumb}>
    <h3>${meal.strMeal}</h3>
    <p>${meal.strArea}</p>
    <p>${meal.strCategory}</p>

    `

   recipesContainer.appendChild(recipeDiv);
   })
   //console.log(response.meals[0]);//
}



searchBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);   //function ko call kara diya hai
});