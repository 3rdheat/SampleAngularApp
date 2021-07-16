import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name', {static: true}) vcName: ElementRef;
  @ViewChild('amount', {static: true}) vcAmount: ElementRef;

  @Output() onAddIngredient = new EventEmitter<Ingredient>();
  ingredient: Ingredient;

  constructor() { }

  ngOnInit(): void {
  }

  AddIngredient(){
    this.ingredient = 
    new Ingredient(
      this.vcName.nativeElement.value, 
      this.vcAmount.nativeElement.value
      );

    this.onAddIngredient.emit(this.ingredient);
  }



}
