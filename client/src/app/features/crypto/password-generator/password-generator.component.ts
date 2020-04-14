import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generate } from 'generate-password';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
})
export class PasswordGeneratorComponent implements OnInit {

  passwordForm: FormGroup;
  generatedPassword: string;
  passwordLength = [ ...Array(128).keys() ].map( i => i + 1);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.passwordForm = this.formBuilder.group({
      length:  ['', [Validators.required]],
      lowerCase: [false],
      upperCase: [false],
      numeric: [false],
      specialCharacter: [false],
      allCombination: [false],
      excludeSimilarCharacters: [false],
      exclude: [''],
      noOfPassword: [1, [Validators.max[10]]]
    });
  }

  onSubmit(form: any) {

    const password = generate({
      length: form.length,
      lowercase: form.lowerCase,
      uppercase: form.upperCase,
      numbers: form.numeric,
      symbols: form.specialCharacter,
      excludeSimilarCharacters: form.excludeSimilarCharacters,
      exclude: form.exclude,
      strict: form.allCombination,
    });

    this.generatedPassword = password || '';
  }

}
