import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayComponent } from './pages/array/array/array.component';
import { SetComponent } from './pages/set/set.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayComponent,
    SetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
