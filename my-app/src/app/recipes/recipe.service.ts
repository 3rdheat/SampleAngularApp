import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipes.model";

@Injectable()
export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
        new Recipe(
          1,
          "Adobong manac",
          "chicken with soy sauce and vinegar",
          "https://upload.wikimedia.org/wikipedia/commons/3/38/Chicken_adobo.jpg",
          [new Ingredient('Onions', 6), new Ingredient('Garlic', 4)]
          ),
        new Recipe(
          2,
          "Sinigang",
          "super kilig",
          "https://th.bing.com/th/id/R.faa347dd003c8058c8d126194d8c90d6?rik=uLzoRo2s8%2bLibQ&riu=http%3a%2f%2fwww.angsarap.net%2fwp-content%2fuploads%2f2014%2f01%2fsinigang-na-baboy-wide.jpg&ehk=pYkg73qwrPyDAM4pGcjk5N5ivhgjUSdfxVoU3r53zkc%3d&risl=&pid=ImgRaw",
          [new Ingredient('Tomatoes', 8), new Ingredient('Siling Green', 10)]
          )
      ];

constructor(private shoppingListService: ShoppingListService){}

Collection(){
    return this.recipes.slice();
}

// Find(id: number)
// {
//     const recipeID = id;
//     this.recipeSelected.emit(this.recipes.find(({id}) => id === recipeID));
// }

Find(id: number) : Recipe
{
    const recipeID = id;
    return this.recipes.find(({id}) => id === recipeID);
     
}


Insert(ingredients: Ingredient[]){
  this.shoppingListService.BulkInsert(ingredients);
}

}