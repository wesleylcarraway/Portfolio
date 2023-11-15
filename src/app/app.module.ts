import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SobreComponent } from './sobre/sobre.component';
import { RouterModule } from '@angular/router';
import { ProjetoArcadeComponent } from './projeto-arcade/projeto-arcade.component';
import { DesignGraficoComponent } from './design-grafico/design-grafico.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    MenuComponent,
    SobreComponent,
    ProjetoArcadeComponent,
    DesignGraficoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
