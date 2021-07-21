import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name', {static: true}) vcName: ElementRef;
  @ViewChild('amount', {static: true}) vcAmount: ElementRef;

  // private onAddIngredient = new EventEmitter<Ingredient>();
  // ingredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  AddIngredient(){
    const name = this.vcName.nativeElement.value;
    const amount = this.vcAmount.nativeElement.value;
    this.shoppingListService.Insert(new Ingredient(name, amount));
  }

  // AddIngredient(){
  //   this.ingredient = 
  //   new Ingredient(
  //     this.vcName.nativeElement.value, 
  //     this.vcAmount.nativeElement.value
  //     );

  //   this.onAddIngredient.emit(this.ingredient);
  // }




}
