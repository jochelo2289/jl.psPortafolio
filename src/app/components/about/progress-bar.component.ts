import { Component, Input } from '@angular/core';

@Component({
  selector: 'jp-progress-bar',
  template: `
  <div class="progress-box">
    <h5>{{lenguaje}} <span class="color-heading pull-right">{{porcentaje}}%</span></h5>
    <div class="progress">
      <div class="progress-bar bg-color-base" role="progressbar" [ngStyle]="{'width': porcentaje + '%'}"></div>
    </div>
  </div>
  `,
  styles: []
})
export class ProgressBarComponent {
  @Input('leng') lenguaje: string;
  @Input('porc') porcentaje: number;
}
