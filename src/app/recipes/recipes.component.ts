import { Component, OnInit } from '@angular/core';

import { RecipeListComponent } from './recipe-list/recipe-list.component';

@Component({
  moduleId: module.id,
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
