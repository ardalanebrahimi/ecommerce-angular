import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeForm : FormGroup;
  id : number;
  editMode = false;

  constructor(
    private route : ActivatedRoute, 
    private recipeService : RecipeService,
    private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params : Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm()
      }
    )
  }

  initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipeByIndex(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push( new FormGroup({
            'name' : new FormControl(ingredient.name, Validators.required), 
            'amount' : new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[1-9]*$/)
            ])
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName, Validators.required),
      'imagePath' : new FormControl(recipeImagePath, Validators.required),
      'description' : new FormControl(recipeDescription, Validators.required),
      'ingredients' : recipeIngredients
    })
  }
  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name' : new FormControl(name, Validators.required),
      'amount' :  new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[1-9]*$/)
      ])
    }));
  }

  onSubmit(){
    const recipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients'] 
    );
    if(this.editMode){
      this.recipeService.updateRecipe(this.id, recipe);
    } else {
      this.recipeService.saveRecipe(recipe);
    }
    this.router.navigate(['../'], {relativeTo : this.route});
  }
  onCancel(){
    this.router.navigate(['../'], {relativeTo : this.route});    
  }
  onDeleteIngredient(index : number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
