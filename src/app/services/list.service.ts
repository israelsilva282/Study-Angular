import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = "http://localhost:3000/animals"

  constructor(private http:HttpClient) { }

  getAll():Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id:number):Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a)=> animal.name !== a.name)
  }
}
