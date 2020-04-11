import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
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
