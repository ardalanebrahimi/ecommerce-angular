import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService : ShoppingListService){}
    
    private recipes : Recipe[] = [
    new Recipe(
      'A test Recipe', 
      'This is simply a test',
      'http://www.fnstatic.co.uk/images/content/recipe/one-pot-pan-seared-chicken-breasts-with-cherry-tomatoes-and-white-beans.jpg',
      [
          new Ingredient("Bean", 1),
          new Ingredient("Vegi", 1)
      ]),
      new Recipe(
        'A Salad Recipe', 
        'This is how Salad Looks Like!',
        'https://images.ctfassets.net/wy4h2xf1swlt/asset_46598/f2455ca23438ddf1d0c003ed432c9792/P4111233-copy.jpg',
        [
            new Ingredient("cucumber", 2),
            new Ingredient("tomato", 2)
        ]),
  ];

  getRecipes(){
      return this.recipes.slice();
  }
  
  addIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}