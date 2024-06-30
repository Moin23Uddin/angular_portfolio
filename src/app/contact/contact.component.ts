import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  reactiveForm : FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  public sendEmail(e: Event) {
    if (this.reactiveForm.valid) {
      emailjs
        .send('service_1kpuds1', 'template_5uggoy9', {
          name: this.reactiveForm.value.name,
          email: this.reactiveForm.value.email,
          message: this.reactiveForm.value.message,
        }, 'rMujHSoBAj-puQNXG')
        .then(
          (result: EmailJSResponseStatus) => {
            console.log('SUCCESS!', result.text);
            this.snackBar.open('Email sent successfully!', 'Close', {
              duration: 3000,
              panelClass: ['custom-snackbar'],
            });
          },
          (error) => {
            console.log('FAILED...', error.text);
            this.snackBar.open('Failed to send email. Please try again.', 'Close', {
              duration: 3000,
              panelClass: ['custom-snackbar'],
            });
          }
        );
    }
  }
}
