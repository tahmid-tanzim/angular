import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit, OnChanges {
  @Input('recipe') recipe: Recipe;

  constructor() {
  }

  ngOnInit() {
    this.recipe = new Recipe('Recipe Name', 'Lorem Ipsum', '', []);
  }

  ngOnChanges(changes) {
    console.log('Changed', changes.recipe.currentValue, changes.recipe.previousValue);
  }

}
