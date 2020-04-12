import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientsChanges = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Onion', 1)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanges.emit(this.getIngredients()); 
    }
    
    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
    }
}