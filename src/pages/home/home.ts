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
  public nomeFisio;

  constructor(public navCtrl: NavController, public service: ServiceProvider,public navParams: NavParams) {
        this.nomeFisio=navParams.get("nomeFisio");
        console.log(this.nomeFisio);
  }

  proxima(){
    console.log(this.filterDiag);
    console.log(this.filterTempoLesao);
    this.navCtrl.push(ListPage,{
      diagnostico: this.filterDiag,
      tempoDaLesao: this.filterTempoLesao
    });
  }

}
