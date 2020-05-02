import { Ingredient } from '../shared/ingredient.model';
import {Subject } from 'rxjs'

export class ShoppingListService{
    ingredientsChanges = new Subject<Ingredient[]>();
    startEditIngredient = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Onion', 1)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index: number): Ingredient {
      return this.ingredients[index];
    }

    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanges.next(this.getIngredients()); 
    }
    
    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanges.next(this.getIngredients()); 
    }

    updateIngredient(ingredientIndex: number, editedIngredient: Ingredient) {
        this.ingredients[ingredientIndex] = editedIngredient;
        this.ingredientsChanges.next(this.ingredients.slice());
      }

    deleteIngredient(ingredientIndex: number) {
        this.ingredients.splice(ingredientIndex, 1);        
        this.ingredientsChanges.next(this.ingredients.slice());
    }       
}