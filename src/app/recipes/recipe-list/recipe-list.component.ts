import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=51790881');

  constructor() { }

  ngOnInit() {
  }

}
