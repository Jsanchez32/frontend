import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagSelectComponent } from './pages/tag-selector/tag-selector.component'; 

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tags',
        component: TagSelectComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule { }
