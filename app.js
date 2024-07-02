



  document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const recipeList = document.getElementById('recipeList');
  
    const recipes = [
      { id: 1, title: 'Spaghetti Carbonara', image: 'carbonara.jpg' },
      { id: 2, title: 'Chicken Alfredo', image: 'alfredo.jpg' },
      { id: 3, title: 'Beef Stroganoff', image: 'stroganoff.jpg' },
      { id: 4, title: 'Tacos', image: 'tacos.jpg' },
      { id: 5, title: 'Salmon Teriyaki', image: 'teriyaki.jpg' },
      { id: 6, title: 'Caesar Salad', image: 'caesar.jpg' },
      { id: 7, title: 'Chicken Curry', image: 'curry.jpg' },
      { id: 8, title: 'Pancakes', image: 'pancakes.jpg' },
      { id: 9, title: 'Miso Soup', image: 'miso.jpg' },
      { id: 10, title: 'Lasagna', image: 'lasagna.jpg' },
      // Add other recipes here...
    ];
  
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = searchInput.value.trim().toLowerCase();
      const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(query));
      displayRecipes(filteredRecipes);
    });
  
    function displayRecipes(recipes) {
      recipeList.innerHTML = recipes.map(recipe => `
        <li>
          <a href="recipe.html?id=${recipe.id}">
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
          </a>
        </li>
      `).join('');
    }
  
    // Load popular recipes on page load
    displayRecipes(recipes);
  });
  