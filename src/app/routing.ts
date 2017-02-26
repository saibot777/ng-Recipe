/**
 * Created by stefan.trajkovic on 26.2.2017..
 */
import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {recipeRoutes} from "./recipes/recipes.routes";

export const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: recipeRoutes},
  { path: 'shopping-list', component: ShoppingListComponent }
];
