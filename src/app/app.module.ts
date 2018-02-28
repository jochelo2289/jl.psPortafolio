import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { AboutComponent } from './components/about/about.component';
import { ProgressBarComponent } from './components/about/progress-bar.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

// Servicios
import { AppConfigService } from './_services/app-config.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    AboutComponent,
    ProgressBarComponent,
    ExperienceComponent,
    WorkComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [AppConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
