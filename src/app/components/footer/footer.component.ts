import { Component } from '@angular/core';

@Component({
  selector: 'jp-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {
  public year = new Date().getFullYear();
}
