import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit, OnChanges {
  @Input('recipe') recipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipe = new Recipe('Recipe Name', 'Lorem Ipsum', '', []);
  }

  ngOnChanges(changes) {
    console.log('Changed', changes.recipe.currentValue, changes.recipe.previousValue);
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
