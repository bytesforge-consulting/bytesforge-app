import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    //Adicionar can activate
    path: 'internal',
    loadChildren: () =>
      import('./modules/internal/internal.module').then(
        (m) => m.InternalModule
      ),
      canActivate: [false]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
