import { LoginPage } from './../login/login';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'cadastro.html'
})

export class CadastroPage {
  public paramEmailCad;
  public paramNomeCad;
  public paramSenhaCad;
  public result;

  constructor(public navCtrl: NavController, public service: ServiceProvider) {

  }

  cadastrar(){
      var emailAux=this.paramEmailCad;
      var nomeAux=this.paramNomeCad;
      var senhaAux=this.paramSenhaCad;
      this.paramEmailCad="";
      this.paramNomeCad="";
      this.paramSenhaCad="";
      var ctrl = this.navCtrl;
      this.service.cadastrar(emailAux,nomeAux,senhaAux).subscribe(
        function good(){alert("Cadastro Válido");ctrl.push(LoginPage)},
        function bad(){alert("Cadastro Inválido")}
      );
  }

  irTelaLogin(){
    this.navCtrl.push(LoginPage);
  }
}
