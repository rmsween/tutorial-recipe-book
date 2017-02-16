import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@Component({
  selector: 'rb-root',
  templateUrl: './recipe-book.component.html',
})
export class RecipeBookComponent {
  title = 'rb works!';
}
