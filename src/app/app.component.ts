import { Component } from '@angular/core';
import { AppConfigService } from './_services/app-config.service';

@Component({
  selector: 'jp-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  constructor(public app: AppConfigService) {}
}
