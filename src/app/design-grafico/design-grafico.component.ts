import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-design-grafico',
  templateUrl: './design-grafico.component.html',
  styleUrls: ['./design-grafico.component.scss']
})
export class DesignGraficoComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Design Gráfico");
  }
}
