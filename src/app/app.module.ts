import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//estos son requisitos cuando trabajamos con formularios
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//********************* */
import { MenuComponent } from './componente/menu/menu.component';

// *Importacion de Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {CardComponent } from './componente/card/card.component';

// Importamos el modulo del http y el paginador.
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //* Nuevos
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    NgxPaginationModule
    
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
