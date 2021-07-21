import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeDtls: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  AddToShoppingList(){
    this.recipeService.Insert(this.recipeDtls.ingredients)
  }

}
