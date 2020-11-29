import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashComponent } from './crypto/hash/hash.component';
import { SharedModule } from '../shared/shared.module';
import { PasswordGeneratorComponent } from './crypto/password-generator/password-generator.component';
import { SipCalculatorComponent } from './finance/sip-calculator/sip-calculator.component';
import { EmiCalculatorComponent } from './finance/emi-calculator/emi-calculator.component';
import { MockResponseComponent } from './http/mock-response/mock-response.component';
import { StatusCodesComponent } from './http/status-codes/status-codes.component';
import { MobileAppsComponent } from './apps/mobile-apps/mobile-apps.component';
import { JsonEditorComponent } from './json/json-editor/json-editor.component';
import { TextDiffComponent } from './code/text-diff/text-diff.component';

@NgModule({
  declarations: [
    HashComponent,
    PasswordGeneratorComponent,
    SipCalculatorComponent,
    EmiCalculatorComponent,
    MockResponseComponent,
    StatusCodesComponent,
    MobileAppsComponent,
    JsonEditorComponent,
    TextDiffComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class FeaturesModule { }
