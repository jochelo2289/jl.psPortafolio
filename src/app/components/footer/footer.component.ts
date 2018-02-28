import { Component } from '@angular/core';
import { AppConfigService } from '../../_services/app-config.service';

@Component({
  selector: 'jp-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {
  public year = new Date().getFullYear();

  constructor(public app: AppConfigService) { }
}
