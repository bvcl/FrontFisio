import { ListPage } from './../list/list';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  filters = {};
  users:any[];

  public filterDiag;
  public filterTempoLesao;
  public emailFisio;
  public nomeFisio;
  public senhaFisio;
  constructor(public navCtrl: NavController, public service: ServiceProvider,public navParams: NavParams) {
      this.nomeFisio=navParams.get("nomeFisio");
      this.emailFisio=navParams.get("emailFisio");
      this.senhaFisio=navParams.get("senhaFisio");
      console.log("Em home.ts");
      console.log(this.emailFisio);
  }

  proxima(){
    var diagAux = this.filterDiag;
    var tempoLesaoAux = this.filterTempoLesao;
    this.filterDiag="";
    this.filterTempoLesao="";
    console.log(this.filterDiag);
    console.log(this.filterTempoLesao);
    this.navCtrl.push(ListPage,{
      diagnostico: diagAux,
      tempoDaLesao: tempoLesaoAux,
      emailFisio:this.emailFisio,
      nomeFisio:this.nomeFisio,
      senhaFisio:this.senhaFisio
    });
  }

}
