import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { fadeInUp, fadeIn } from '../../services/animations';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  animations: [fadeInUp, fadeIn]
})
export class Contact {
  contactForm: FormGroup;
  submitted = false;
  submitSuccess = false;
  submitError = false;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.submitError = false;
    this.submitSuccess = false;

    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const formData = this.contactForm.value;

      this.emailService.sendEmail(formData).subscribe({
        next: (response) => {
          this.submitSuccess = true;
          this.contactForm.reset();
          this.submitted = false;
          this.isSubmitting = false;

          setTimeout(() => {
            this.submitSuccess = false;
          }, 5000);
        },
        error: (error) => {
          console.error('Email send error:', error);
          this.submitError = true;
          this.isSubmitting = false;

          setTimeout(() => {
            this.submitError = false;
          }, 5000);
        }
      });
    } else if (this.contactForm.invalid) {
      this.submitError = true;
      setTimeout(() => {
        this.submitError = false;
      }, 3000);
    }
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
