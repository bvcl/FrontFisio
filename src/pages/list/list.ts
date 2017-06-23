import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [ServiceProvider]
})
export class ListPage {
  public diag;
  public tempLesao;
  users:any[];

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public service: ServiceProvider,public navParams: NavParams) {
    this.diag = navParams.get("diagnostico");
    this.tempLesao = navParams.get("tempoDaLesao");
    console.log(this.diag);
    console.log(this.tempLesao);
    this.getDados();
  }

  getDados(){
    this.service.getData(this.diag,this.tempLesao).subscribe(
      data=>this.users = data,
      err=>console.log(err)
    );
  }

  itemTapped(event, item) {
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
