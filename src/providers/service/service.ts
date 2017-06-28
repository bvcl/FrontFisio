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

  getToEvaluate(email){
      return this.http.get(this.api+'/user_trat/'+email+'/1/').map(res=>res.json());
  }
  getCodes(email){
      return this.http.get(this.api+'/user_trat/'+email+'/0/').map(res=>res.json());
  }
  excludeFromEvalList(codigo){
      return this.http.delete(this.api+'/user_trat/'+codigo).map(res=>res.json());
  }

  verTratamento(codigo){
      return this.http.get(this.api+'/filtro/'+codigo).map(res=>res.json());
  }
  verComentarios(codigo){
      return this.http.get(this.api+'/comment_trat/'+codigo).map(res=>res.json());
  }

  tryLogin(email,password){
    return this.http.get(this.api+'/usuario/'+email+'/'+password).map(res=>res.json());
  }

  getNameByEmail(email){
    return this.http.get(this.api+'/usuario/'+email).map(res=>res.json());
  }
  cadastrar(email,nome,senha,coffito){
      let data = {
          "email": email,
          "nome": nome,
          "password": senha,
          "coffito":coffito
      }
      let body = JSON.stringify(data);
      let head = new Headers({
          'Content-Type': 'application/json'
      });

      return  this.http.post(this.api+'/usuario/', body, {headers : head}).map(res =>  res.json());
  }

  adicionarTratamento(email,codigo){
      let data = {
          "userEmail": email,
          "tratID": codigo,
      }
      let body = JSON.stringify(data);
      let head = new Headers({
          'Content-Type': 'application/json'
      });

      return  this.http.post(this.api+'/user_trat/', body, {headers : head}).map(res =>  res.json());
  }

  adicionarComentario(email,codigo,comentario){
      let data = {
          "userEmail": email,
          "tratID": codigo,
          "comentario":comentario
      }
      let body = JSON.stringify(data);
      let head = new Headers({
          'Content-Type': 'application/json'
      });

      return  this.http.post(this.api+'/comment_trat/', body, {headers : head}).map(res =>  res.json());
  }







}
