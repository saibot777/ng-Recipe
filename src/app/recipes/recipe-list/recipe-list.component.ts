import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'https://s-media-cache-ak0.pinimg.com/originals/21/20/39/2120396bc0021050b79169cb873c533c.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  ngOnInit() {
  }

}
