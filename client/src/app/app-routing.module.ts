import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HashComponent } from './features/crypto/hash/hash.component';
import { PasswordGeneratorComponent } from './features/crypto/password-generator/password-generator.component';
import { SipCalculatorComponent } from './features/finance/sip-calculator/sip-calculator.component';
import { EmiCalculatorComponent } from './features/finance/emi-calculator/emi-calculator.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '', component: HomeComponent, data: { title: 'Home' }
  },
  {
    path: 'crypto/hash', component: HashComponent, data: { title: 'Hash' }
  },
  {
    path: 'crypto/password-generator', component: PasswordGeneratorComponent, data: { title: 'Password Generator' }
  },
  {
    path: 'sip-calculator', component: SipCalculatorComponent, data: { title: 'SIP Calculator' }
  },
  {
    path: 'emi-calculator', component: EmiCalculatorComponent, data: { title: 'EMI Calculator' }
  },
  {
    path: '**', component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
