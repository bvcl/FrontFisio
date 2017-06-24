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

  constructor(public navCtrl: NavController, public service: ServiceProvider,public navParams: NavParams) {
      
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
