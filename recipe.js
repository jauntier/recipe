


document.addEventListener("DOMContentLoaded", () => {
  const recipeTitle = document.getElementById('recipeTitle');
  const recipeImage = document.getElementById('recipeImage');
  const recipeIngredients = document.getElementById('recipeIngredients');
  const recipeInstructions = document.getElementById('recipeInstructions');
  const saveRecipeBtn = document.getElementById('saveRecipeBtn');

  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get('id');

  async function fetchRecipe(id) {
    const recipeData = {
      1: {
        title: 'Spaghetti Carbonara',
        image: 'carbonara.jpg',
        ingredients: '200g spaghetti, 100g pancetta, 2 large eggs, 50g pecorino cheese, 50g parmesan, 2 cloves of garlic, Salt and black pepper, Fresh parsley',
        instructions: '1. Cook the spaghetti. 2. Fry the pancetta with garlic. 3. Beat the eggs and mix with cheese. 4. Combine spaghetti, pancetta, and egg mixture. 5. Serve with parsley.'
      },
      2: {
        title: 'Chicken Alfredo',
        image: 'alfredo.jpg',
        ingredients: '400g fettuccine, 200g chicken breast, 2 cups heavy cream, 1/2 cup butter, 1 cup parmesan cheese, 2 cloves garlic, Salt and pepper',
        instructions: '1. Cook the fettuccine. 2. Cook the chicken. 3. Make the sauce with butter, cream, and garlic. 4. Add chicken and pasta to the sauce. 5. Mix in the cheese and season.'
      },
      3: {
        title: 'Beef Stroganoff',
        image: 'stroganoff.jpg',
        ingredients: '500g beef sirloin, 1 onion, 2 cloves garlic, 1 cup sour cream, 1/2 cup beef broth, 1/2 cup mushrooms, 2 tbsp flour, 2 tbsp butter, Salt and pepper',
        instructions: '1. Cook the beef. 2. Sauté onions and mushrooms. 3. Add garlic and flour. 4. Stir in broth and simmer. 5. Mix in sour cream and beef.'
      },
      4: {
        title: 'Tacos',
        image: 'tacos.jpg',
        ingredients: '300g ground beef, 1 onion, 1 bell pepper, 1 cup salsa, 1 cup shredded lettuce, 1 cup shredded cheese, 8 taco shells, 1 tbsp taco seasoning',
        instructions: '1. Cook ground beef with onion and bell pepper. 2. Add taco seasoning and salsa. 3. Heat taco shells. 4. Fill shells with meat mixture, lettuce, and cheese.'
      },
      5: {
        title: 'Salmon Teriyaki',
        image: 'teriyaki.jpg',
        ingredients: '4 salmon fillets, 1/2 cup soy sauce, 1/4 cup mirin, 2 tbsp sugar, 1 clove garlic, 1 tsp grated ginger, 2 tbsp vegetable oil',
        instructions: '1. Mix soy sauce, mirin, sugar, garlic, and ginger. 2. Marinate salmon in sauce. 3. Heat oil in a pan and cook salmon. 4. Serve with rice and vegetables.'
      },
      6: {
        title: 'Caesar Salad',
        image: 'caesar.jpg',
        ingredients: '1 head romaine lettuce, 1/2 cup croutons, 1/4 cup grated parmesan cheese, 1/4 cup Caesar dressing, Salt and pepper',
        instructions: '1. Tear lettuce into bite-sized pieces. 2. Add croutons and parmesan cheese. 3. Toss with Caesar dressing. 4. Season with salt and pepper.'
      },
      7: {
        title: 'Chicken Curry',
        image: 'curry.jpg',
        ingredients: '500g chicken thighs, 1 onion, 2 cloves garlic, 1 can coconut milk, 2 tbsp curry powder, 1 tbsp vegetable oil, Salt and pepper',
        instructions: '1. Sauté onion and garlic in oil. 2. Add curry powder and cook until fragrant. 3. Add chicken and brown. 4. Pour in coconut milk and simmer until chicken is cooked.'
      },
      8: {
        title: 'Pancakes',
        image: 'pancakes.jpg',
        ingredients: '1 cup all-purpose flour, 1 tbsp sugar, 1 tsp baking powder, 1/2 tsp baking soda, 1/4 tsp salt, 1 cup buttermilk, 1 egg, 2 tbsp butter',
        instructions: '1. Mix dry ingredients in a bowl. 2. In another bowl, whisk buttermilk, egg, and melted butter. 3. Combine wet and dry ingredients. 4. Cook on a hot griddle.'
      },
      9: {
        title: 'Miso Soup',
        image: 'miso.jpg',
        ingredients: '4 cups dashi stock, 3 tbsp miso paste, 1 block tofu, 2 tbsp chopped green onions, 1 sheet nori seaweed',
        instructions: '1. Bring dashi stock to a simmer. 2. Dissolve miso paste in some stock. 3. Add tofu cubes and simmer. 4. Serve garnished with green onions and nori.'
      },
      10: {
        title: 'Lasagna',
        image: 'lasagna.jpg',
        ingredients: '1/2 lb lasagna noodles, 1 lb ground beef, 1 onion, 2 cloves garlic, 2 cups marinara sauce, 2 cups ricotta cheese, 2 cups shredded mozzarella cheese, 1/2 cup grated parmesan cheese, Salt and pepper',
        instructions: '1. Cook lasagna noodles. 2. Brown ground beef with onion and garlic. 3. Layer noodles, meat sauce, ricotta, and mozzarella. 4. Bake until bubbly and golden.'
      },
      // Add more recipes here...
    };
    return recipeData[id];
  }

  async function loadRecipe() {
    const recipe = await fetchRecipe(recipeId);
    recipeTitle.textContent = recipe.title;
    recipeImage.src = recipe.image;
    recipeIngredients.textContent = recipe.ingredients;
    recipeInstructions.textContent = recipe.instructions;
  }

  saveRecipeBtn.addEventListener('click', () => {
    saveRecipe(recipeId);
  });

  function saveRecipe(id) {
    let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    if (!savedRecipes.includes(id)) {
      savedRecipes.push(id);
      localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
      alert('Recipe saved!');
    } else {
      alert('Recipe already saved!');
    }
  }

  loadRecipe();
});

