import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : Recipe;
  @Output() onSelect = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.onSelect.emit(this.recipe);
  }

}
