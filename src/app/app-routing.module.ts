import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren:()=>
      import('./users/users.module').then(
        (m)=> m.UsersModule
      )
  },
  {
    path: 'tags',
    loadChildren:()=>
      import('./tags/tags.module').then(
        (m)=> m.TagsModule
      )
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
