import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form', {static : true}) submitForm : NgForm;
  ingredientIndex : number;
  editMode : boolean;
  subscription : Subscription;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {

    this.subscription = this.shoppingListService.startEditIngredient.subscribe(
      (index : number) => {
        this.ingredientIndex = index;
        const editedIngredient : Ingredient = this.shoppingListService.getIngredient(this.ingredientIndex);
        this.editMode = true;
        this.submitForm.setValue({
          'name' : editedIngredient.name,
          'amount' : editedIngredient.amount
        });
      }
    )
  }

  onAddIngredient(){
    const newIngredient = new Ingredient(
      this.submitForm.value.name,this.submitForm.value.amount);
    if(!this.editMode){
      this.shoppingListService.addIngredient(newIngredient);  
    } else {
      this.shoppingListService.updateIngredient(this.ingredientIndex, newIngredient);
    }
    this.submitForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onClear(){  
    this.submitForm.reset();
    this.editMode = false;
  }

  onDelete(){
    if(this.editMode && confirm('Are you Sure you want to delet the Ingredient?') == true){
      const deltedIngredient = new Ingredient(
        this.submitForm.value.name,this.submitForm.value.amount);
      this.shoppingListService.deleteIngredient(this.ingredientIndex);
      this.submitForm.reset();
      this.editMode = false;
    }
  }
}