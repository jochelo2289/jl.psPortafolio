import { Component } from '@angular/core';
import { AppConfigService } from '../../_services/app-config.service';

@Component({
  selector: 'jp-slider',
  templateUrl: './slider.component.html',
  styles: []
})
export class SliderComponent {

  constructor(public app: AppConfigService) { }

}
