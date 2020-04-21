import { Ingredient } from '../shared/ingredient.model';
import {Subject } from 'rxjs'

export class ShoppingListService{
    ingredientsChanges = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Onion', 1)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanges.next(this.getIngredients()); 
    }
    
    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanges.next(this.getIngredients()); 
    }
}