import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleFormComponent } from "./components/reactive/simple-form/simple-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, SimpleFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  favoriteColorControl = new FormControl('');
  favoriteColor = '';
}
