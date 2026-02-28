import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  private readonly validationEndpoint = 'https://stringsorterapi-evdhd7c2bshwf3e4.westeurope-01.azurewebsites.net/api/StringSorter/validate-endpoint';  

  constructor(private http: HttpClient) {}

  validate(email: string, url: string) {
    return this.http.post(this.validationEndpoint, { email, url });
  }
}
