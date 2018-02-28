import { Component } from '@angular/core';
import { AppConfigService } from '../../_services/app-config.service';

@Component({
  selector: 'jp-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent {

  constructor(public app: AppConfigService) { }

}
