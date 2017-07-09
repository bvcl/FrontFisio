import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { ProfilePage } from './../profile/profile';

@Component({
  selector: 'page-avaliacao',
  templateUrl: 'avaliacao.html',
  providers: [ServiceProvider]
})
export class AvaliacaoPage {
  users:any[];
  users2:number[];
  public paramNotaTempTrat;
  public paramNotaEficacia;
  public emailFisio;
  public nomeFisio;
  public senhaFisio;
  public paramComentario:any[];
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public service: ServiceProvider,public navParams: NavParams,public viewCtrl: ViewController) {
    this.paramComentario = new Array();
    this.nomeFisio=navParams.get("nomeFisio");
    this.emailFisio=navParams.get("emailFisio");
    this.senhaFisio=navParams.get("senhaFisio");
    this.getCodes();
    this.getDados();
    console.log(this.users2);
  }

  getDados(){
      console.log("email1:"+this.emailFisio);
      this.service.getToEvaluate(this.emailFisio).subscribe(
      data=>this.users = data,
      err=>console.log(err)
    );
  }
  getCodes(){
    console.log("email2:"+this.emailFisio);
    this.service.getCodes(this.emailFisio).subscribe(
      data=>this.users2 = data,
      err=>console.log(err)
    );
  }

  //Falta fazer:
  //parte de remover da lista quando o tratamento for avaliado
  //atualizar a quantidade de avaliações positivas e negativas

  naoAvaliar(codigoRel){
    var navAux = this.navCtrl;
    var nomeAux = this.nomeFisio;
    var emailAux = this.emailFisio;
    var senhaAux = this.senhaFisio;
    var viewAux = this.viewCtrl;
    this.service.excludeFromEvalList(codigoRel).subscribe(
      function good(){
        navAux.push(AvaliacaoPage,{
          emailFisio:emailAux,
          nomeFisio:nomeAux,
          senhaFisio:senhaAux
        }).then(()=>{
              const ind = viewAux.index;
              navAux.remove(ind);
           });
      },
      function bad(){console.log("nao excluiu")}
    );
  }

  avaliar(codigoTrat,codigoRel,posOrNeg){
    var navAux = this.navCtrl;
    var nomeAux = this.nomeFisio;
    var emailAux = this.emailFisio;
    var senhaAux = this.senhaFisio;
    var serviceAux = this.service;
    var viewAux = this.viewCtrl;
    this.service.atualizarNotasTratamento(codigoTrat,posOrNeg,this.paramNotaTempTrat,this.paramNotaEficacia).subscribe(
      function good(){
        serviceAux.excludeFromEvalList(codigoRel).subscribe(
          function good(){
            navAux.push(AvaliacaoPage,{
              emailFisio:emailAux,
              nomeFisio:nomeAux,
              senhaFisio:senhaAux
            }).then(()=>{
                  const ind = viewAux.index;
                  navAux.remove(ind);
               });
          },
          function bad(){console.log("nao excluiu")}
        );
      },
      function bad(){console.log("nao avaliou")}
    );
  }

  shownGroup = null;

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};

}
