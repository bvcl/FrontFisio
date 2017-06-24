import { ProfilePage } from './../profile/profile';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public paramEmail;
  public paramPassword;
  public login;


  constructor(public navCtrl: NavController, public service: ServiceProvider) {

  }

  tentarLogin(){
    console.log(this.paramEmail);
    console.log(this.paramPassword);
    this.service.tryLogin(this.paramEmail,this.paramPassword).subscribe(res=>this.login=res);

    if(this.login!=null){
      alert("Login realizado com sucesso");
      this.navCtrl.push(ProfilePage,{
        nomeFisio: this.login,
        emailFisio:this.paramEmail,
        senhaFisio:this.paramPassword
      });
    }
    else{
      this.paramPassword="";
      alert("Email ou Senha incorretos");
    }
  }

}
