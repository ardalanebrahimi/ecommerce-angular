import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() onSelectedChanged = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe(
      'A test Recipe', 
      'This is simply a test',
      'http://www.fnstatic.co.uk/images/content/recipe/one-pot-pan-seared-chicken-breasts-with-cherry-tomatoes-and-white-beans.jpg'),
      new Recipe(
        'A Salad Recipe', 
        'This is how Salad Looks Like!',
        'https://images.ctfassets.net/wy4h2xf1swlt/asset_46598/f2455ca23438ddf1d0c003ed432c9792/P4111233-copy.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

  onListClick(recipe : Recipe){
    this.onSelectedChanged.emit(recipe);
  }

}
