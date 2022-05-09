import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrayComponent } from './pages/array/array.component';
import { SetComponent } from './pages/set/set.component';

const routes: Routes = [
  {path: 'array', component: ArrayComponent},
  {path: 'set', component: SetComponent},
  {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
