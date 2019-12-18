import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashComponent } from './crypto/hash/hash.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HashComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class FeaturesModule { }
