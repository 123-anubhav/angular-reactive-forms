import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-form_in-angular';
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', Validators.required)
  });


  /* 
  How It Works:
This is a getter function that returns the controls object of the form (FormGroup).
form.controls contains all form fields (name, email, body) and their respective validation states.
It simplifies access to form controls in the HTML template.
 */
  get f() {
    return this.form.controls;
  }

  /* 
  Benefits of f() Function
✅ Code Simplification: Instead of writing form.controls['name'] repeatedly, we use f['name'].
✅ Improved Readability: The template becomes cleaner and easier to understand.
✅ Reusability: It can be used for multiple form controls without modifying the HTML structure
  */

  submit() {
    console.log(this.form.value);
    alert("form submitted successfully ::\ncheck your browser console");
  }
}
