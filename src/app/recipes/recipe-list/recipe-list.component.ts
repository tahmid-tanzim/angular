import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Kacchi Biryani', 'Slow cooked chicken, rice, curd, saffron and varied masalas combined together to make a delicious and aromatic biryani.', 'http://rupcare.com/wp-content/uploads/2016/09/rupcare_kacchi-biryani-recipe.jpg'),
    new Recipe('Beef Steak', 'A beefsteak is a flat cut of beef, usually cut perpendicular to the muscle fibers. Beefsteaks are usually grilled, pan-fried, or broiled.' ,'https://www.wish-bone.com/wp-content/uploads/2013/11/CaribbeanJerkBeefSteak.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
