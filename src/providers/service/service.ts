import { Observable } from 'rxjs/Observable';
import { Injectable} from '@angular/core';
import { Http, HttpModule } from '@angular/http';
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

  tryLogin(coffito,password){
    return this.http.get(this.api+'/usuario/'+coffito+'/'+password).map(res=>res.json());
  }

}
