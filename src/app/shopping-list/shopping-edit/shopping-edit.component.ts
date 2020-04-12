import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static : true} ) nameInput : ElementRef;
  @ViewChild('amountInput', {static : true} ) amountInput : ElementRef;
  @Output() onNewIngredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(){
    this.onNewIngredientAdded
    .emit(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));
  }

}
