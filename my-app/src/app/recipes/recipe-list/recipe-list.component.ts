import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Adobong manac","chicken with soy sauce and vinegar","https://upload.wikimedia.org/wikipedia/commons/3/38/Chicken_adobo.jpg"),
    new Recipe("Sinigang","super kilig","https://th.bing.com/th/id/R.faa347dd003c8058c8d126194d8c90d6?rik=uLzoRo2s8%2bLibQ&riu=http%3a%2f%2fwww.angsarap.net%2fwp-content%2fuploads%2f2014%2f01%2fsinigang-na-baboy-wide.jpg&ehk=pYkg73qwrPyDAM4pGcjk5N5ivhgjUSdfxVoU3r53zkc%3d&risl=&pid=ImgRaw")
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
