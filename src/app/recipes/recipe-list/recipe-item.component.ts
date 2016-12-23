import { Component, Input } from '@angular/core';
import { RouterModule, Routes, Router  } from '@angular/router';
import { appRoutes } from '../../app.routes';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {

	@Input() recipe: Recipe;
	@Input() recipeId: number;

}
