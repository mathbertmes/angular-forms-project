import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.css'
})
export class SimpleFormComponent {
  name = new FormControl('');
  updateName() { this.name.setValue('Mikel'); }
}
