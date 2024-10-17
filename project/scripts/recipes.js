const pineappleRecipes = [
    {
        name: "Grilled Pineapple Slices",
        ingredients: [
            "1 fresh pineapple, peeled and cored",
            "2 tablespoons honey",
            "1 tablespoon lime juice",
            "1 teaspoon cinnamon"
        ],
        instructions: [
            "Slice the pineapple into rings or wedges.",
            "Mix honey, lime juice, and cinnamon in a bowl.",
            "Brush the mixture over the pineapple slices.",
            "Grill the pineapple slices for 2-3 minutes on each side until grill marks appear.",
            "Serve warm or with a scoop of vanilla ice cream."
        ]
    },
    {
        name: "Pineapple Salsa",
        ingredients: [
            "1 cup diced pineapple",
            "1/2 red onion, finely chopped",
            "1 jalapeño, seeded and chopped",
            "1/4 cup cilantro, chopped",
            "Juice of 1 lime",
            "Salt to taste"
        ],
        instructions: [
            "Combine all the ingredients in a mixing bowl.",
            "Toss well to combine and adjust salt to taste.",
            "Chill for at least 30 minutes before serving for the best flavor.",
            "Serve with tortilla chips or as a topping for grilled chicken or fish."
        ]
    },
    {
        name: "Pineapple Smoothie",
        ingredients: [
            "1 cup fresh pineapple chunks",
            "1 banana",
            "1/2 cup Greek yogurt",
            "1/2 cup coconut milk",
            "1 tablespoon honey (optional)"
        ],
        instructions: [
            "Add all ingredients to a blender.",
            "Blend on high until smooth and creamy.",
            "Taste and add honey if additional sweetness is desired.",
            "Pour into a glass and enjoy immediately."
        ]
    }
];

// this will be code to make cards for each recipe

function createRecipeCard(recipes) {
    recipes.forEach(recipe => {
        const recipeContainer = document.querySelector(".recipe-container");
        const card = document.createElement("div");
        card.classList.add("recipe-card");

        const title = document.createElement("h3");
        title.textContent = recipe.name;

        const ingredientsList = document.createElement("ul");
        recipe.ingredients.forEach(ingredient => {
            const item = document.createElement("li");
            item.textContent = ingredient;
            ingredientsList.appendChild(item);
        });

        const instructionsList = document.createElement("ol");
        recipe.instructions.forEach(instruction => {
            const item = document.createElement("li");
            item.textContent = instruction;
            instructionsList.appendChild(item);
        });

        card.appendChild(title);
        card.appendChild(ingredientsList);
        card.appendChild(instructionsList);

        recipeContainer.appendChild(card);
    });
}

createRecipeCard(pineappleRecipes);

