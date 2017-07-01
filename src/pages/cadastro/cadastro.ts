import { LoginPage } from './../login/login';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public paramEmailCad;
  public paramNomeCad;
  public paramSenhaCad;
  public paramCoffitoCad;
  public result;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service: ServiceProvider,public toastCtrl: ToastController) {
  }

  cadastrar(){
      var emailAux=this.paramEmailCad;
      var nomeAux=this.paramNomeCad;
      var senhaAux=this.paramSenhaCad;
      var coffitoAux=this.paramCoffitoCad;
      this.paramEmailCad="";
      this.paramNomeCad="";
      this.paramSenhaCad="";
      this.paramCoffitoCad="";
      this.service.cadastrar(emailAux,nomeAux,senhaAux,coffitoAux).subscribe(
        
        //function good(){alert("Cadastro Válido");ctrl.push(LoginPage)},
        //function bad(){alert("Cadastro Inválido")}

      );
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Cadastro realizado com sucesso!',
      duration: 1000,
    });
    toast.present(this.navCtrl.push(LoginPage));
  }

}
