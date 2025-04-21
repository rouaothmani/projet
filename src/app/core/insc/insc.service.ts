import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscService {
  constructor(private http: HttpClient) {}

  checkCin(cin: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post<any>(
      'http://localhost/agil/insc.php',
      JSON.stringify({ cin: cin }),
      { headers: headers }
    );
  }
}