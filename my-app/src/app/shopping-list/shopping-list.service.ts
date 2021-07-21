import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    
    ingredients: Ingredient [] = [];
    onChangeIng = new EventEmitter<Ingredient[]>();


    Collection(){
        return this.ingredients.slice();
    }

    Insert(value: Ingredient){
        this.ingredients.push(value)
        this.onChangeIng.emit(this.ingredients.slice());
    }


}