import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  onSubmit() {
  console.log('submit', this.email, this.endpointUrl);

  this.loading = true;
  this.error = null;
  this.response = null;

  setTimeout(() => { 
    this.loading = false;
    this.response = { message: 'Fake success response' }; 
    }, 1500
  );}
}
