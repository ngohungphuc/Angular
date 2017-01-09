import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeService} from "../recipe.service";
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

    constructor(private recipeService: RecipeService) {

    }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }

    //fire up the event
    onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }


}
