import { Injectable } from '@angular/core';

//*Importaciones que debemos realizar
import { HttpClient,HttpClientModule } from '@angular/common/http';

import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL_API='https://restcountries.com/v3.1/all';

  constructor(private http:HttpClient) {  }

  obtenerDatos(){
    return this.http.get<any>(this.URL_API)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  
}
