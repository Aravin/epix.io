import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sip-calculator',
  templateUrl: './sip-calculator.component.html',
})
export class SipCalculatorComponent implements OnInit {

  sipForm: FormGroup;
  amountInvested = 0;
  sipValue = 0;
  wealthGained = 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.sipForm = this.formBuilder.group({
      amount:  ['', [Validators.required, Validators.min(1), Validators.max(999999999)]],
      returns: [10, [Validators.required]],
      tenure: [2, [Validators.required]],
      frequency: ['12', [Validators.required]],
    });

    this.onChanges();
  }

  onChanges(): void {
    this.sipForm.valueChanges.subscribe(form => {

      const amount = form.amount;
      const returns = form.returns / 12 / 100;
      const tenure = form.tenure;
      const frequency = form.frequency;

      this.sipValue = amount * ((Math.pow(1 + returns, frequency * tenure) - 1) / (returns)) * (1 + returns);
      this.sipValue = parseFloat(this.sipValue.toFixed(2));

      this.amountInvested = amount * tenure * frequency;
      this.wealthGained = this.sipValue - this.amountInvested;

    });
  }

}
