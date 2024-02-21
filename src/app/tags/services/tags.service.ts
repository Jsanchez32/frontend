import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Tag,Datum} from 'src/app/interfaces/tag-interface';
@Injectable({
  providedIn: 'root'
})
export class TagService {
  private apiUrl = 'https://backendlaravel-production-a62b.up.railway.app/api/tag-associations';

  constructor(private http: HttpClient) { }

  getNivel1Tags(): Observable<Datum[]> {
    return this.http.get<Tag>(`${this.apiUrl}?nombre_nivel1`).pipe(
      map((response: Tag) => response.data ?? [])
    );
  }

  getNivel2Tags(nombreNivel1: string): Observable<Datum[]> {
    return this.http.get<Tag>(`${this.apiUrl}?nombre_nivel1=${nombreNivel1}`).pipe(
      map((response: Tag) => response.data ?? [])
    );
  }

  getNivel3Tags(nombreNivel1: string, nombreNivel2: string): Observable<Datum[]> {
    return this.http.get<Tag>(`${this.apiUrl}?nombre_nivel1=${nombreNivel1}&nombre_nivel2=${nombreNivel2}`).pipe(
      map((response: Tag) => response.data ?? [])
    );
  }

  getNivel4Tags(nombreNivel1: string, nombreNivel2: string, nombreNivel3: string): Observable<Datum[]> {
    return this.http.get<Tag>(`${this.apiUrl}?nombre_nivel1=${nombreNivel1}&nombre_nivel2=${nombreNivel2}&nombre_nivel3=${nombreNivel3}`).pipe(
      map((response: Tag) => response.data ?? [])
    );
  }
}