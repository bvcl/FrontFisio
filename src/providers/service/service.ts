import { Observable } from 'rxjs/Observable';
import { Injectable} from '@angular/core';
import { Http, HttpModule,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ServiceProvider {

  api:string = 'http://localhost:8080/FisioFinal/rest';

  constructor(public http: Http) {
    console.log('Hello ServiceProvider Provider');
  }

  getData(url1,url2){
      return this.http.get(this.api+'/filtro/'+url1+'/'+url2).map(res=>res.json());
  }

  tryLogin(email,password){
    return this.http.get(this.api+'/usuario/'+email+'/'+password).map(res=>res.json());
  }
  cadastrar(email,nome,senha){
      let data = {
          "email": email,
          "nome": nome,
          "password": senha
      }
      let body = JSON.stringify(data);
      let head = new Headers({
          'Content-Type': 'application/json'
      });

      return  this.http.post(this.api+'/usuario/', body, {headers : head}).map(res =>  res.json());
  }





}
