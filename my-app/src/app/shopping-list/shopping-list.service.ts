import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    
    onChangeIng = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient [] = [];

    Collection(){
        return this.ingredients.slice();
    }

    Insert(value: Ingredient){
        this.ingredients.push(value)
        this.onChangeIng.emit(this.ingredients.slice());
    }

    BulkInsert(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.onChangeIng.emit(this.ingredients.slice());
    }

}