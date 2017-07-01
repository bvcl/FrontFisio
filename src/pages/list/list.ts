import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VisualizarPage } from './../visualizar/visualizar';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [ServiceProvider]
})
export class ListPage {
  public diag;
  public tempLesao;
  public faixaEtaria;
  public sexo;
  public emailFisio;
  public nomeFisio;
  public senhaFisio;
  users:any[];

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public service: ServiceProvider,public navParams: NavParams) {
    this.diag = navParams.get("diagnostico");
    this.tempLesao = navParams.get("tempoDaLesao");
    this.faixaEtaria = navParams.get("faixaEtaria");
    this.sexo = navParams.get("sexo");
    this.nomeFisio=navParams.get("nomeFisio");
    this.emailFisio=navParams.get("emailFisio");
    this.senhaFisio=navParams.get("senhaFisio");
    console.log(this.diag);
    console.log(this.tempLesao);
    console.log("Em List.ts");
    console.log(this.emailFisio);
    this.getDados();
  }

  getDados(){
    this.service.getData(this.diag,this.tempLesao,this.faixaEtaria,this.sexo).subscribe(
      data=>this.users = data,
      err=>console.log(err)
    );
  }

  visualizar(codigo){
    this.navCtrl.push(VisualizarPage, {
      code: codigo,
      emailFisio: this.emailFisio,
      nomeFisio:this.nomeFisio,
      senhaFisio:this.senhaFisio
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
