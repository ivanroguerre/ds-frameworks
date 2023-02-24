import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NewComponentComponent } from './new-component/new-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { BannerPortadaComponentComponent } from './banner-portada-component/banner-portada-component.component';
import { CardSelectComponentComponent } from './card-select-component/card-select-component.component';
import { SelectComponentComponent } from './select-component/select-component.component';
import { DataTableComponentComponent } from './data-table-component/data-table-component.component';

//intalar componente
// importar componente
// configura el NgModule permitiendo schemas personalidos
@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    BannerPortadaComponentComponent,
    CardSelectComponentComponent,
    SelectComponentComponent,
    DataTableComponentComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],// VA utilizar schemas personalisados
})
export class AppModule { }
