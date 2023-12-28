import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/dist/types';
import { ModelRegister } from '../utils/model-register';
import { ModelSinup } from '../utils/model-sinup';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) { }


  public singUpApi(): Observable<any> {
    let apiUrl = "https://api.bancoink.biz/qa/signup/genders?apiKey=030106"
    return this.http.get< ModelSinup>(apiUrl);
  }
}
