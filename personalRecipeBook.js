






  document.addEventListener("DOMContentLoaded", () => {
    const personalRecipeList = document.getElementById('personalRecipeList');
  
    async function fetchSavedRecipes() {
      const savedRecipeIds = JSON.parse(localStorage.getItem('savedRecipes')) || [];
      const recipes = await Promise.all(savedRecipeIds.map(id => fetchRecipe(id)));
      return recipes;
    }
  
    async function fetchRecipe(id) {
      const recipeData = {
        1: { title: 'Spaghetti Carbonara', image: 'carbonara.jpg' },
        2: { title: 'Chicken Alfredo', image: 'alfredo.jpg' },
        3: { title: 'Beef Stroganoff', image: 'stroganoff.jpg' },
        4: { title: 'Tacos', image: 'tacos.jpg' },
        5: { title: 'Salmon Teriyaki', image: 'teriyaki.jpg' },
        6: { title: 'Caesar Salad', image: 'caesar.jpg' },
        7: { title: 'Chicken Curry', image: 'curry.jpg' },
        8: { title: 'Pancakes', image: 'pancakes.jpg' },
        9: { title: 'Miso Soup', image: 'miso.jpg' },
        10: { title: 'Lasagna', image: 'lasagna.jpg' },
        // Add other recipes here...
      };
      return {
        id: id,
        title: recipeData[id].title,
        image: recipeData[id].image
      };
    }
  
    async function loadSavedRecipes() {
      const recipes = await fetchSavedRecipes();
      personalRecipeList.innerHTML = recipes.map(recipe => `
        <li>
          <a href="recipe.html?id=${recipe.id}">
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
          </a>
        </li>
      `).join('');
    }
  
    loadSavedRecipes();
  });
  

