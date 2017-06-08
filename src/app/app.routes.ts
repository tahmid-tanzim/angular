import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


export const appRoutes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'recipe',
    component: RecipesComponent
  },
  {
    path: 'shopping',
    component: ShoppingListComponent
  }

];
