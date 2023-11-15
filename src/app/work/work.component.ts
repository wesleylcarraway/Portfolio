import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  constructor(
    private router: Router,
    private titleService:Title
  ) { 
    this.titleService.setTitle("Marcelo Wesley");
  }

  redirectToArcadePlus() {
    this.router.navigate(['/arcade-plus'])
  }

  redirectToDesignGrafico() {
    this.router.navigate(['/design-grafico'])
  }
}
