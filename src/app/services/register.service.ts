import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModelRegister } from '../utils/model-register';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  FormListRegister :any =[{}]
  constructor(private http: HttpClient) { }


  public getypeDocumentsApi(): Observable<ModelRegister> {
    let apiUrl = "https://api.bancoink.biz/qa/signup/documentTypes?apiKey=030106"
    return this.http.get<ModelRegister>(apiUrl);
  }
}
