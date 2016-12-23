import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute  } from '@angular/router';
import { appRoutes } from '../../app.routes';
import { Recipe } from '../recipe';
import { RecipeService } from '../../recipes/recipe.service';
import { Ingredient } from '../../shared/ingredient'
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

selectedRecipe: Recipe;

private recipeIndex: number;
private subscription: Subscription;

  constructor(private sls: ShoppingListService,
  	          private router: Router, 
              private route: ActivatedRoute,
              private recipesService: RecipeService) { }

  ngOnInit() {
  	 this.subscription = this.route.params.subscribe(
       (params: any) => {
         this.recipeIndex = params['id'];
         this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
       }
     );
  }

  onEdit() {
  	this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
    this.recipesService.deleteRecipe(this.selectedRecipe);
  	this.router.navigate(['/recipes']);
  }

  onAddToShoppingList() {
  	this.sls.addItems(this.selectedRecipe.ingredients);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
