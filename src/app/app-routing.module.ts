import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' }, // localhost:4200
  {
    path: 'alerts',
    loadChildren: () =>
      import('./alerts/alerts.module').then(m => m.OrdersModule)
  },
  {
    path: 'people',
    loadChildren: () =>
      import('./people/people.module').then(m => m.ClientsModule)
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        m => m.PageNotFoundModule
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabledBlocking'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
