import { HomePage } from './../home/home';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public paramCoffito;
  public paramPassword;
  public login;

  constructor(public navCtrl: NavController, public service: ServiceProvider) {

  }

  tentarLogin(){
    console.log(this.paramCoffito);
    console.log(this.paramPassword);
    this.service.tryLogin(this.paramCoffito,this.paramPassword).subscribe(data=>this.login=data);

    if(this.login!=null){
      this.navCtrl.push(HomePage,{
        nomeFisio: this.login
      });
    }
    else{
      console.log("Falha ao logar");
    }
  }

}
