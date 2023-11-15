import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-projeto-arcade',
  templateUrl: './projeto-arcade.component.html',
  styleUrls: ['./projeto-arcade.component.scss']
})
export class ProjetoArcadeComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Aplicativo De Visualização De Jogos Para Um Fliperama");
  }
}
