import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
})
export class EmiCalculatorComponent implements OnInit {

  emiForm: FormGroup;
  monthlyEmi = 0;
  totalEMI = 0;
  totalInterest = 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.emiForm = this.formBuilder.group({
      amount:  ['', [Validators.required, Validators.min(1), Validators.max(999999999)]],
      interest: [10, [Validators.required]],
      tenure: [2, [Validators.required]],
    });

    this.onChanges();
  }

  onChanges(): void {
    this.emiForm.valueChanges.subscribe(form => {

      const amount = form.amount;
      const interest = form.interest / 12 / 100;
      const tenure = form.tenure * 12;

      const emi =
        parseFloat((amount * interest * (Math.pow(1 + interest, tenure)) / (Math.pow(1 + interest, tenure) - 1)).toFixed(2));

      this.monthlyEmi = emi;
      this.totalEMI = parseFloat((emi * tenure).toFixed(2));
      this.totalInterest = parseFloat((this.totalEMI - amount).toFixed(2));
    });
  }
}
