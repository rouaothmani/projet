import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private Url = 'http://localhost:3000/header';

  constructor(private http: HttpClient) { }

  login(cin: number, password: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.Url}/login`, { 
      cin: cin,
      password: password
    });
  }
}
