import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private seo: SeoService
  ) { }

  ngOnInit() {

    // seo
    this.seo.generateTags(
      {
        title: 'epix.io - All Service. One Place.',
        description: `epix.io is a free and open source project that provide many difference.
          Some of the services are emi calculation, hash generation, password generation etc..`
      },
    );
  }

}
