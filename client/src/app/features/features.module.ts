import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashComponent } from './crypto/hash/hash.component';
import { SharedModule } from '../shared/shared.module';
import { PasswordGeneratorComponent } from './crypto/password-generator/password-generator.component';


@NgModule({
  declarations: [
    HashComponent,
    PasswordGeneratorComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class FeaturesModule { }
