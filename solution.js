//1. recipe object 
class Recipe {
    constructor(title, servings, ingredients) {
        this.title = title;
        this.servings = servings;
        this.ingredients = ingredients;
        this.printRecipe = function () {
            console.log(this.title);
            console.log('Serves: ' + this.servings);
            console.log('Ingredients:');
            for (var i = 0; i < ingredients.length; i++) {
                console.log(i + 1 + '. ' + ingredients[i]);
            }
        };
    }
}

var recipe = new Recipe('Rice With Peanut Butter', 4, ['rice', 'sugar', 'salt', 'peanut butter', 'milk'] );
recipe.printRecipe();

//------------------------------------------
//2. book object
function name(params) {
    
}