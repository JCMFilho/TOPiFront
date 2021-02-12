import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MealsService {

  constructor(private http: HttpClient) { }

  private urlBase: string = "http://localhost:8080/api/meal";

  buscarMeals(meal):Observable<any>{
    return this.http.get(this.urlBase+'/buscar-meal/'+meal);
  }

  buscarMealsPesquisados():Observable<any>{
    return this.http.get(this.urlBase);
  }

}
