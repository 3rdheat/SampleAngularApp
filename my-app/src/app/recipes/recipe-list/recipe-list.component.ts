import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 
  selectedRecipe: Recipe;
  recipes: Recipe[];


  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.GetRecipes();
  }

  // GetRecipeDetails(value: Recipe){
  //   this.onRetrieve.emit(value);
  //   this.recipeService.GetRecipeDtls(value.name);
  //  }

}
