import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as crypto from 'crypto-js';

@Component({
  selector: 'app-hash',
  templateUrl: './hash.component.html',
})
export class HashComponent implements OnInit {

  hashForm: FormGroup;

  hashes = [
    'MD5',
    'SHA1',
    'SHA256',
    'SHA224',
    'SHA512',
    'SHA384',
    'SHA3',
    'RIPEMD160'
  ];

  encodings = ['Base64', 'Hex', /* 'Utf8', */ 'Utf16', 'Utf16LE', 'Latin1'];

  hashText: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.hashForm = this.formBuilder.group({
      plainText:  ['', [Validators.required]],
      digestMethod: ['', [Validators.required]],
      encodingType: ['', [Validators.required]],
    });

    this.hashForm.get('digestMethod').setValue('MD5');
    this.hashForm.get('encodingType').setValue('Hex');
  }

  onSubmit(form: any): void {

    if (!form.plainText) {
      return;
    }

    let hashedText: crypto.WordArray;
    let finalText = '';

    if (form && form.digestMethod && form.encodingType) {
      switch (form.digestMethod) {
        case 'MD5': {
          hashedText = crypto.MD5(form.plainText);
          break;
        }
        case 'SHA1': {
          hashedText = crypto.SHA1(form.plainText);
          break;
        }
        case 'SHA256': {
          hashedText = crypto.SHA256(form.plainText);
          break;
        }
        case 'SHA224': {
          hashedText = crypto.SHA224(form.plainText);
          break;
        }
        case 'SHA512': {
          hashedText = crypto.SHA512(form.plainText);
          break;
        }
        case 'SHA384': {
          hashedText = crypto.SHA384(form.plainText);
          break;
        }
        case 'SHA3': {
          hashedText = crypto.SHA3(form.plainText);
          break;
        }
        case 'RIPEMD160': {
          hashedText = crypto.RIPEMD160(form.plainText);
          break;
        }
      }

      switch (form.encodingType) {
        case 'Base64': {
          finalText = hashedText.toString(crypto.enc.Base64);
          break;
        }
        case 'Latin1': {
          finalText = hashedText.toString(crypto.enc.Latin1);
          break;
        }
        case 'Hex': {
          finalText = hashedText.toString(crypto.enc.Hex);
          break;
        }
        // case 'Utf8': {
        //   finalText = hashedText.toString(crypto.enc.Utf8);
        //   break;
        // }
        case 'Utf16': {
          finalText = hashedText.toString(crypto.enc.Utf16);
          break;
        }
        case 'Utf16LE': {
          finalText = hashedText.toString(crypto.enc.Utf16LE);
          break;
        }
      }
    }

    if (finalText) {
      this.hashText = finalText;
    }
  }

}
