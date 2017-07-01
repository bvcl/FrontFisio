import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExibiartigoPage } from './exibiartigo';

@NgModule({
  declarations: [
    ExibiartigoPage,
  ],
  imports: [
    IonicPageModule.forChild(ExibiartigoPage),
  ],
  exports: [
    ExibiartigoPage
  ]
})
export class ExibiartigoPageModule {}
