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

var recipe = new Recipe('Rice With Peanut Butter', 4, ['rice', 'sugar', 'salt', 'peanut butter', 'milk']);
recipe.printRecipe();

//------------------------------------------

//2. book object
class Book {
    constructor(title, author, alreadyRead) {
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
}

var book1 = new Book('The Hobbit','J.R.R. Tolkien', false);
var book2 = new Book('The Fellowship of the Ring','J.R.R. Tolkien', true);
var book3 = new Book('The Quantum Thief','Hannu Rajaniemi', true);
var book4 = new Book('Americanah','Chimamanda Ngozi Adichie', false);
var book5 = new Book('The Old Drift','Namwali Serpell', false);

var books = [book1, book2, book3, book4, book5];

books.forEach(book => {
    console.log(book.title + ' by ' + book.author);
});

console.log('-----------------------------');

books.forEach(book => {
    if (book.alreadyRead == true) {
        console.log('You already read "' + book.title + '" by ' + book.author);
    } else {
        console.log('You still need to read "' + book.title + '" by ' + book.author);
    }
});