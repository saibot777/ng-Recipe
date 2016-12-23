import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from "../shared/ingredient"


@Injectable()
export class RecipeService {
private	recipes: Recipe[] = [
    new Recipe('Bloody Steak', 'Very tasty', 'http://3.bp.blogspot.com/-opOQmY_OCr4/UT4T6vpZtXI/AAAAAAAABss/9RgEPIoOiTQ/s1600/7doev.jpg', [
    	new Ingredient('French Fries', 2),
    	new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg', [])
  ];

  constructor() { }

  getRecipes() {
  	return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
