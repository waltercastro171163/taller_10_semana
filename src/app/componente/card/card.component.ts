import { Component, OnInit } from '@angular/core';


// import{PageEvent} from '@angular/material/paginator'; 
// import { NgxPaginationModule } from 'ngx-pagination';


//*Importamos el servicio:
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //* Codigo painador traido de la documentacion de angular
    pages: number = 1;
    dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];
    
  //*Declaramos variables que contiene los datos
  datosApi!: any;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.obtenerDatosApi()
  }

  obtenerDatosApi() {
    this.apiService.obtenerDatos()
      .subscribe(res =>
        this.datosApi = res,       
        err => console.log(err))

  }




}
