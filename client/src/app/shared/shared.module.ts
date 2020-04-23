import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { ShellComponent } from './shell/shell.component';

// modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TermsPolicyComponent } from '../pages/terms-policy/terms-policy.component';
import { ContactComponent } from '../pages/contact/contact.component';

const components = [
  ShellComponent
];

const modules = [
  RouterModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  CommonModule,
  MatMenuModule,
  MatCardModule,
  MatGridListModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  ReactiveFormsModule,
  FormsModule,
  MatSliderModule,
  MatRadioModule,
  MatExpansionModule,
  MatChipsModule,
];


@NgModule({
  declarations: [...components, TermsPolicyComponent, ContactComponent,],
  imports: [...modules],
  exports: [...components, ...modules],
})

export class SharedModule { }
