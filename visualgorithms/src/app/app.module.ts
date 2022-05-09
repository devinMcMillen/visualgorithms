import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayComponent } from './pages/array/array.component';
import { SetComponent } from './pages/set/set.component';
import { ArrayElementComponent } from './pages/array/array-element/array-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayComponent,
    SetComponent,
    ArrayElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
