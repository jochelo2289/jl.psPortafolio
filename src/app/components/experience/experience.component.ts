import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jp-experience',
  templateUrl: './experience.component.html',
  styles: []
})
export class ExperienceComponent implements OnInit {

  public experiencia = 0;

  constructor() { }

  ngOnInit() {
    const year_init = 2014;
    const year_today = new Date().getFullYear();

    this.experiencia = year_today - year_init;
  }

}
