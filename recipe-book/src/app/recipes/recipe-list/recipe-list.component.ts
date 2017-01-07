import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dummy', 'Dumny', 'http://simpleproductphotography.com/wp-content/uploads/2016/06/huf-converse-product-red-skidgrip-1.jpg',[]),
    new Recipe('Summer salad', 'okayfish', 'https://www.eukicks.com/wp-content/uploads/2009/11/2.jpg',[])
  ];
  //call from recipes html to this event
  //then pass to onSelected function
  //then in recipe list html call onselect pass data receive from recipes
  @Output() recipeSelected = new EventEmitter<Recipe>();

  //fire up the event
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
