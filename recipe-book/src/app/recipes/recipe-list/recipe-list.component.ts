import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  //call from recipes html to this event
  //then pass to onSelected function
  //then in recipe list html call onselect pass data receive from recipes
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dumny', 'https://avatars1.githubusercontent.com/u/13591213?v=3&s=460');

  //fire up the event
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
