import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-test',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './api-test.component.html',
  styleUrl: './api-test.component.css'
})
export class ApiTestComponent {

  email: string = '';
  endpointUrl: string = '';

  onSubmit() {
  console.log('submit', this.email, this.endpointUrl);
}
}
