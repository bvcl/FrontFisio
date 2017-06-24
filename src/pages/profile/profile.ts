import { HomePage } from './../home/home';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  public nomeFisio;
  public emailFisio;
  public senhaFisio;
  public nomeFisioResum;

  constructor(public navCtrl: NavController, public service: ServiceProvider,public navParams: NavParams) {
        this.nomeFisio=navParams.get("nomeFisio");
        this.emailFisio=navParams.get("emailFisio");
        this.senhaFisio=navParams.get("senhaFisio");
        this.nomeFisioResum = this.nomeFisio.substring(0,this.nomeFisio.indexOf(" "));
  }

  irTelaPesquisa(){
    this.navCtrl.push(HomePage);
  }
  verInfoPerfil(){
    alert(this.nomeFisio+"  "+this.emailFisio+"  "+this.senhaFisio);
  }
  avaliarUsados(){

  }

}
