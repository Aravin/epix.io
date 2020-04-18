import { Component, OnInit } from '@angular/core';
import { mockRequest, mockResponse, mockUrl, httpMethods, httpResponse } from './mock-data';

@Component({
  selector: 'app-mock-response',
  templateUrl: './mock-response.component.html',
})
export class MockResponseComponent implements OnInit {

  mockRequest = mockRequest;
  mockResponse = mockResponse;
  mockUrl = mockUrl;
  httpMethods = httpMethods;
  httpResponse = httpResponse;

  constructor() { }

  ngOnInit() {
  }

}
