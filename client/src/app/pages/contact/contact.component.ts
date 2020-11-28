import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import moment from 'moment';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  mailSent: boolean;
  mailCompleted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpServiceService,
    ) { }

  ngOnInit() {

    this.contactForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(24)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.minLength(8), Validators.maxLength(12)]],
      message: ['', [Validators.required]],
    });
  }

  sendEmail() {

    const emailBody = {
      to: ['Aravind A <aravin.it@gmail.com>'],
      cc: undefined,
      bcc: undefined,
      from: 'Aravind epix.io <aravin@epix.io>', // Use the email address or domain you verified above
      replyTo: this.contactForm.value.email || undefined,
      subject: `Contact Request - epix.io - ${this.contactForm.value.fullName} - ${moment().format('DD MMM YYYY h:mm A (ddd)')}`,
      text: this.contactForm.value.message,
      html:
        `<p>Hi Team,</p>
      <p>Contact Request received. Please find the details below:</p>
      <p><strong>Contact Person</strong>: ${this.contactForm.value.fullName}</p>
      <p><strong>Phone</strong>: ${this.contactForm.value.phone}</p>
      <p><strong>Email</strong>: <a href="mailto:${this.contactForm.value.email}">${this.contactForm.value.email}</a></p>
      <p><strong>Request</strong>:</p>
      <ul>
      <li>${this.contactForm.value.message}</li>
      </ul>
      <br/>
      <p>---</p>`,
    };

    this.httpService.sendEmail(emailBody)
      .then(
        (data) => {
          this.mailSent = true;
          this.mailCompleted = true;
        },
        (err) => {
          this.mailSent = false;
          this.mailCompleted = true;
        });


    const emailBody2 = {
      to: this.contactForm.value.email,
      cc: undefined,
      bcc: undefined,
      from: 'Aravind epix.io <aravin@epix.io>', // Use the email address or domain you verified above
      replyTo: 'Aravind epix.io <aravin@epix.io>',
      subject: `Thanks for reaching epix.io`,
      text: this.contactForm.value.message,
      html:
        `<p>Hi Team,</p>
          <p>Contact Request received. Please find the details below:</p>
          <p><strong>Contact Person</strong>: ${this.contactForm.value.fullName}</p>
          <p><strong>Phone</strong>: ${this.contactForm.value.phone}</p>
          <p><strong>Email</strong>: <a href="mailto:${this.contactForm.value.email}">${this.contactForm.value.email}</a></p>
          <p><strong>Request</strong>:</p>
          <ul>
          <li>${this.contactForm.value.message}</li>
          </ul>
          <br/>
          <p>---</p>`,
    };
    this.httpService.sendEmail(emailBody2)
      .then(
        (data) => {
          this.mailSent = true;
          this.mailCompleted = true;
        },
        (err) => {
          this.mailSent = false;
          this.mailCompleted = true;
        });
  }

}
