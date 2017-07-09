import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { ProfilePage } from './../profile/profile';


@Component({
  selector: 'page-visualizar',
  templateUrl: 'visualizar.html',
  providers: [ServiceProvider]
})
export class VisualizarPage {
  public code;
  public emailFisio;
  public nomeFisio;
  public senhaFisio;
  users:any[];
  users2:any[];

  constructor(public navCtrl: NavController, public service: ServiceProvider,public navParams: NavParams,public viewCtrl:ViewController) {
    this.code = navParams.get("code");
    this.nomeFisio=navParams.get("nomeFisio");
    this.emailFisio=navParams.get("emailFisio");
    this.senhaFisio=navParams.get("senhaFisio");
    this.getDados();
    this.getComments();
    console.log(this.users);
  }

  getDados(){
    this.service.verTratamento(this.code).subscribe(
      data=>this.users = data,
      err=>console.log(err)
    );
  }

  getComments(){
    this.service.verComentarios(this.code).subscribe(
      data=>this.users2 = data,
      err=>console.log(err)
    );
  }

  selecionar(codigo){
    console.log("selecionar em visualizar.ts");
    var nomeAux = this.nomeFisio;
    var emailAux = this.emailFisio;
    var senhaAux = this.senhaFisio;
    var navAux = this.navCtrl;
    var viewAux = this.viewCtrl;
    this.service.adicionarTratamento(this.emailFisio,codigo).subscribe(
      function good (){
          alert("adicionado");
          navAux.push(ProfilePage,{
            emailFisio:emailAux,
            nomeFisio:nomeAux,
            senhaFisio:senhaAux
          }).then(()=>{
                const ind = viewAux.index;
                navAux.remove(ind);
                navAux.remove(ind-1);
                navAux.remove(ind-2);
                navAux.remove(ind-3);
             });
      },
      function bad (){alert("falha")}
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

expandItem(item){
  this.users.map((listItem)=>{
    if(item == listItem){
      listItem.expanded = !listItem.expanded;
    }else{
      listItem.expanded = false;
    }
    return listItem;
  });
}

}
