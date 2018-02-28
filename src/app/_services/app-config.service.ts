import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppConfigService {

  public config: any;

  constructor(private http: HttpClient) {
    this.http.get('assets/appConfig.json').subscribe(
      res => {
        this.config = res;
        console.log('Servicio', res);
      },
      err => alert('Error al configurar la pagina.')
    );
  }
}
