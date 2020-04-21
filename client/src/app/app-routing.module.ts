import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HashComponent } from './features/crypto/hash/hash.component';
import { PasswordGeneratorComponent } from './features/crypto/password-generator/password-generator.component';
import { SipCalculatorComponent } from './features/finance/sip-calculator/sip-calculator.component';
import { EmiCalculatorComponent } from './features/finance/emi-calculator/emi-calculator.component';
import { MockResponseComponent } from './features/http/mock-response/mock-response.component';
import { StatusCodesComponent } from './features/http/status-codes/status-codes.component';
import { MobileAppsComponent } from './features/apps/mobile-apps/mobile-apps.component';
import { TermsPolicyComponent } from './pages/terms-policy/terms-policy.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: MobileAppsComponent, data: { title: 'Home' }
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
    path: 'http/rest', redirectTo: 'http/mock-rest-response', pathMatch: 'full'
  },
  {
    path: 'http/mock-rest-response', component: MockResponseComponent, data: { title: 'Mock RESTful Response' }
  },
  {
    path: 'http/status-codes', component: StatusCodesComponent, data: { title: 'HTTP Status Codes' }
  },
  {
    path: 'apps', component: MobileAppsComponent, data: { title: 'Android Mobile Application' }
  },
  {
    path: 'terms-policy', component: TermsPolicyComponent, data: { title: 'Terms and Privacy Policy' }
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
