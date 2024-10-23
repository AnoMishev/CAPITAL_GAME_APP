import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitalCityModule } from '../app/game/game.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/game/game.module').then(m => m.CapitalCityModule)
  },
  {
    path: "**",
    redirectTo: ''
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
