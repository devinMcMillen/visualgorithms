import { CodeVisualizationComponent } from './pages/code-visualization/code-visualization.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrayComponent } from './pages/array/array.component';
import { SetComponent } from './pages/set/set.component';

const routes: Routes = [
  {path: 'array', component: ArrayComponent},
  {path: 'set', component: SetComponent},
  {path: '', component: CodeVisualizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
