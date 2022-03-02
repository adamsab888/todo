import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TodosModule} from "./todos/todos.module";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main/main.component';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        TodosModule,
        AppRoutingModule,


    ],
    providers: [],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
