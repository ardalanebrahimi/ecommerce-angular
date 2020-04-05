import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Onion', 1)
  ]
  constructor() { }

  ngOnInit() {
  }

}
