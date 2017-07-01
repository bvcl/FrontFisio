import { CadastroPage } from './../cadastro/cadastro';
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
    var ctrl = this.navCtrl;
    var emailAux = this.paramEmail;
    var senhaAux = this.paramPassword;
    this.paramPassword="";
    this.service.tryLogin(this.paramEmail,this.paramPassword).subscribe(
      function good(){
        ctrl.push(ProfilePage,{
        nomeFisio: "bruno lira",
        emailFisio:emailAux,
        senhaFisio:senhaAux
      })},
      function bad(){alert("Email ou Senha incorretos")}
    )
  }

    irTelaCadastro(){
      this.navCtrl.push(CadastroPage);
    }
}
