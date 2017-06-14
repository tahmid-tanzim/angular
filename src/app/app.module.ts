import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {appRoutes} from './app.routes';

import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {SearchComponent} from './search/search.component';
import {UserComponent} from './user/user.component';
import {ServerComponent} from './server/server.component';
import {HeaderComponent} from './header/header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {RecipeDetailsComponent} from './recipes/recipe-details/recipe-details.component';
import {AccountComponent} from './account/account.component';
import {AccountListComponent} from './account/account-list/account-list.component';
import {NewAccountComponent} from './account/new-account/new-account.component';

import {HighlightDirective} from './directive/highlight.directive';
import {UnlessDirective} from './directive/unless.directive';
import {DropdownDirective} from './directive/dropdown.directive';

import {AccountService} from './service/account.service';
import {LoggingService} from './service/logging.service';
import {ShoppingListService} from "./service/shopping-list.service";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SearchComponent,
    UserComponent,
    ServerComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailsComponent,
    HighlightDirective,
    UnlessDirective,
    DropdownDirective,
    AccountComponent,
    AccountListComponent,
    NewAccountComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ShoppingListService,
    AccountService,
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
