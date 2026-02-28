import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ValidationService } from '../../service/validation.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-api-test',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './api-test.component.html',
  styleUrl: './api-test.component.css'
})
export class ApiTestComponent {

  email: string = '';
  endpointUrl: string = '';
  response: any = null; 
  loading = false; 
  error: string | null = null;

  constructor(private validationService: ValidationService) {}

    onSubmit() {
    // console.log('submit', this.email, this.endpointUrl);

    this.loading = true;
    this.error = null;
    this.response = null;

    this.validationService.validate(this.email, this.endpointUrl)
      .subscribe({
        next: (res) => {
          this.response = res;
          this.loading = false;
        }, 
        error: (err) => {
          this.error = 'Validation failed.';
          console.error(err);
          this.loading = false; } }
      );
  }
}
