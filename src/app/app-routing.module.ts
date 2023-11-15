import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProjetoArcadeComponent } from './projeto-arcade/projeto-arcade.component';
import { DesignGraficoComponent } from './design-grafico/design-grafico.component';


const routes: Routes = [
  {
    path: '',
    component: WorkComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'arcade-plus',
    component: ProjetoArcadeComponent,
  },
  {
    path: 'design-grafico',
    component: DesignGraficoComponent,
  },
  { path: '**', redirectTo: 'work' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
