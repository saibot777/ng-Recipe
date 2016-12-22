import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes, Router  } from '@angular/router';
import { appRoutes } from '../../app.routes';
import { Recipe } from '../recipe';
import { RecipeService } from '../../recipes/recipe.service';
import { Ingredient } from '../../shared/ingredient'
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

@Input() selectedRecipe: Recipe;

private recipeIndex: number = 1;

  constructor(private sls: ShoppingListService,
  	 private router: Router) { }

  ngOnInit() {
  	// add index method later
  }

  onEdit() {
  	this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
  	this.router.navigate(['/recipes']);
  }

  onAddToShoppingList() {
  	this.sls.addItems(this.selectedRecipe.ingredients);
  }

}
