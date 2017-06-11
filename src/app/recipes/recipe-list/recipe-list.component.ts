import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Kacchi Biryani', 'A delicious and aromatic biryani.', 'http://rupcare.com/wp-content/uploads/2016/09/rupcare_kacchi-biryani-recipe.jpg'),
    new Recipe('Beef Steak', 'Beefsteaks are usually grilled, pan-fried, or broiled.' ,'https://www.wish-bone.com/wp-content/uploads/2013/11/CaribbeanJerkBeefSteak.jpg'),
    new Recipe('Pasta', 'Pasta is a staple food of traditional Italian cuisine.' ,'http://i.ndtvimg.com/i/2016-04/pasta-625_625x350_51461826065.jpg')
  ];

  @Output('recipeSelected') recipeName = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeName: string) {
    this.recipeName.emit(recipeName);
  }

}
