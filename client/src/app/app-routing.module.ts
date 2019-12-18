import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HashComponent } from './features/crypto/hash/hash.component';

const routes: Routes = [
  // {
  //   path: '', redirectTo: 'home', pathMatch: 'full'
  // },
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'crypto/hash', component: HashComponent,
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
