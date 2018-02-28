import { Component } from '@angular/core';
import { AppConfigService } from '../../_services/app-config.service';

@Component({
  selector: 'jp-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent {

  constructor(public app: AppConfigService) { }

}
