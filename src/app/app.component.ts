import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RouterModule, Routes, Router  } from '@angular/router';
import { appRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

}
