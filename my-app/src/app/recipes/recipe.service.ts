import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipes.model";

export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
        new Recipe("Adobong manac","chicken with soy sauce and vinegar","https://upload.wikimedia.org/wikipedia/commons/3/38/Chicken_adobo.jpg"),
        new Recipe("Sinigang","super kilig","https://th.bing.com/th/id/R.faa347dd003c8058c8d126194d8c90d6?rik=uLzoRo2s8%2bLibQ&riu=http%3a%2f%2fwww.angsarap.net%2fwp-content%2fuploads%2f2014%2f01%2fsinigang-na-baboy-wide.jpg&ehk=pYkg73qwrPyDAM4pGcjk5N5ivhgjUSdfxVoU3r53zkc%3d&risl=&pid=ImgRaw")
      ];

GetRecipes(){
    return this.recipes.slice();
}

GetSelectedRecipe(recipe: Recipe)
{
    const recipeName = recipe.name;
    this.recipeSelected.emit(this.recipes.find(({name}) => name === recipeName));
}

}