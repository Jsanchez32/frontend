import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { FilterOptions } from 'src/app/interfaces/filter-options-interface';
import { UserReponse } from 'src/app/interfaces/one-response-interface';
import {UsersResponse } from 'src/app/interfaces/user-response-interface';


const BASE_URL = environment.URL_API;



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * Obtiene la lista de mercancía aplicando filtros.
   *
   * @param filter Opciones de filtrado.
   * @returns Observable con la respuesta de la lista de mercancía.
   */
  getUser(filter: FilterOptions): Observable<UsersResponse> {
    const { size, page,keyword } = filter;
    let params = new HttpParams()
      .set('per_page', size)
      .set('page', page)
      .set('search', keyword);
    return this.http.get(`${BASE_URL}/personas`, { params });
  }

  /**
   * Obtiene información de una mercancía específica por su ID.
   *
   * @param userId ID de la mercancía.
   * @returns Observable con la información de la mercancía.
   */
  getUserId(userId: number): Observable<any> {
    return this.http.get(`${BASE_URL}/personas/${userId}`);
  }
}


