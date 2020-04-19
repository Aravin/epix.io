import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generate } from 'generate-password-browser';

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
      length: [10, [Validators.required]],
      upperCase: [false],
      numeric: [false],
      specialCharacter: [false],
      excludeSimilarCharacters: [false],
      exclude: [''],
      allCombination: [false],
    });

    this.onChange();
  }

  onChange(): void {

    this.passwordForm.valueChanges.subscribe(form => {
      console.log(form)
      this.generatedPassword = generate({
        length: form.length,
        uppercase: form.upperCase,
        numbers: form.numeric,
        symbols: form.specialCharacter,
        excludeSimilarCharacters: form.excludeSimilarCharacters,
        exclude: form.exclude,
        strict: form.allCombination,
      });

    });

  }

}
